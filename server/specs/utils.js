const { spawn } = require('child_process')
const fkill = require('fkill')

const initNextServerScript = (scriptPath, successString, env) => {
  return new Promise((resolve, reject) => {
    const instance = spawn('node', [scriptPath], { env })

    function handleStdout (data) {
      const message = data.toString()
      const intendedTestLog = '!!'
      if (message.indexOf(successString) !== -1 ||
        message.indexOf(intendedTestLog) !== -1) {
        resolve(instance)
        process.stdout.write(message)
      }
    }

    function handleStderr (data) {
      process.stderr.write(data.toString())
    }

    instance.stdout.on('data', handleStdout)
    instance.stderr.on('data', handleStderr)

    instance.on('close', () => {
      instance.stdout.removeListener('data', handleStdout)
      instance.stderr.removeListener('data', handleStderr)
    })

    instance.on('error', (err) => {
      reject(err)
    })
  })
}

const killApp = async (instance) => {
  await fkill(instance.pid)
}

const startServer = async (port = 3334, optEnv = {}) => {
  const scriptPath = './server.js'
  const env = Object.assign(
    {},
    JSON.parse(JSON.stringify(process.env)),
    { PORT: `${port}` },
    optEnv
  )

  // eslint-disable-next-line no-return-await
  return await initNextServerScript(scriptPath, 'Ready', env)
}

module.exports = {
  startServer,
  killApp
}
