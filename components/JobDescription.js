import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Paper from 'material-ui/Paper'

const JobDescription = props => {
  const {
    job: {
      title,
      html
    }
  } = props

  return (
    <React.Fragment>
      { /* language=CSS */ }
      <style jsx>{`
        .inner {
          padding: 2rem;
        }
        .back-link, .back-link:visited {
          font-size: 1.3rem;
          color: black;
          text-decoration: none;
        }
        .icon {
          vertical-align: 2px;
        }
        .full-text {
          line-height: 1.4;
        }
      `}</style>

      <Paper className={'paper'}>
        <div className='inner'>
          <Link href='/'>
            <a className='back-link'><span className='icon'>←</span> Back</a>
          </Link>
          <main>
            <h1>{title}</h1>
            <article className='full-text' dangerouslySetInnerHTML={{__html: html}} />
          </main>
        </div>
      </Paper>
    </React.Fragment>
  )
}

JobDescription.propTypes = {
  className: PropTypes.string,
  job: PropTypes.shape({
    html: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

JobDescription.defaultProps = {}

export default JobDescription
