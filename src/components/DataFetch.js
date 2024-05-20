import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [data, setData] = useState([]);
  console.log("mero data yaxa", data);

  const dataline = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const datayahaxa = await response.json();
    setData(datayahaxa);
  };

  useEffect(() => {
    dataline();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetch;
