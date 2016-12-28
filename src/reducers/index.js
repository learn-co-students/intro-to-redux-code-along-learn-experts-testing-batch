import { combineReducers } from 'redux';
import shoppingListItemReducer from './shoppingListItemReducer';

const rootReducer = combineReducers({
  shoppingListItems: shoppingListItemReducer
})

export default rootReducer