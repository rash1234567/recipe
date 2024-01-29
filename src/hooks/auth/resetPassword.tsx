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
    const response = await axiosInstance.post("auth/reset-password", input);
    return response;
  } catch (error: any) {
    console.log(
      `reset password error ::: ${JSON.stringify(
        error
      )}`
    );
    return error;
  }
};

export const useResetPassword = (onSuccess: onSuccess, onError: onError) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: onSuccess,
    onError: onError,
  });
  return { resetPassword: mutateAsync, resettingPassword:isPending };
};
