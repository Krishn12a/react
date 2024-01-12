import logo from './logo.svg';
import './App.css';
import CorseComp from './components/CorseComp';
import RouterComp from './components/RouterComp';
import StudentComp from './components/StudentComp';
import CourseListComp from './components/CourseListComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <RouterComp></RouterComp>
      {/* <StudentComp></StudentComp> */}
      {/* <CourseListComp></CourseListComp> */}
    </div>
  );
}

export default App;
