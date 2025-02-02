import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

function Items(props) {
  const [done, setDone] = useState(false);
  return (
    <div
      onClick={() => setDone(!done)}
      className="
      } select-none cursor-pointer w-full border-b-2 p-3 flex justify-between items-center"
    >
      <div>
        <span className="pr-2 text-[12px] text-slate-500">{props.time}</span>
        <span className={`${done === true ? "line-through" : ""} text-[18px]`}>
          {props.item}
        </span>
      </div>
      <div onClick={() => props.removeHandler(props.id)}>
        <FaRegTrashCan className="text-[#e73c3c]" />
      </div>
    </div>
  );
}

export default Items;
