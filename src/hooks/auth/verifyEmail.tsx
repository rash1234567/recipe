import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../Utilities/axios-instance";
import { onSuccess, onError } from "../../Utilities/types";

export interface IVerifyEmail {
  email: string;
  token: string;
}

export const VerifyEmail = async (input: IVerifyEmail) => {
  try {
    const response = await axiosInstance.post("auth/Verify-email", input);
    console.log(`VerifyEmail response ::: ${JSON.stringify(response)}`);
    return response;
  } catch (error: any) {
    console.log(`VerifyEmail error ::: ${JSON.stringify(error)}`);
    return error;
  }
};

export const useVerifyEmail = (onSuccess: onSuccess, onError: onError) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: VerifyEmail,
    onSuccess: onSuccess,
    onError: onError,
  });
  return { verifyEmail:mutateAsync, verifyingEmail:isPending };
};
