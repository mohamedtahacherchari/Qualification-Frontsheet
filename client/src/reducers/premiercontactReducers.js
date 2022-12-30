import {
 PREMIERCONTACT_CREATE_REQUEST,
 PREMIERCONTACT_CREATE_SUCCESS ,
 PREMIERCONTACT_CREATE_FAIL,
 PREMIERCONTACT_CREATE_RESET, 
 PREMIERCONTACT_LIST_REQUEST,
 PREMIERCONTACT_LIST_SUCCESS,
 PREMIERCONTACT_LIST_FAIL,
 PREMIERCONTACT_DELETE_REQUEST,
 PREMIERCONTACT_DELETE_SUCCESS,
 PREMIERCONTACT_DELETE_FAIL,
 PREMIERCONTACT_DETAILS_REQUEST,
 PREMIERCONTACT_DETAILS_SUCCESS,
 PREMIERCONTACT_DETAILS_FAIL,
 PREMIERCONTACT_UPDATE_REQUEST,
 PREMIERCONTACT_UPDATE_SUCCESS,
 PREMIERCONTACT_UPDATE_FAIL,
 PREMIERCONTACT_UPDATE_RESET,


  } from '../constants/Premiercontact'
  
  
  export const premiercontactListReducer = (state = { premiercontacts: [] }, action) => {
    switch (action.type) {
      case PREMIERCONTACT_LIST_REQUEST:
        return { loading: true, premiercontacts: [] }
      case PREMIERCONTACT_LIST_SUCCESS:
        return {
          loading: false,
          premiercontacts: action.payload
        }
      case PREMIERCONTACT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

 export const premiercontactCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PREMIERCONTACT_CREATE_REQUEST:
        return { loading: true }
      case PREMIERCONTACT_CREATE_SUCCESS:
        return { loading: false, success: true, premiercontact: action.payload }
      case PREMIERCONTACT_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case PREMIERCONTACT_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const premiercontactDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PREMIERCONTACT_DELETE_REQUEST:
        return { loading: true }
      case PREMIERCONTACT_DELETE_SUCCESS:
        return { loading: false, success: true }
      case PREMIERCONTACT_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const premiercontactUpdateReducer = (state = { premiercontact: {} }, action) => {
    switch (action.type) {
      case PREMIERCONTACT_UPDATE_REQUEST:
        return { loading: true }
      case PREMIERCONTACT_UPDATE_SUCCESS:
        return { loading: false, success: true, premiercontact: action.payload }
      case PREMIERCONTACT_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case PREMIERCONTACT_UPDATE_RESET:
        return { premiercontact: {} }
      default:
        return state
    }
  }

 export const premiercontactDetailsReducer = (
    state = {premiercontact : {} } ,
    action
  ) => {
    switch (action.type) {
      case PREMIERCONTACT_DETAILS_REQUEST:
        return { loading: true , ...state }
      case PREMIERCONTACT_DETAILS_SUCCESS:
        return { loading: false, premiercontact: action.payload }
      case PREMIERCONTACT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


