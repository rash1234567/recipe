import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../Utilities/axios-instance";
import { onSuccess, onError } from "../../Utilities/types";

export interface ILogin {
  email: string;
  password: string;
}

export const login = async (input: ILogin) => {
    try {
        const response = await axiosInstance.post("auth/login", input);
      console.log(`login response ::: ${JSON.stringify(response)}`);
      return response
    
    } catch (error:any) {
      console.log(`login error ::: ${JSON.stringify(error)}`);
       return error;
    }

};

export const useLogin = (onSuccess: onSuccess, onError: onError) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: login,
    onSuccess: onSuccess,
    onError: onError,
  });
  return { mutateAsync, isPending};
};
