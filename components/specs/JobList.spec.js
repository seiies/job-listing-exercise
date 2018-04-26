/* global describe, it, expect */

import React from 'react'
import JobList from '../JobList'
import { shallow } from 'enzyme'

describe('JobList', () => {
  let jobs = [
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
  let noJobs = []

  it('renders correctly with job list', () => {
    const component = shallow(<JobList jobs={jobs} />)
    expect(component).toMatchSnapshot()
  })

  it('renders correctly with empty job list', () => {
    const component = shallow(<JobList jobs={noJobs} />)
    expect(component).toMatchSnapshot()
  })
})
