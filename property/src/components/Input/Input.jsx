/* eslint-disable react/prop-types */
const Input = ({ placeholder, label, type, required }) => {
  return (
    <>
      {label ? (
        <label htmlFor="email" className="text-md flex gap-1 items-center">
          {label}
          {required ? <p className="text-red-500 text-lg">*</p> : ""}
        </label>
      ) : (
        ""
      )}

      <input
        type={type ? type : ""}
        placeholder={placeholder}
        className={`py-[10px] px-3 w-full border-2 border-gray-200 rounded-[0.5rem] mt-2 hover:ring-primary focus:border-[#fd7e14] focus:outline-none text-[17px]`}
      />
    </>
  );
};

export default Input;
