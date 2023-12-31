import { useQuery, QueryKey, UseQueryResult } from "@tanstack/react-query";
import { axiosInstance } from "../../api";
import { IProductResponse } from "@/interfaces/products";
import { IFetchParams, IResponsePagination } from "@/interfaces/global";

export interface IParamsProducts extends IFetchParams {
  q?: string;
  category?: string;
}

interface IUseFetchProducts {
  queryKey: QueryKey;
  params: IParamsProducts;
}

interface IResponseData extends IResponsePagination {
  products: IProductResponse[];
}

const getProducts = async (params: IParamsProducts) => {
  const newParams = {
    skip: params.skip,
    limit: params.limit,
    q: params.q,
  };
  let url = "/products/search";
  if (params.category) {
    delete newParams.q;
    url = `/products/category/${params.category}`;
  }
  return await axiosInstance.get(url, {
    params: newParams,
  });
};

export default function useFetchProducts({
  queryKey,
  params,
}: IUseFetchProducts): UseQueryResult<{
  data: IResponseData;
}> {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return await getProducts(params);
    },
  });
}
