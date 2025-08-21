/* eslint-disable react/prop-types */
const SubmitButton = ({ label }) => {
    return (
      <button type="submit" className="w-full dark:bg-[#95c681] dark:hover:bg-[#86b274] bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-1 rounded-lg  focus:outline-hidden focus:ring-2 focus:ring-blue-500">
        {label}
      </button>
    );
  };
  
  export default SubmitButton;
  