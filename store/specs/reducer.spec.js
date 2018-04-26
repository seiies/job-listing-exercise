/* global describe, it, expect, beforeEach */

import { actionTypes } from '../actions'
import { initialState, reducer } from '../reducer'

describe('reducer', () => {
  let state
  beforeEach(() => {
    state = { ...initialState }
  })

  it('returns default state in case of invalid action', () => {
    const actual = reducer(state, {
      type: actionTypes.FETCHED_BROKEN,
      data: { title: 'something' }
    })
    expect(actual).not.toBe(state)
    expect(actual).toEqual(state)
  })

  it('augments job descriptions on getting new one', () => {
    const payloads = [{ id: 1, title: 'something' }, { id: 2, title: 'something' }]

    const actual = payloads.reduce((acc, payload) =>
      reducer(acc, { type: actionTypes.FETCHED_ITEM, data: payload, id: payload.id }),
    state)

    const expected = {
      jobList: [],
      jobDescriptions: {
        1: { id: 1, title: 'something' },
        2: { id: 2, title: 'something' }
      }
    }

    expect(actual).not.toBe(state)
    expect(actual).toEqual(expected)
  })

  it('updates job descriptions on getting existing one', () => {
    const payloads = [{ id: 1, title: 'something' }, { id: 1, title: 'more of that' }]

    const actual = payloads.reduce((acc, payload) =>
      reducer(acc, { type: actionTypes.FETCHED_ITEM, data: payload, id: payload.id }),
    state)

    const expected = {
      jobList: [],
      jobDescriptions: {
        1: { id: 1, title: 'more of that' }
      }
    }

    expect(actual).not.toBe(state)
    expect(actual).toEqual(expected)
  })

  it('saves and updates job list', () => {
    const payloads = [[
      { id: 1, title: 'something' },
      { id: 2, title: 'more of that' }
    ],
    [
      { id: 1, title: 'something new' },
      { id: 2, title: 'and more of that' }
    ]]

    const actual = payloads.reduce((acc, payload) =>
      reducer(acc, { type: actionTypes.FETCHED_LIST, data: payload }),
    state)

    const expected = {
      jobList: [
        { id: 1, title: 'something new' },
        { id: 2, title: 'and more of that' }
      ],
      jobDescriptions: {}
    }

    expect(actual).not.toBe(state)
    expect(actual).toEqual(expected)
  })
})
