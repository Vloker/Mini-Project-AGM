import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './feature/Users'
import listBookingReducer from './feature/Listbooking'


const store = configureStore({
    reducer: {
        users: usersReducer,
        booking: listBookingReducer
    }
})
export default store