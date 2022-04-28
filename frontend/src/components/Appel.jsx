import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const Appel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://botw-compendium.herokuapp.com/api/v2").then((res) => {
      setData(res.data.data.materials);
    });
    // axios
    //   .get("https://zelda.fanapis.com/api/characters?limit=100")
    //   .then((res) => console.warn("API ZELDA/characters : ", res.data));
    // axios
    //   .get("https://zelda.fanapis.com/api/items")
    //   .then((res) => console.warn("API ZELDA/items : ", res.data));
    // axios
    //   .get("https://zelda.fanapis.com/api/places?limit=100")
    //   .then((res) => console.warn("API ZELDA/places : ", res.data));
  }, []);
  return (
    <div>
      {data.map((monster) => (
        <Cards key={`monster-${monster.id}`} monster={monster} />
      ))}
    </div>
  );
};
export default Appel;
