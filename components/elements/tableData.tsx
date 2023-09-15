import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function TableData({ title, header, data }: any) {
  return (
    <>
      {title && <h1 className="font-bold mb-2 text-violet-700">{title}</h1>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Laptop</TableCell>
            <TableCell>Apple</TableCell>
            <TableCell>Rp. 30.000.000</TableCell>
            <TableCell>10</TableCell>
            <TableCell>Elektronik</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <figure className="flex items-center gap-2">
          <Button
            size="sm"
            className="bg-violet-700 hover:bg-violet-600 rounded-full"
          >
            Prev
          </Button>
          <span>1 / 25</span>
          <Button
            size="sm"
            className="bg-violet-700 hover:bg-violet-600 rounded-full"
          >
            Next
          </Button>
        </figure>
      </div>
    </>
  );
}
