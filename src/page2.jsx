import { useHistory } from "react-router-dom";

export default function Page2() {
    const history = useHistory();
    function redirect(){
        history.push(`/`); 
    }

  return (
    <div className="App">
      <h1>PAGE 2</h1>
      <button onClick={redirect}>VOLTAR</button>
    </div>
  );
}