/* global describe, it, expect */

import React from 'react'
import Layout from '../Layout'
import { shallow } from 'enzyme'

describe('Layout', () => {
  it('renders correctly', () => {
    const component = shallow(<Layout>Children</Layout>)
    expect(component).toMatchSnapshot()
  })
})
