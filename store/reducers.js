import { combineReducers } from '@reduxjs/toolkit'
import { adminSlice } from './admins/slice'
import { memberSlice } from './members/slice'
import { userSlice } from './users/slice'

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    members: memberSlice.reducer,
    
})