import {createSlice} from '@reduxjs/toolkit';
import music from '../../data/music';

const initialState = {
    music: music,
    chosenSong: null,
};

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setChosenSong: (state, action) => {
            const songRank = action.payload;
            state.chosenSong = state.music.find((s) => s.rank === songRank)
        }
    }
})