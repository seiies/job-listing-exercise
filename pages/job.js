import React from 'react'
import { bindActionCreators } from 'redux'
import Head from 'next/head'
import Error from 'next/error'
import { initStore } from '../store'
import { fetchJobItem } from '../store/actions'
import withRoot from '../utils/withRoot'
import withRedux from '../utils/withRedux'
import Layout from '../components/Layout'
import JobDescription from '../components/JobDescription'
import PropTypes from 'prop-types'

export class JobDescriptionPage extends React.Component {
  static async getInitialProps ({ isServer, store, req, query: { id } }) {
    const jobDataInStore = store.getState().jobDescriptions[id]
    if (!jobDataInStore) {
      await store.dispatch(fetchJobItem(id))
    }

    return { id, isServer }
  }

  render () {
    const { id, jobDescriptions } = this.props
    const jobItem = jobDescriptions[id]

    if (!jobItem) {
      return <Error statusCode={404} />
    }

    return (
      <React.Fragment>
        <Head>
          <title>Job: {jobItem.title}</title>
        </Head>
        <Layout>
          <JobDescription job={jobItem} />
        </Layout>
      </React.Fragment>
    )
  }
}

JobDescriptionPage.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  jobDescriptions: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobItem: bindActionCreators(fetchJobItem, dispatch)
  }
}

export default withRedux(initStore, state => state, mapDispatchToProps)(withRoot(JobDescriptionPage))
