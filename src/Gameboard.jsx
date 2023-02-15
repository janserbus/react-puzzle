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
      
      for(const piece of data.puzzle){
        piece.curentX = piece.originX;
        piece.curentY = piece.originY;
      }
      
      for(const piece of data.puzzle){
        let randpiece = data.puzzle[Math.floor(Math.random() * data.puzzle.length)];
        [piece.curentX, randpiece.curentX] = [randpiece.curentX, piece.curentX];
        [piece.curentY, randpiece.curentY] = [randpiece.curentY, piece.curentY];
      }
      
      setPuzzle(data.puzzle);
    });         
  });


  const images = puzzle.map((image, index) => <Image state={image} />)

  return (
    <section className="gameboard" style={{gridTemplateColumns: "repeat(" + columns +", 1fr)", gridTemplateRows: "repeat(" + rows + ", 1fr)"}}>
      {images}
    </section>
  );
};

export default Gameboard