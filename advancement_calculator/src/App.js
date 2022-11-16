import "./App.css";
import { FormField } from "./components/FormPanel/FormField";
import { FormPanel } from "./components/FormPanel/FormPanel";
import { Container } from "./components/OuterContainer/OuterContainer";
import { SummaryPanel } from "./components/SummaryPanel/SummaryPanel";

function App() {
  return (
    <div className="App">
      <Container>
        <FormPanel>
          <FormField />
        </FormPanel>
        <SummaryPanel />
      </Container>
    </div>
  );
}

export default App;
