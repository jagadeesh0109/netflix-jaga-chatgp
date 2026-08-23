import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
 
  reducers: {
    addUser: (state, action) => {
        console.log("ln9--->action-",action, "state-",state);
        return action.payload
    },
    removeuser: (state, action) => {
      return null
    },
  },
})
export const { addUser, removeuser } = userSlice.actions

export default userSlice.reducer