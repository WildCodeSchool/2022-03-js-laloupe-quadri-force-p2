import axios from "axios";
import { useEffect, useState } from "react";

const Appel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://botw-compendium.herokuapp.com/api/v2").then((res) => {
      setData(res.data.data.monsters);
      console.warn(res.data.data.monsters);
    });
    axios
      .get("https://zelda.fanapis.com/api/characters?limit=100")
      .then((res) => console.warn("API ZELDA/characters : ", res.data));
    axios
      .get("https://zelda.fanapis.com/api/items")
      .then((res) => console.warn("API ZELDA/items : ", res.data));
    axios
      .get("https://zelda.fanapis.com/api/places?limit=100")
      .then((res) => console.warn("API ZELDA/places : ", res.data));
  }, []);
  return (
    <div>
      <h1>Monstre de Zelda BOTW</h1>
      {data.map((monster, index) => (
        <img src={monster.image} alt={index} />
      ))}
    </div>
  );
};
export default Appel;
