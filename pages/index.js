import React from 'react'
import { bindActionCreators } from 'redux'
import Head from 'next/head'
import { initStore } from '../store'
import { fetchJobList } from '../store/actions'
import withRedux from '../utils/withRedux'
import withRoot from '../utils/withRoot'
import Layout from '../components/Layout'
import JobList from '../components/JobList'
import PropTypes from 'prop-types'

export class JobListPage extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    const jobListInStore = store.getState().jobList.length
    if (!jobListInStore) {
      await store.dispatch(fetchJobList())
    }

    return { isServer }
  }

  render () {
    const { jobList } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>Job listings</title>
        </Head>

        <Layout>
          <h1>Job listings</h1>
          <JobList
            jobs={jobList}
          />
        </Layout>
      </React.Fragment>
    )
  }
}

JobListPage.propTypes = {
  jobList: PropTypes.array.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobList: bindActionCreators(fetchJobList, dispatch)
  }
}

export default withRedux(initStore, state => state, mapDispatchToProps)(withRoot(JobListPage))
