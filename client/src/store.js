import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  premiercontactDetailsReducer,
  premiercontactListReducer,
  premiercontactCreateReducer,
  premiercontactDeleteReducer,
  premiercontactUpdateReducer,
} from './reducers/premiercontactReducers'

const reducer = combineReducers ({
  premiercontactList: premiercontactListReducer,
premiercontactCreate: premiercontactCreateReducer,
premiercontactDelete: premiercontactDeleteReducer,
premiercontactDetails: premiercontactDetailsReducer,
premiercontactUpdate: premiercontactUpdateReducer,
 })


const initialState = {
 
}

const middleware = [thunk]

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store