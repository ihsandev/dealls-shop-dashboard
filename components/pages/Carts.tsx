"use client";

import { useMemo, useState } from "react";
import TableData, { IPagination } from "@/components/elements/tableData";
import { ITableHeader } from "@/interfaces/global";
import useFetchCarts from "@/lib/features/carts/useFetchCarts";
import { formatRupiah } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FiEye } from "react-icons/fi";
import Link from "next/link";

const tableHeader: ITableHeader[] = [
  {
    label: "Total",
    key: "total",
  },
  {
    label: "Discounted Total",
    key: "discountedTotal",
  },
  {
    label: "Total Products",
    key: "totalProducts",
  },
  {
    label: "Total Quantity",
    key: "totalQuantity",
  },
];

export default function Carts() {
  const limit = 5;
  const { push } = useRouter();
  const [page, setPage] = useState(1);
  const skip = useMemo(() => (page - 1) * limit, [page]);

  const { data: cartsData, isLoading: isLoadingCarts } = useFetchCarts({
    queryKey: ["fetch-carts", skip],
    params: {
      skip,
      limit,
    },
  });

  const totalData = useMemo(
    () => cartsData?.data.total ?? 0,
    [cartsData?.data.total]
  );

  const paginationConfig: IPagination = {
    skip,
    limit,
    page,
    setPage,
    totalData,
  };

  const carts =
    cartsData?.data.carts.map((cart) => ({
      id: cart.id,
      total: formatRupiah(cart.total),
      discountedTotal: formatRupiah(cart.discountedTotal),
      totalProducts: cart.totalProducts,
      totalQuantity: cart.totalQuantity,
    })) ?? [];

  return (
    <section>
      <div>
        <TableData
          title="Carts"
          header={tableHeader}
          data={carts}
          pagination={paginationConfig}
          isLoading={isLoadingCarts}
          render={{
            header: [
              {
                label: "#",
                key: "action",
                index: 4,
              },
            ],
            data: [
              {
                index: 4,
                action: (item: any) => {
                  return (
                    <Link href={`/carts/${item.id}`}>
                      <FiEye />
                    </Link>
                  );
                },
              },
            ],
          }}
        />
      </div>
    </section>
  );
}
