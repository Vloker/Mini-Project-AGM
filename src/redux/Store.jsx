import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './feature/Users'
// import listBookingReducer from './feature/ListBooking'


const store = configureStore({
    reducer: {
        users: usersReducer,
        // listBooking: listBookingReducer
    }
})
export default store