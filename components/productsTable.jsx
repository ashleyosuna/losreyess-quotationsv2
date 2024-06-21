export default function ProductsTable({ products }) {
  return (
    <>
      <table className="mt-6 w-full rounded-2xl border-2 border-gray-200">
        <thead className="bg-gray-100">
          <tr className="font-bold text-center border-b border-gray-200">
            <th className="p-2">PRODUCTO</th>
            <th className="p-2">PRECIO</th>
            <th className="p-2 max-md:hidden">CANTIDAD</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return (
              <>
                <tr
                  key={product._id}
                  className="odd:bg-white even:bg-gray-100 text-right border-b border-gray-200"
                >
                  <td className="py-1 px-2 text-left">{product.description}</td>
                  <td className="py-1 px-2">{product.price}</td>
                  <td className="py-1 px-2 max-md:hidden">{product.amount}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
