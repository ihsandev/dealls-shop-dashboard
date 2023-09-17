import { ICartResponse } from "@/interfaces/carts";
import { axiosInstance } from "@/lib/api";
import { useQuery, QueryKey, UseQueryResult } from "@tanstack/react-query";

interface IUseFetchCart {
  queryKey: QueryKey;
  id: number | string | undefined;
}

const getCart = async (id: number | string | undefined) => {
  return await axiosInstance.get(`/carts/${id}`);
};

export default function useFetchCart({
  queryKey,
  id,
}: IUseFetchCart): UseQueryResult<{ data: ICartResponse }> {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return await getCart(id);
    },
  });
}
