import TableData from "@/components/elements/tableData";

export default function DetailCart() {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-violet-700">Cart 1</h1>
        <div className="mb-2">
          <h1 className="font-bold text-violet-700 mb-2">Details</h1>
          <div className="flex bg-yellow-300 border-2 border-slate-950 text-slate-900 p-3 rounded-md gap-32">
            <figure className="flex flex-col">
              <span>
                <strong>User:</strong> Test
              </span>
              <span>
                <strong>Added On:</strong> 20 Jan 2023
              </span>
            </figure>
            <figure className="flex flex-col">
              <span>
                <strong># of Items:</strong> 5
              </span>
              <span>
                <strong>Total Amount:</strong> 500000
              </span>
            </figure>
          </div>
        </div>
        <div>
          <TableData title="Products" />
        </div>
      </div>
    </section>
  );
}
