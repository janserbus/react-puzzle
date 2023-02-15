import './App.css';
import Setup from './Setup';
import Gameboard from './Gameboard';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  return (
    <div className="app">
      <Setup></Setup>
      <DndProvider backend={HTML5Backend}>
        <Gameboard></Gameboard>
      </DndProvider>
    </div>
  );
}

export default App;
