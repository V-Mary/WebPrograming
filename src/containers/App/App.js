import './App.css';
import {Header} from "../Navigation/Header/Header";
import {Footer} from "../Navigation/Footer/Footer";
import {Homepage} from "../Home/Homepage";

export const App = () => (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
)

export default App;