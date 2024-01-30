import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../Utilities/axios-instance";
import { onSuccess,onError } from "../../Utilities/types";

export interface IRecipe {
  recipeImage: string;
  title: string;
  description: string;
  estimatedTime: string;
  ingredients: string;
  category: string;
}

export const createRecipe = async (input: IRecipe) => {
  try {
     const response = await axiosInstance.post("/recipes/post-recipe", input);
    console.log(`create recipe response ::: ${JSON.stringify(response)}`);
    return response;
  } catch (error: any) {
    console.log(`create recipe error ::: ${JSON.stringify(error)}`);
    return error;
  }
};

export const useCreateRecipe = (onSuccess: onSuccess, onError: onError) => {
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: createRecipe,
    onSuccess: onSuccess,
    onError: onError,
  })
  return { mutateAsync, isPending, isError };
}