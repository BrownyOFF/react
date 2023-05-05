import { createAsyncThunk } from "@reduxjs/toolkit";

// toolkit redux
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return data;
  }
);
