import qs from "query-string";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const CategorysBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  const navigate = useNavigate()
  // console.log(value)
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
        currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = {
      ...currentQuery,
      category:label,
    }
    const url = qs.stringifyUrl({
      url:'/',
      query:updatedQuery
    },
    {skipNull:true}
    )
    navigate(url)
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-start justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500"
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label} </div>
    </div>
  );
};

export default CategorysBox;
