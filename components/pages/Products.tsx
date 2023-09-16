"use client";

import { Input } from "@/components/ui/input";
import SelectOption from "@/components/elements/selectOption";
import TableData, { IPagination } from "@/components/elements/tableData";
import useFetchProducts, {
  IParamsProducts,
} from "@/lib/features/useFetchProducts";
import {
  ChangeEvent,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import useFetchCategories from "@/lib/features/useFetchCategories";

const tableHeader = [
  {
    label: "Product Name",
    key: "title",
  },
  {
    label: "Brand",
    key: "brand",
  },
  {
    label: "Price",
    key: "price",
  },
  {
    label: "Stock",
    key: "stock",
  },
  {
    label: "Category",
    key: "category",
  },
];

export default function Products() {
  const limit = 5;
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [selectCategory, setSelectCategory] = useState<SetStateAction<any>>("");
  const skip = useMemo(() => (page - 1) * limit, [page]);
  const params: IParamsProducts = {
    skip,
    limit,
    q: keyword,
    category: selectCategory,
  };

  const { data: productsData, isLoading: isLoadingProducts } = useFetchProducts(
    {
      queryKey: ["fetch-products", skip, keyword, selectCategory],
      params,
    }
  );

  const { data: categoriesData } = useFetchCategories({
    queryKey: ["fetch-categories"],
  });

  const totalData = useMemo(
    () => productsData?.data.total ?? 0,
    [productsData?.data.total]
  );

  const totalPages = useMemo(
    () => (totalData < limit ? 1 : Math.ceil(totalData / limit)),
    [totalData]
  );

  const categories =
    categoriesData?.data.map((category) => ({
      label: category,
      value: category,
    })) ?? [];

  const products =
    productsData?.data.products.map((product) => ({
      id: product.id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      stock: product.stock,
      category: product.category,
    })) ?? [];

  const paginationConfig: IPagination = {
    skip,
    page,
    totalPages,
    onChangePage: useCallback(
      (value: string) => {
        if (value === "next") {
          setPage(page + 1);
        }
        if (value === "prev") {
          setPage(page - 1);
        }
      },
      [page]
    ),
  };

  return (
    <section>
      <div>
        <div className="flex lg:items-center lg:justify-between mb-2 lg:gap-7 gap-2 flex-col lg:flex-row">
          <div className="flex md:items-center gap-2 lg:gap-1 md:gap-0 md:justify-between flex-col md:flex-row">
            {/* 
              This Filter not provide by dummyjson API 
              <======================================>
              <SelectOption placeholder="Brand" />
              <SelectOption placeholder="Product" />
              <SelectOption placeholder="Price Range" /> 
            */}
            <SelectOption
              placeholder="Category"
              options={[
                {
                  label: "All Categories",
                  value: "",
                },
                ...categories,
              ]}
              value={selectCategory}
              onValueChange={useCallback((value: string) => {
                setSelectCategory(value);
                setKeyword("");
              }, [])}
            />
          </div>
          <div>
            <Input
              placeholder="Search Product"
              value={keyword}
              onChange={useCallback((e: ChangeEvent<HTMLInputElement>) => {
                setKeyword(e.target.value);
                setSelectCategory("");
                setPage(1);
              }, [])}
            />
          </div>
        </div>
        <TableData
          header={tableHeader}
          data={products}
          pagination={paginationConfig}
          isLoading={isLoadingProducts}
        />
      </div>
    </section>
  );
}
