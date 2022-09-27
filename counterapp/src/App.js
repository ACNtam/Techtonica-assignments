import logo from './logo.svg';
import './index.css';

export default function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Hello Techtonica</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        RESET
      </button>
    </div>
  );
}


export default App;
