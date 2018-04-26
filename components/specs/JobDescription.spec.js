/* global describe, it, expect */

import React from 'react'
import JobDescription from '../JobDescription'
import { shallow } from 'enzyme'

describe('JobDescription', () => {
  let job = {
    'html': 'Get this awesome job',
    'title': 'Job title'
  }

  it('renders correctly', () => {
    const component = shallow(<JobDescription job={job} />)
    expect(component).toMatchSnapshot()
  })
})
