import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../Utilities/axios-instance";
import { onSuccess, onError } from "../../Utilities/types";

export interface IForgotPassword {
  email: string;
}

export const forgotPassword = async (input: IForgotPassword) => {
  try {
    const response = await axiosInstance.post("auth/forgot-password", input);
    return response;
  } catch (error: any) {
    console.log(`Forgot password error ::: ${JSON.stringify(error)}`);
    return error;
  }
};

export const useForgotPassword = (onSuccess: onSuccess, onError: onError) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: onSuccess,
    onError: onError,
  });
  return { forgotPassword: mutateAsync, requestingPassword: isPending };
};
