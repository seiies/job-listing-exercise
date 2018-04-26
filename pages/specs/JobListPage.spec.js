/* global jest, describe, it, expect */

import React from 'react'
import { JobListPage } from '../index'
import { shallow } from 'enzyme'

describe('index page', () => {
  let state
  const store = {
    getState: jest.fn(() => state),
    dispatch: jest.fn()
  }

  it('renders correctly', () => {
    let jobList = [
      {
        id: 1,
        image: 'https://place.cat/c/100/100',
        company: 'Deutsche Bahn AG',
        title: 'Job title'
      },
      {
        id: 2,
        image: 'https://place.cat/c/100/100',
        company: 'Deutsche Bahn AG',
        title: 'Job title'
      }
    ]

    const component = shallow(<JobListPage jobList={jobList} />)
    expect(component).toMatchSnapshot()
  })

  it('does not fetch job list in case of it is present in store', async () => {
    state = { jobList: ['something'] }

    await JobListPage.getInitialProps({ store })
    expect(store.dispatch).not.toBeCalled()
  })

  it('fetches job list in case of lack of it in store', async () => {
    state = { jobList: [] }

    await JobListPage.getInitialProps({ store })
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })
})
