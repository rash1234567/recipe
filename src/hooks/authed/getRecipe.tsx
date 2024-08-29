
// import { useQuery, UseQueryOptions } from "@tanstack/react-query";
// import axiosInstance from "../../Utilities/axios-instance";

// function usePaymentOverview() {
//   const getPaymentOverview = async () => {
//     const response = await axiosInstance.get('/payment-overview/');
//     return response.data; // Assuming you want to return the data property of the response
//   }

//   const queryKey = ['getPaymentOverview'];

//   const options: UseQueryOptions<unknown, Error, unknown, string[]> = {
//     queryKey,
//   };

//   const { data, isLoading, error } = useQuery(['getPaymentOverview'], getPaymentOverview);

//   return {
//     paymentOverview: data,
//     paymentOverviewLoading: isLoading,
//     paymentOverviewError: error
//   };
// }

// export default usePaymentOverview;
