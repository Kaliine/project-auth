import { createSlice } from "@reduxjs/toolkit";


const secrets = createSlice({
  name: "secrets",
  initialState: {
    items: [],
    error: null,
  },

  reducers: {
    setSecretsItems: (store, action) => {
      store.items = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});

export default secrets;
