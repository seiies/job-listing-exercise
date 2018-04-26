/* global jest, describe, it, expect */

import React from 'react'
import { JobDescriptionPage } from '../job'
import { shallow } from 'enzyme'

describe('job page', () => {
  let state = { jobDescriptions: { 1: 'something' } }
  const store = {
    getState: jest.fn(() => state),
    dispatch: jest.fn()
  }
  let jobs = {
    1: {
      title: 'Job title',
      html: 'something'
    }
  }

  it('renders correctly for the existing job description', () => {
    const component = shallow(<JobDescriptionPage id={1} jobDescriptions={jobs} />)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly for the wrong id', () => {
    const component = shallow(<JobDescriptionPage id={19} jobDescriptions={jobs} />)
    expect(component).toMatchSnapshot()
  })

  it('does not fetch job list in case of it is present in store', async () => {
    await JobDescriptionPage.getInitialProps({ store, query: { id: 1 } })
    expect(store.dispatch).not.toBeCalled()
  })

  it('fetches job list in case of lack of it in store', async () => {
    await JobDescriptionPage.getInitialProps({ store, query: { id: 19 } })
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })
})
