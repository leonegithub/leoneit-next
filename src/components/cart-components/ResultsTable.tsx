import React from "react";
import QuantityInput from "./Counter";
import AddButton from "./AddButton";

interface SafetySheet {
  id: string;
  codice: string;
  descrizioneEng: string;
  quantity: number;
}

interface ResultsTableProps {
  results: SafetySheet[];
  updateQuantity: (id: string, quantity: number) => void;
  addToCart: (item: SafetySheet) => void;
}

const ResultsTable: React.FC<ResultsTableProps> = ({
  results,
  updateQuantity,
  addToCart,
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              code
            </th>
            <th scope="col" className="px-6 py-3">
              description
            </th>
            <th scope="col" className="px-6 py-3">
              quantity
            </th>
            <th scope="col" className="px-6 py-3">
              add to cart
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((element, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {element.codice}
              </th>
              <td className="px-6 py-4">{element.descrizioneEng}</td>
              <td className="px-6 py-4">
                <QuantityInput
                  value={element.quantity}
                  onIncrement={() =>
                    updateQuantity(element.id, element.quantity + 1)
                  }
                  onDecrement={() =>
                    updateQuantity(element.id, element.quantity - 1)
                  }
                  onChange={(value) => updateQuantity(element.id, value)}
                />
              </td>
              <td className="px-6 py-4">
                <AddButton
                  disabled={element.quantity === 0}
                  onAdd={() => addToCart(element)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
