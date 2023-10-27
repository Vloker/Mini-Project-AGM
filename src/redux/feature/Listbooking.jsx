import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooking = createAsyncThunk("booking/getBooking", async () => {
    const response = await axios.get('https://65376a81bb226bb85dd331b3.mockapi.io/Booking');
    return response.data;
})

export const addBooking = createAsyncThunk("booking/addBooking", async ({jam, waktu, tanggal, lapangan}) => {
    const response = await axios.post('https://65376a81bb226bb85dd331b3.mockapi.io/Booking', {jam, waktu, tanggal, lapangan});
    return response.data;
})

export const deleteBooking = createAsyncThunk("booking/deleteBooking", async (id) => {
    await axios.delete(`https://65376a81bb226bb85dd331b3.mockapi.io/Booking/${id}`);
    return id;
})

const bookingEntity = createEntityAdapter({
    selectId: (Booking) => Booking.id
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
export const bookingSelector = bookingEntity.getSelectors((state) => state.Booking)
export default listBookingSlice.reducer