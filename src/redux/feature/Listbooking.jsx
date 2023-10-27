import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooking = createAsyncThunk("booking/getBooking", async () => {
    const response = await axios.get('http://localhost:5000/booking');
    return response.data;
})

export const addBooking = createAsyncThunk("booking/addBooking", async ({jam, waktu, tanggal, lapangan}) => {
    const response = await axios.post('http://localhost:5000/booking', {jam, waktu, tanggal, lapangan});
    return response.data;
})

export const deleteBooking = createAsyncThunk("booking/deleteBooking", async (id) => {
    await axios.delete(`http://localhost:5000/booking/${id}`);
    return id;
})

const bookingEntity = createEntityAdapter({
    selectId: (booking) => booking.id
});

const listBookingSlice = createSlice({
    name: "booking",
    initialState: bookingEntity.getInitialState(),
    extraReducers: (builder) => {
        builder
            .addCase(getBooking.fulfilled, (state, action) => {
                bookingEntity.setAll(state, action.payload);
            })
            .addCase(addBooking.fulfilled, (state, action) => {
                bookingEntity.addOne(state, action.payload);
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                bookingEntity.removeOne(state, action.payload);
            })
    }
})
export const bookingSelector = bookingEntity.getSelectors((state) => state.booking)
export default listBookingSlice.reducer