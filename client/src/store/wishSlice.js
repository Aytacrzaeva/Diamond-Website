import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: 'wish',
  initialState: {
    items: []
  },
  reducers: {
    addwish(state, action) {
      const card = action.payload;
      if (state.items.toString() === [].toString()) {
        state.items.push({ prod: card, count: 1 });
      } else {
        const target = state.items.find(item => item.prod._id === card._id);
        if (target) {
          target.count++;
        } else {
          state.items.push({ prod: card, count: 1 });
        }
      }
    },
    removewish(state, action) {
      const { _id } = action.payload;
      const target = state.items.find(item => item.prod._id === _id);
      const indexOfTarget = state.items.indexOf(target);
      state.items.splice(indexOfTarget, 1);
    },
    countwish(state, action) {
      const { _id, value } = action.payload;
      const target = state.items.find(item => item.prod._id === _id);
      const indexOfTarget = state.items.indexOf(target);
      if (target.count === 1) {
        state.items.splice(indexOfTarget, 1);
      }
      target.count = value;
    }
  }
});

export const { addwish, removewish, countwish } = wishSlice.actions;
export default wishSlice.reducer;
