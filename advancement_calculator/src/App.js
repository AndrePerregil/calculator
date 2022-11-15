import "./App.css";
import { FormPanel } from "./components/FormPanel/FormPanel";
import { Container } from "./components/OuterContainer/OuterContainer";

function App() {
  return (
    <div className="App">
      <Container>
        <FormPanel />
      </Container>
    </div>
  );
}

export default App;
