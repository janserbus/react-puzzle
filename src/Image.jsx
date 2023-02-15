import {Path} from "./Gameboard"

function Image({state}){

    console.log(state);
    return(

        <img src={Path + state.url} style={{gridRow: state.curentY, gridColumn: state.curentX}}/>
    );
};
export default Image;