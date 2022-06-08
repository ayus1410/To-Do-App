// import './App.css';

// function Mycomponents (props) {
//  return(
//  <div>{props.name}</div>
//  );
// }
// function App() {
//   return (
//     <div className="App">
//       <Mycomponents name = {"Ayush"} />
//     </div>
//   );
// }

// export default App;
import './App.css';
import Home from "./components/home.jsx"
import Header from "./components/header.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
