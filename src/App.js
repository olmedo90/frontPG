import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/buttons.css";
import "./styles/App.css";
import "./styles/icons.css"
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ProyectContextProvider } from "./ContextProyect/ProyectContextProvider";


function App() {
  return (
    <ProyectContextProvider>
      <Router>
        <AppRouter/>
      </Router>
      </ProyectContextProvider>
  );
}

export default App;
