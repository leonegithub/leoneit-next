import React from "react";

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("codice");
    url.searchParams.delete("quantita");
    window.history.replaceState({}, "", url.toString());
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="text-white bg-red bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
    >
      Empty cart
    </button>
  );
};

export default DeleteButton;
