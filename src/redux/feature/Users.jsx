import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const response = await axios.get('https://65376a81bb226bb85dd331b3.mockapi.io/users');
    return response.data;
})

export const deleteUser = createAsyncThunk("users/deleteUser", async (userId) => {
    await axios.delete(`https://65376a81bb226bb85dd331b3.mockapi.io/users/${userId}`);
    return userId;
  });

  export const addUser = createAsyncThunk("users/addUser", async (values) => {
    const response = await axios.post('https://65376a81bb226bb85dd331b3.mockapi.io/users', values);
    return response.data;
  });

  export const updateUser = createAsyncThunk("users/updateUser", async ({id, username, email, password, phone, address, gender, city}) => {
    const response = await axios.put(`https://65376a81bb226bb85dd331b3.mockapi.io/users/${id}`, { username, email, password, phone, address, gender, city });
    return response.data;
  })


const userEntity = createEntityAdapter({
    selectId: (user) => user.id
});

const usersSlice = createSlice({
    name: "users",
    initialState: userEntity.getInitialState(),
    extraReducers: (builder) => {
        builder
          .addCase(getUsers.fulfilled, (state, action) => {
            userEntity.setAll(state, action.payload);
          })
          .addCase(addUser.fulfilled, (state, action) => {
            userEntity.addOne(state, action.payload);
          })
          .addCase(deleteUser.fulfilled, (state, action) => {
            userEntity.removeOne(state, action.payload);
          })
          .addCase(updateUser.fulfilled, (state, action) => {
            userEntity.updateOne(state, { id: action.payload.id, updates: action.payload });
        })
    },
})


export const userSelector = userEntity.getSelectors((state) => state.users)
export default usersSlice.reducer;