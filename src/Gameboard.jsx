import { useEffect } from "react";
import "./Gameboard.css"
import Image from './Image';
export const Path = "https://raw.githubusercontent.com/TomasKazda/react-puzzle/main/public"

function Gameboard() {

  useEffect(() => {
    const myRequest = new Request('/img/puzzle_layour.json');

         
  });

  return (
    <section className="gameboard"></section>
  );
};

export default Gameboard