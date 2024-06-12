import './App.css';
import Child from './components/Child'
function App() {
  return (
    <div className='app-container'>
      <ul>
        <li>
          <h1>app 1</h1>
        </li>
        <li>
          <h1>app 2</h1>
        </li>
        <li>
          <h1>app 3</h1>
        </li>
      </ul>
      <Child />
    </div>
  );
}

export default App;
