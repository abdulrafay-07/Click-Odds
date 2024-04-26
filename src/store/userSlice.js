import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            const { username, highestScore } = action.payload;
            const existingUser = state.users.find(user => user.username === username);
            if (existingUser) {
                existingUser.highestScore = user.highestScore;
            } else {
                state.users.push({ username, highestScore });
            }
        },
        addScore(state, action) {
            const { username, highestScore } = action.payload;
            const user = state.users.find(user => user.username === username);
            if (user && user.highestScore < highestScore) {
                user.highestScore = highestScore;
            }
        }
    }
})

export const { setUser, addScore } = userSlice.actions;

export default userSlice.reducer;