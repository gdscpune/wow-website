import React from "react";

const InfoCard = ({ title, body }) => {
  return (
    <div className="p-4 m-4 items-center h-100 w-100 bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg lg:hover:-translate-y-2 transition duration-500">
      <li className="text-3xl text-slate-200 p-2 m-2 pb-5 list-none text-center">
        {title}
        <br />
        {body}
      </li>
    </div>
  );
};

export default InfoCard;
