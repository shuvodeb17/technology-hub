import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from "./components/Blog/Blog";


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Cards></Cards>
      <Blog></Blog>
      <ToastContainer />
    </div>
  );
}

export default App;
