"use client";

import TableData, { IPagination } from "@/components/elements/tableData";
import { ITableHeader } from "@/interfaces/global";
import useFetchCart from "@/lib/features/carts/useFetchCart";
import { formatRupiah } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

interface IUseParams {
  id?: number | string;
}

const tableHeader: ITableHeader[] = [
  {
    label: "Title",
    key: "title",
  },
  {
    label: "Price",
    key: "price",
  },
  {
    label: "Quantity",
    key: "quantity",
  },
  {
    label: "Total",
    key: "total",
  },
  {
    label: "Discount %",
    key: "discountPercentage",
  },
  {
    label: "Discount Price",
    key: "discountedPrice",
  },
];

export default function DetailCart() {
  const params: IUseParams = useParams();
  const { data: cart } = useFetchCart({
    queryKey: ["fetch-cart-detail", params.id],
    id: params.id,
  });

  return (
    <section>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-violet-700">Cart {params?.id}</h1>
        <div className="mb-2">
          <h1 className="font-bold text-violet-700 mb-2">Details</h1>
          <div className="flex bg-yellow-300 border-2 border-slate-950 text-slate-900 p-3 rounded-md gap-4 md:gap-32">
            <figure className="flex flex-col">
              <span>
                <strong>UserId:</strong> {cart?.data.userId}
              </span>
              <span>
                <strong>Total Products:</strong> {cart?.data.totalProducts}
              </span>
              <span>
                <strong>Quantity:</strong> {cart?.data.totalQuantity}
              </span>
            </figure>
            <figure className="flex flex-col">
              <span>
                <strong>Discount:</strong>{" "}
                {formatRupiah(cart?.data.discountedTotal ?? 0)}
              </span>
              <span>
                <strong>Total Amount:</strong>{" "}
                {formatRupiah(cart?.data.total ?? 0)}
              </span>
            </figure>
          </div>
        </div>
        <div>
          <TableData
            title="Products"
            header={tableHeader}
            data={cart?.data.products ?? []}
          />
        </div>
      </div>
    </section>
  );
}
