import { useCallback } from "react";
import { useAuthApiRequest } from "./useAuthApiRequest";

export const useAuthApis = () => {
  const { fetchData, loading, apiError, data } = useAuthApiRequest();

  const getOtp = useCallback(async ({ payload }: any) => {
    const url = "check_user_registered";

    fetchData({ url, method: "post", payload });
  }, []);

  const verifyOtp = useCallback(async ({ payload }: any) => {
    const url = "verify_login_otp";

    fetchData({ url, method: "post", payload });
  }, []);

  const registerUser = useCallback(async ({ payload }: any) => {
    const url = "userregister";

    fetchData({ url, method: "post", payload });
  }, []);

  return {
    loading,
    apiError,
    data,
    getOtp,
    verifyOtp,
    registerUser,
  };
};
