import { createSlice } from "@reduxjs/toolkit";

const initialState={
  name:null,
  access_token:null,
  password:null,
  email:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
      login:(state,action)=>{
        const user = action.payload;
        const { name, email, password, access_token } = user;
        state.name=name;
        state.email=email;
        state.password=password;
        state.access_token=access_token;
        localStorage.setItem("auth", JSON.stringify(user));
      },
      logout: (state) => {
        console.log('working')
        state.name=null;
        state.email=null;
        state.password=null;
        state.access_token=null;
        localStorage.removeItem('auth');
      }
    }
})
export const {login, logout}=authSlice.actions;
export default authSlice.reducer;
