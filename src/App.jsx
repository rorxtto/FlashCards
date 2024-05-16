import "./App.css";
import Fundo from "./Components/Fundo/Fundo";
import FormLogin from "./Components/FormLogin/FormLogin";


function App() {
  return (
    <div className="app">
      <div>
        
        <Fundo titulo="NOME FLASH CARDS" texto="Desbloqueie o conhecimento com nossos flash cards inteligentes."/>
        <FormLogin/>
      </div>
    </div>
  );
}

export default App;
