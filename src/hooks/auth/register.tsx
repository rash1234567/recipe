import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../Utilities/axios-instance";
import { onSuccess,onError } from "../../Utilities/types";

export interface IRegister {
    email: string;
    password: string;
}

export const createAccount = async (input: IRegister) => {
  try {
     const response = await axiosInstance.post("/auth/register", input);
    console.log(`create account response ::: ${JSON.stringify(response)}`);
    return response;
  } catch (error: any) {
    console.log(`create account error ::: ${JSON.stringify(error)}`);
    return error;
  }
};

export const useCreateAccount = (onSuccess: onSuccess, onError: onError) => {
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: createAccount,
    onSuccess: onSuccess,
    onError: onError,
  })
  return { mutateAsync, isPending, isError };
}

