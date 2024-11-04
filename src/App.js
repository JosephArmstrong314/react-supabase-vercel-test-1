import React, { useEffect, useState } from "react";
import "./App.css";
import supabase from "./supabase";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("test_table_1").select("*");
      setData(data);
      setError(error);
    };

    // console.log(supabase);
    fetchData();
  }, []);

  console.log(data);
  console.log(error);

  return (
    <div className="App">
      <header className="App-header">Learn React + Supabase</header>
      <div>
        {error && <p>Error: {error.message}</p>}
        {data ? (
          <ul>
            {data?.map((item) => (
              <li key={item.id}>
                {item.name} : {item.rating} Stars
              </li> // Adjust according to your data structure
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
