import { useEffect, useState } from "react";
import "./Gameboard.css"
import Image from './Image';
export const Path = "https://raw.githubusercontent.com/janserbus/react-puzzle/master/public";

function Gameboard() {

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [puzzle, setPuzzle] = useState([]);

  useEffect(() => {
    fetch(Path + "/puzzle-layout.json")
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setColumns(data.columns);
      setRows(data.rows);
      setPuzzle(data.puzzle);
    });         
  });


  const images = puzzle.map((image, index) => <Image />)

  return (
    <section className="gameboard">
      {images}
    </section>
  );
};

export default Gameboard