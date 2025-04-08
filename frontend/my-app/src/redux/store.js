import { combineReducers, createStore } from "redux"
import {GamesReducer} from './reducer/gamereducer'
import {kategoryReducer} from './reducer/kategoryReducer'
import {cartReducer} from    './reducer/cartReducer'
import {userReducer} from './reducer/userReducer'
import { HistoryReducer } from "./reducer/historyReducer"


const rootStore=combineReducers({
    game: GamesReducer,
    kategory: kategoryReducer,
    myCart:cartReducer,
    users:userReducer,
    history:HistoryReducer
   
  })
export const store=createStore(rootStore);

window.store=store