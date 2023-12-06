import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "react-native-config";

export const useApiRequest = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [apiError, setApiError] = useState<null | string>(null);

  const source = axios.CancelToken.source();

  const axiosInstance = axios.create({
    baseURL: Config.OHM_API_ENDPOINT,
  });

  const fetchData = useCallback(
    async ({ url = "", method = "get", payload = null }) => {
      setLoading(true);
      setApiError(null);
      try {
        // const accessToken = await AsyncStorage.getItem("@access_token");
        // if (accessToken) {
        axiosInstance.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDMyZmJhMWVjZTUwNDUyYWQyMGE5ZTIiLCJpYXQiOjE2OTkwMjU3NTQsImV4cCI6MjAxNDYwMTc1NH0.qizSlGtf7_5GcXdtnvnLmAM7pdOpV_W-znqsrkTHwzE`;
        const config: AxiosRequestConfig = {
          url,
          method,
          cancelToken: source.token,
        };

        if (payload) {
          config.data = payload;
        }
        const { data: response } = await axiosInstance.request(config);
        setData(response);
        setLoading(false);
        // }
      } catch (error: any) {
        setLoading(false);

        if (axios.isCancel(error)) {
        } else {
          setApiError(`Error: ${error?.message}`);
        }
        return error;
      } finally {
        setLoading(false);
      }
    },
    [axiosInstance]
  );

  useEffect(() => {
    return () => {
      source.cancel("useApiRequest Component unmounted");
    };
  }, []);

  return { loading, data, apiError, fetchData };
};
