import React, { useEffect, useState } from "react";
import { intance } from "../api";

export default function Categories({handleClckItem}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    intance
      .get("/category?_embed=projects")
      .then((data) => setData(data));
  }, []);
  const handleClckId=(id) => {
    data.filter(item=>{
        if(item.id === id){
            return handleClckItem(item.projects);
        }
    })
  }
  
  return (
    <div className="flex p-20 ">
      {data &&
        data.map((item) => (
          <li key={item.id} className="p-2 list-none">
            <button onClick={()=>handleClckId(item.id)} className="border text-white p-2">{item.name}</button>
          </li>
        ))}
    </div>
  );
}
