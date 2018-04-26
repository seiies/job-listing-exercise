import React from 'react'
import PropTypes from 'prop-types'
import JobItem from './JobItem'

const JobList = props => {
  const { jobs } = props

  return (
    <React.Fragment>
      { /* language=CSS */ }
      <style jsx>{`
            .jobs {
              margin: 0;
              padding: 0;
              list-style: none;
            }
          `}</style>

      <ul className='jobs'>
        {Array.isArray(jobs) && jobs.length
          ? jobs.map((job, idx) => (
            <JobItem
              key={idx}
              job={job}
            />
          ))
          : <p>No jobs there</p>
        }
      </ul>
    </React.Fragment>
  )
}

JobList.propTypes = {
  className: PropTypes.string,
  jobs: PropTypes.array.isRequired
}

export default JobList
