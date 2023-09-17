import { useQuery, QueryKey, UseQueryResult } from "@tanstack/react-query";
import { axiosInstance } from "../../api";

interface IUseFetchCategories {
  queryKey: QueryKey;
}

const getCategories = async () => {
  return await axiosInstance.get("/products/categories");
};

export default function useFetchCategories({
  queryKey,
}: IUseFetchCategories): UseQueryResult<{ data: string[] }> {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return await getCategories();
    },
  });
}
