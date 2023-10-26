import { createSlice } from "@reduxjs/toolkit/dist";

const listBookingSlice = createSlice({
    name: "booking",
    initialState: {
        id: "",
        jam: "",
        waktu: "",
        tanggal: "",
        lapangan: "",
    },
    reducers: {
        update: (state, action) => {
            state.id = action.payload.id
            state.jam = action.payload.jam
            state.waktu = action.payload.waktu
            state.tanggal = action.payload.tanggal
            state.lapangan = action.payload.lapangan
        },
        add: (state, action) => {
            state.list.push(action.payload)
        }
    }
})
export const { update,add } = listBookingSlice.actions
export default listBookingSlice.reducer