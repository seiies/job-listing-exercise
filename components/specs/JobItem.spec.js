/* global describe, it, expect */

import React from 'react'
import JobItem from '../JobItem'
import { shallow } from 'enzyme'

describe('JobItem', () => {
  let job = {
    'company': 'Deutsche Bahn AG',
    'id': 1,
    'image': 'https://place.cat/c/100/100',
    'title': 'Job title'
  }

  it('renders correctly', () => {
    const component = shallow(<JobItem job={job} />)
    expect(component).toMatchSnapshot()
  })
})
