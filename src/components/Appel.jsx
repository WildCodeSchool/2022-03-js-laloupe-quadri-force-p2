import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Search from "./SearchBar";

const Appel = () => {
  const [data, setData] = useState([]);
  // const [rangeValue, setRangeValue] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState("monsters");
  const radios = [
    "creatures-food",
    "creatures-non-food",
    "equipment",
    "materials",
    "monsters",
    "treasure",
  ];
  useEffect(() => {
    axios.get("https://botw-compendium.herokuapp.com/api/v2").then((res) => {
      let items = [];

      if (selectedRadio === "creatures-food") {
        items = res.data.data.creatures.food;
      } else if (selectedRadio === "creatures-non-food") {
        items = res.data.data.creatures.non_food;
      } else items = res.data.data[selectedRadio];

      setData(items);
      // console.warn(res.data.data);
    });
  }, [selectedRadio]);
  // console.log(rangeValue);

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="selectionRadio">
        <ul>
          <div className="filterName">
            {radios.map((categorie) => (
              <li>
                <input
                  type="radio"
                  id={categorie}
                  name="reglageCategorie"
                  checked={categorie === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.id)}
                />
                <label htmlFor={categorie}>{categorie}</label>
              </li>
            ))}
          </div>
        </ul>
        <ul>
          {data
            .filter(
              (item) =>
                !searchValue ||
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((monster) => (
              <Cards
                key={`monster-${monster.id}`}
                monster={monster}
                className="card"
              />
            ))}
        </ul>
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
};
export default Appel;
