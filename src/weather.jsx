import { useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();

  
  function redirect(){
    history.push(`/page2`); 
  }

  return (
    <div className="App">
      <h1>PAGE 1</h1>
      <button onClick={redirect}>IR</button>
    </div>
  );
}
