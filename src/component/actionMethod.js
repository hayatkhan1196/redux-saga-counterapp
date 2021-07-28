import * as actionType from '../component/actions'

export const increament = (payload) => {
  console.log('increament payload', payload)
  return {
    type: actionType.INCREMENT_COUNT_REQUEST,
    payload: payload
  }
}