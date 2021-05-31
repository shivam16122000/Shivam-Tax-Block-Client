import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    post: []
};

export const fetchUsers = createAsyncThunk('main/fetchUsers', (userId) => {
    const token = localStorage.getItem('token');
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
    return fetch(
        `https://blooming-journey-42211.herokuapp.com/userdata/${userId}`,
        requestOptions
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log('error in fetching');
            return [];
        });
});

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        onLogout: (state) => {
            state.post = [];
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.post.reverse();
        }
    }
});

export const { onLogout } = mainSlice.actions;

export default mainSlice.reducer;
