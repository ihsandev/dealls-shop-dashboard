import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface ITableHeader {
  label?: string;
  key: string;
  index?: number;
  action?: any;
}

export interface IPagination {
  skip: number;
  totalPages: number;
  page: number;
  onChangePage: (value: string) => void;
}

interface ITableData {
  title?: string;
  header: ITableHeader[];
  data: any[];
  onColumnClick?: any;
  render?: any;
  pagination?: IPagination;
  isLoading?: boolean;
}

export default function TableData({
  title,
  header = [],
  data = [],
  onColumnClick,
  render,
  pagination,
  isLoading,
}: ITableData) {
  const newHeader = [...header];
  let newData = [...data];
  const canGoPrev: boolean = (pagination?.page ?? 1) > 1;
  const canGoNext: boolean =
    (pagination?.page ?? 1) < (pagination?.totalPages ?? 1);

  if (render) {
    for (let i = 0; i < render.header.length; i++) {
      newHeader.splice(render.header[i].index, 0, render.header[i]);
    }
    newData = newData.map((itemData) => ({
      ...itemData,
      action: render.data,
    }));
  }

  return (
    <>
      {title && <h1 className="font-bold mb-2 text-violet-700">{title}</h1>}
      <Table>
        <TableHeader>
          <TableRow>
            {newHeader.map((head, i) => (
              <TableHead key={head.key}>
                {!head.label && head.key === "action" ? (
                  <p className="flex items-center">{head.action(head, i)}</p>
                ) : (
                  head.label
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  {Array.from({ length: newHeader.length }).map((_, idx) => (
                    <TableCell key={idx}>
                      <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : newData.map((element, i) => (
                <TableRow
                  key={element.id}
                  onClick={() => onColumnClick(element)}
                  style={{ cursor: onColumnClick && "pointer" }}
                >
                  {newHeader.some((head) => head.key === "no") && (
                    <td>{i + 1}</td>
                  )}
                  {newHeader
                    .filter((h) => h.key !== "no")
                    .map((head) =>
                      head.key === "action" ? (
                        <TableCell key={head.key}>
                          <p className="flex items-center">
                            {element[head.key]
                              ?.filter(
                                (item: any) => item.index === head.index
                              )[0]
                              .action(element, i)}
                          </p>
                        </TableCell>
                      ) : (
                        <TableCell key={head.key}>
                          {element[head.key]}
                        </TableCell>
                      )
                    )}
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <figure className="flex items-center gap-2">
          <Button
            size="sm"
            className="bg-violet-700 hover:bg-violet-600 rounded-full"
            onClick={() => pagination?.onChangePage("prev")}
            disabled={!canGoPrev}
          >
            Prev
          </Button>
          <span>
            {pagination?.page || 1} / {pagination?.totalPages || 1}
          </span>
          <Button
            size="sm"
            className="bg-violet-700 hover:bg-violet-600 rounded-full"
            onClick={() => pagination?.onChangePage("next")}
            disabled={!canGoNext}
          >
            Next
          </Button>
        </figure>
      </div>
    </>
  );
}
