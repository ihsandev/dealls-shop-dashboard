import { Input } from "@/components/ui/input";
import SelectOption from "@/components/elements/selectOption";
import TableData from "@/components/elements/tableData";

export default function Products() {
  return (
    <section>
      <div>
        <div className="flex lg:items-center lg:justify-between mb-2 lg:gap-7 gap-2 flex-col lg:flex-row">
          <figure className="flex md:items-center gap-2 lg:gap-1 md:gap-0 md:justify-between flex-col md:flex-row">
            <SelectOption placeholder="Select Brand" />
            <SelectOption placeholder="Select Product" />
            <SelectOption placeholder="Select Price Range" />
            <SelectOption placeholder="Select Category" />
          </figure>
          <figure>
            <Input placeholder="Search Product" />
          </figure>
        </div>
        <TableData />
      </div>
    </section>
  );
}
