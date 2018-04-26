import Link from 'next/link'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import config from '../next.config.js'

const JobItem = props => {
  const {
    job: {
      id,
      image,
      company,
      title
    }
  } = props

  const jobPageConfig = config.routes.jobPage
  const jobUrl = {
    as: jobPageConfig.routeWithParam.replace(':id', id),
    href: {
      pathname: jobPageConfig.route,
      query: { id: id }
    }
  }

  return (
    <React.Fragment>
      { /* language=CSS */ }
      <style jsx>{`
          .job {
            margin-bottom: 1em;
          }

          .job:last-child {
            margin-bottom: 0;
          }

          .block {
            display: flex;
            align-items: flex-start;
            padding: 1rem;
          }

          .blockImg {
            width: 6.25rem;
            margin: 0 1rem 0 0;
          }

          .blockBody {
            flex: 1;
          }

          a {
            text-decoration: none;
          }

          .jobTitle {
            font-size: 1.5rem;
            margin-top: 0;
            margin-bottom: .5rem;
            color: black;
          }

          .companyName {
            margin: 0;
            font-size: .9rem;
            color: gray;
          }
        `}</style>

      <li className='job'>
        <Link href={jobUrl.href} as={jobUrl.as}>
          <a title='Job full description'>
            <Paper elevation={3}>
              <div className='block'>
                <img className='blockImg' src={image} alt='Company logo' />
                <div className='blockBody'>
                  <h2 className='jobTitle'>{title}</h2>
                  <p className='companyName'>{company}</p>
                </div>
              </div>
            </Paper>
          </a>
        </Link>
      </li>
    </React.Fragment>
  )
}

JobItem.propTypes = {
  className: PropTypes.string,
  job: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    company: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}

JobItem.defaultProps = {}

export default JobItem
