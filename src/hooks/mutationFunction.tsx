import axiosInstance from "../Utilities/axios-instance";

export const mutationFunction = async (input: any, url: string) => {
  try {
    const response = await axiosInstance.post(url, input);
    return response;
  } catch (error: any) {
    console.log(`reset password error ::: ${JSON.stringify(error)}`);
    return error;
  }
};
