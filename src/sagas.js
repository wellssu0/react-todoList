import {all, takeEvery, put, call} from 'redux-saga/effects'
import axios from 'axios'

import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'


function* getInitialDataAsync (){
  try {
    const responseUncompleted = yield axios.get('/items?isCompleted=false&_sort=startTimestamp')
    const responseCompleted = yield axios.get('/items?isCompleted=true&_sort=endTimestamp')
    yield put(actionCreators.setInitialData(responseUncompleted.data,responseCompleted.data))
  } catch (error) {
    console.log(error)
  }
}
function* addItemAsync (action){
  try {
    yield call(axios.post, '/items', action.newItem)
    yield put(actionCreators.setClearInputAction())
    yield put(actionCreators.getInitialDataAction())
  } catch (error) {
    console.log(error)
  }
}
function* deleteItemAsync (action){
  try {
    const id = action.item.id
    yield call(axios.delete, `/items/${id}`)
    yield put(actionCreators.getInitialDataAction())
  } catch (error) {
    console.log(error)
  }
}
function* switchCompletedItemAsync (action){
  try {
    const id = action.item.id
    const item = action.item
    item.isCompleted = !item.isCompleted
    yield call(axios.put, `/items/${id}`,item)
    yield put(actionCreators.getInitialDataAction())
  } catch (error) {
    console.log(error)
  }
}

function* watchInitialData (){
  yield takeEvery(actionTypes.GET_INITIAL_DATA, getInitialDataAsync)
}
function* watchAddItemData (){
  yield takeEvery(actionTypes.ADD_ITEM, addItemAsync)
}
function* watchDeleteItemData (){
  yield takeEvery(actionTypes.DELETE_ITEM, deleteItemAsync)
}
function* watchCompletedItemData (){
  yield takeEvery(actionTypes.SWITCH_COMPLETED_ITEM, switchCompletedItemAsync)
}

export default function* rootSaga (){
  yield all([
    watchInitialData(),
    watchAddItemData(),
    watchDeleteItemData(),
    watchCompletedItemData(),
  ])
}

