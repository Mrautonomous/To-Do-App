import React, { useRef } from "react";
import { FiPlus } from "react-icons/fi";

function Input(props) {
  const inputBox = useRef();
  return (
    <div className="p-3 flex justify-around">
      <input
        placeholder="Enter New Task"
        type="text"
        ref={inputBox}
        className="p-3 focus:outline-none border w-[90%] border-slate-600 "
      />
      <div
        onClick={() => {
          props.handler(inputBox.current.value);
          inputBox.current.value = "";
        }}
        className="ml-2 cursor-pointer hover:bg-[#199b5e] duration-200 w-[50px] h-[50px] bg-[#2bc49e] text-white text-3xl rounded-[50%] flex justify-center items-center"
      >
        <FiPlus />
      </div>
    </div>
  );
}

export default Input;
