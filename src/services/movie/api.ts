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

export const getMovieDetails = async (id: number) => {
  try {
    const response = await API.get(`movie/${id}`, {
      params: { append_to_response: "credits" }, 
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error);
  }
};

export const getUpcoming = async () => {
  try {
    const response = await API.get(`movie/upcoming`);
    if (response.status === 200) return response.data as ResponseData;
  } catch (error: any) {
    console.error(error);
  }
};

export const getTopRated = async () => {
  try {
    const response = await API.get(`movie/top_rated`);
    if (response.status === 200) return response.data as ResponseData;
  } catch (error: any) {
    console.error(error);
  }
};

