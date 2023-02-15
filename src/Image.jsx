import {useRef} from "react"
import {Path} from "./Gameboard";
import { useDrag, useDrop } from 'react-dnd';

function Image({state, callbackSwitch}){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "puzzle",
        item: {type: "puzzle", value: state},
        collect: (monitor) => { return { isDragging: monitor.isDragging() }}
      }))
      const [{isOver}, drop] = useDrop(() => ({
        accept: ["puzzle"],
        drop: (item, monitor) => {callbackSwitch(item.value, state)}, 
        collect: monitor => ({ isOver: !!monitor.isOver() })
      }))
      const dnd = useRef(null);
      drag(drop(dnd));

    return(
        <img ref={dnd} src={Path + state.url} style={{gridRow: state.curentY, gridColumn: state.curentX}}/>
    );
};
export default Image;