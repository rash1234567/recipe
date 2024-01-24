import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../Utilities/axios-instance";
import { onSuccess, onError } from "../../Utilities/types";

export interface IResetPassword {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const resetPassword = async (input: IResetPassword) => {
  try {
    const response = await axiosInstance.post("User/ResetPassword", input);
    if (response.data && !response.data.error) {
      return response.data;
    }
    return response || null;
  } catch (error: any) {
    console.log(
      `reset password error ::: ${JSON.stringify(
        error
      )}`
    );
    return {
      error: true,
      message: error.message,
      data: null,
    };
  }
};

export const useResetPassword = (onSuccess: onSuccess, onError: onError) => {
  const { mutateAsync, isLoading, isError } = useMutation(resetPassword, {
    onSuccess: onSuccess,
    onError: onError,
  });
  return { mutateAsync, isLoading, isError };
};
