"use client";

function Clicky({ children, type, size = "md", onClick = () => {} }) {
  validateProps(type, size);

  return (
    <button
      className={`${buttonType[type]} ${buttonSize[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Clicky;

const validateProps = (type, size) => {
  // Validate the type and size
  if (!buttonType[type]) {
    throw new Error(`Invalid type: ${type}`);
  }
  if (!buttonSize[size]) {
    throw new Error(`Invalid size: ${size}`);
  }
};

const buttonType = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  basic: "bg-white hover:bg-gray-700 text-gray-700 font-bold rounded",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold rounded",
};

const buttonSize = {
  sm: "py-2 px-4 text-xs",
  md: "py-2 px-4 text-md",
  lg: "py-3 px-6 text-lg",
};
