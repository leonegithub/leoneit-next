import React from "react";

interface AddButtonProps {
  onAdd: () => void;
  disabled: boolean;
}

const AddButton: React.FC<AddButtonProps> = ({ onAdd, disabled }) => {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onAdd}
      className="text-white bg-blue bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Add to cart
    </button>
  );
};

export default AddButton;
