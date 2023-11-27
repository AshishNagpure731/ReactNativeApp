import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const callUserAuthApi = createAsyncThunk("userAuth", async (raw) => {
  //   console.log(raw);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const responce = await fetch(
    "https://fakestoreapi.com/auth/login",
    requestOptions
  );
  const result = await responce.json();

  return result.token;
});
export const getUserAuthCall = createSlice({
  name: "userAuth",
  initialState: {
    token: [],
    isLoading: false,
  },
  extraReducers: {
    [callUserAuthApi.pending]: (state) => {
      state.isLoading = true;
    },
    [callUserAuthApi.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
    },
    [callUserAuthApi.rejected]: (state, action) => {
      state.isLoading = true;
      state.token = action.payload;
    },
  },
});

export const CallGetAllProductApi = createAsyncThunk(
  "AllProduct",
  async (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    if (e === undefined) {
      const responce = await fetch(
        `https://fakestoreapi.com/products`,
        requestOptions
      );
      const result = await responce.json();

      return result;
    } else {
      const responce = await fetch(
        `https://fakestoreapi.com/products${e}`,
        requestOptions
      );
      const result = await responce.json();

      return result;
    }
    // const responce = await fetch(
    //   `https://fakestoreapi.com/products${e}`,
    //   requestOptions
    // );
    // const result = await responce.json();

    // return result;
  }
);
export const getAllProducts = createSlice({
  name: "AllProduct",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    [CallGetAllProductApi.pending]: (state) => {
      state.isLoading = true;
    },
    [CallGetAllProductApi.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [CallGetAllProductApi.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});
