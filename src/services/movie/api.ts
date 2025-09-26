import API from "../api";
import type { ResponseData } from "./type";

export const getPopular = async () => {
  try {
    const response = await API.get(`movie/popular`);

    if (response.status === 200) {
      return response.data as ResponseData;
    }
  } catch (error: any) {
    console.error(error);
  }
};

// src/services/movie/api.ts

export const getNowPlaying = async () => {
  try {
    const response = await API.get(`movie/now_playing`);

    if (response.status === 200) {
      return response.data as ResponseData;
    }
  } catch (error: any) {
    console.error(error);
  }
};

