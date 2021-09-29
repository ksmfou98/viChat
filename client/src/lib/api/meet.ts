import { IMeetState } from "atoms/meetState";
import client from "./client";

export const createMeetAPI = async (
  host: string,
  title: string,
  description: string,
  thumbnail: string,
  password: string,
  muted: boolean,
  videoOff: boolean
) => {
  const body = {
    host,
    title,
    description,
    thumbnail,
    password,
    muted,
    videoOff,
  };
  const response = await client.post(`/meet/create`, body);
  return response.data.meet;
};

export const readMeetListAPI = async () => {
  const response = await client.get(`/meet/readMeetList`);
  return response.data.meets;
};