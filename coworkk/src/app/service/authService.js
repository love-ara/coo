import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    "auth/login",
    async(loginData, thunkApi) => {
        try{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            };
            const response = await axios.post(
                `http://localhost:8080/auth/login`,
                loginData,
                config
            );
            console.log("Login response: ", response.data);
            if (response.status === 400) {
               return  thunkApi.rejectWithValue(response.data);
            }
            localStorage.setItem("token", response.data.token);
            return response.data;
        }catch (error){
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);


export const register = createAsyncThunk(
    "auth/register",
    async (registerData, thunkApi) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.post(
                `http://localhost:8080/auth/register`,
                registerData,
                config
            );
            console.log("Register Response:", response.data);
            if (response.data.statusCode === 400) {
                return thunkApi.rejectWithValue(response.data);
            }
            return response.data;
        } catch (error) {
            const message = error?.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);

