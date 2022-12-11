import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const getProperties = () => {
  return {
    type: "GET_DATA",
  };
};

const initialState = {
  properties: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const postsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        (state.status = "error"), (state.error = action.error.message);
      });
  },
});

// const propertySlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchPosts.pending]: (state) => {
//       state.status = "pending";
//     },
//     [fetchPosts.fulfilled]: (state, action) => {
//       state.status = "success";
//       state.properties = action.payload;
//     },
//     [fetchPosts.error]: (state) => {
//       (state.status = "error"), (state.error = action.error.message);
//     },
//   },
// });

export const loadColor = () => {
  return (dispatch) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(changeColor(response.data));
      });
  };
};

export function changeColor(meals) {
  console.log(meals);
  return {
    type: "SET_MEALS",
    payload: meals,
  };
}

export default postsSlice.reducer;
