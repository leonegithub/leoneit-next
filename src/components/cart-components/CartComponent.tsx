import React from "react";
import DeleteButton from "./DeleteButton";
import { useCart } from "./CartContext";

interface CartContextProps {
  id: string;
  codice: string;
  descrizioneEng: string;
  quantity: number;
}

const CartComponent: React.FC = () => {
  const { cart, emptyCart, setCart } = useCart();

  const removeItem = (codice: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete("codice");
    url.searchParams.delete("quantita");
    window.history.replaceState({}, "", url.toString());
    setCart((prevCart: CartContextProps[]) =>
      prevCart.filter((item: CartContextProps) => item.codice !== codice)
    );
  };

  const totalQuantity = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  return (
    <div className="w-4/12 dark:bg-gray-800">
      <div className="flex justify-end mb-4">
        {/* <h2 className="text-2xl">Cart</h2> */}

        <DeleteButton onClick={emptyCart} />
      </div>
      <div className="relative overflow-x-auto">
        <table
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          style={{ marginTop: "25px" }}
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.descrizioneEng}
                  </th>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">
                    <span
                      className="cursor-pointer text-red-500 hover:underline"
                      onClick={() => removeItem(item.codice)}
                    >
                      Remove
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4" colSpan={3}>
                  Cart is empty
                </td>
              </tr>
            )}
          </tbody>
          {cart.length > 0 && (
            <tfoot>
              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">
                  Total
                </th>
                <td className="px-6 py-3">{totalQuantity}</td>
                <td className="px-6 py-3"></td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export default CartComponent;
