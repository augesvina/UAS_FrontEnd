// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Comments from "./comments/Comments";
import Artikel from "./comments/Artikel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br><br></br><br></br>
      {/* <Content /> */}
      {/* <Slider/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
