import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  data: [] as any[],
  status: "loading" as 'loading'|'error'|'success',
  error: null,
};
export const bridgeCollectionSlice = createSlice({
  name: "bridge-collection",
  initialState,
  reducers: {
    addCollection(state,action) {
        state.data=[...state.data,action.payload]
    },
    removeCollection(state,action) {
        state.data=[...state.data.filter((d)=>d!==action.payload)]
    },
  },
});

export const { addCollection,removeCollection } = bridgeCollectionSlice.actions;
export default bridgeCollectionSlice.reducer;
