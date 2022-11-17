import SummaryPanelCss from "./SummaryPanel.module.css";

export const SummaryPanel = ({ responseData }) => {
  const allParagraphs = [];

  for (const key in responseData) {
    const description = () => {
      return key === "1" ? "Amanhã: " : `Em ${key} dias: `;
    };

    const paragraph = (
      <p className={SummaryPanelCss.line} key={key}>
        {description()}
        <span className={SummaryPanelCss.result}>
          R$: {responseData[key].toFixed(2)}
        </span>
      </p>
    );
    allParagraphs.push(paragraph);
  }

  return (
    <div className={SummaryPanelCss.container}>
      <h2 className={SummaryPanelCss.title}>Você receberá:</h2>
      {allParagraphs}
    </div>
  );
};
