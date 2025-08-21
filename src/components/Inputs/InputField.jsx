/* eslint-disable react/prop-types */
// src/components/InputField.jsx
const InputField = ({ label, type, name, value, onChange, placeholder }) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium mb-1 dark:text-gray-100 text-gray-700 transition-colors duration-500">
          {label}
        </label>
        <input type={type} name={name} id={name} value={value} onChange={onChange} placeholder={placeholder} className="mt-1 p-3 text-sm w-full dark:bg-[#374151] dark:text-white dark:border-slate-500 border-gray-300 border  rounded-lg focus:outline-hidden focus:ring-none transition-colors duration-500"/>
      </div>
    );
  };
  
export default InputField;
  