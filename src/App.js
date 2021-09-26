import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from "./actions/index"

function App() {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div className="mainContainer">
      <h1>Redux App Counter</h1>
      <div className="counterBox">
        <button onClick={() => dispatch(decNumber())}>-</button>
        <p>{myState}</p>
        <button onClick={() => dispatch(incNumber())}>+</button>
      </div>
      <p>Increament/Decreament Counter </p>
    </div>
  );
}

export default App;
