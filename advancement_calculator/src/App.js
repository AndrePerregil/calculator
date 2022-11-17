import { useState } from "react";
import "./App.css";
import { FormField } from "./components/FormPanel/FormField";
import { FormPanel } from "./components/FormPanel/FormPanel";
import { Container } from "./components/OuterContainer/OuterContainer";
import { SummaryPanel } from "./components/SummaryPanel/SummaryPanel";

function App() {
  const [responseData, setResponseData] = useState({
    1: 0,
    15: 0,
    30: 0,
    90: 0,
  });

  return (
    <div className="App">
      <Container>
        <FormPanel
          responseData={responseData}
          setResponseData={setResponseData}
        >
          <FormField />
        </FormPanel>
        <SummaryPanel responseData={responseData} />
      </Container>
    </div>
  );
}

export default App;
