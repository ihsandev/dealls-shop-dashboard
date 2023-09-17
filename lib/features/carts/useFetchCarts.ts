import { ICartResponse } from "@/interfaces/carts";
import { IFetchParams, IResponsePagination } from "@/interfaces/global";
import { axiosInstance } from "@/lib/api";
import { useQuery, QueryKey, UseQueryResult } from "@tanstack/react-query";

interface IResponseData extends IResponsePagination {
  carts: ICartResponse[];
}

interface IUseFetchCarts {
  queryKey: QueryKey;
  params: IFetchParams;
}

const getCarts = async (params: IFetchParams) => {
  return await axiosInstance.get("/carts", {
    params,
  });
};

export default function useFetchCarts({
  queryKey,
  params,
}: IUseFetchCarts): UseQueryResult<{ data: IResponseData }> {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return await getCarts(params);
    },
  });
}
