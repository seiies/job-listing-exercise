import { actionTypes } from './actions'

export const initialState = {
  jobList: [],
  jobDescriptions: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHED_ITEM:
      let jobDescriptions = { ...state.jobDescriptions, [action.id]: action.data }
      return { ...state, jobDescriptions: jobDescriptions }
    case actionTypes.FETCHED_LIST:
      return { ...state, jobList: action.data }
    default: return { ...state }
  }
}
