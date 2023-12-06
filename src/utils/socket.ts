import io from "socket.io-client";

export const API_URL = "https://staging.ohmelogistics.com";
export const SOCKET = io(API_URL);
