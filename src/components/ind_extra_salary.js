import React, { useState } from "react";

const Ind_extra_salary = ({ values, setValues, laboursArray }) => {
  const [lId, setLid] = useState("");
  const [labour_name, setLabour_name] = useState("");
  const [next, setNext] = useState(false);
  const onHandle = (name) => (e) => {
    if (name === "lId") {
      setLid(e.target.value);
    } else if (name === "labour_name") {
      setLabour_name(e.target.value);
    }
  };
  const onHandleChange = (e) => {
    e.preventDefault();
    setNext(!next);
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <input
          type="text"
          onChange={onHandle("lId")}
          value={lId}
          placeholder="Labour Id"
          required
          className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </td>
      <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
        <input
          type="text"
          onChange={onHandle("labour_name")}
          value={labour_name}
          placeholder="Labour Name"
          required
          className="w-full md:mt-4 px-3 py-2 placeholder-gray-500 border border-gray-400 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </td>
      {next ? (
        <td></td>
      ) : (
        <td className="py-4 px-6 text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
          <button
            onSubmit={onHandleChange}
            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-lg font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:ml-3 sm:w-auto sm:text-lg"
          >
            Add
          </button>
        </td>
      )}
    </tr>
  );
};

export default Ind_extra_salary;