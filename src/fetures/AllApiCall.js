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
  extraReducers:(builder)=> {
   builder.addCase(callUserAuthApi.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(callUserAuthApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
    })
    .addCase(callUserAuthApi.rejected, (state, action) => {
      state.isLoading = true;
      state.token = action.payload;
    })
  }
});

export const callParticularProductDetialApi = createAsyncThunk(
  "GetProductById",
  async (getById, { rejectWithValue }) => {
    if (typeof getById !== "number") {
      console.log("Invalid ID:", getById);
      return rejectWithValue("Invalid ID");
    }

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${getById}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const CallGetProductById = createSlice({
  name: "GetProductById",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(callParticularProductDetialApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(callParticularProductDetialApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(callParticularProductDetialApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
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
  extraReducers: (builder)=> {
    builder.addCase(CallGetAllProductApi.pending, (state) => {
      state.isLoading = true;
    }).addCase
    (CallGetAllProductApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    }).addCase
    (CallGetAllProductApi.rejected, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
  },
});
