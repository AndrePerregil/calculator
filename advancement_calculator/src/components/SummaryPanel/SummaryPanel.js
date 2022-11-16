import SummaryPanelCss from "./SummaryPanel.module.css";

export const SummaryPanel = () => {
  return (
    <div className={SummaryPanelCss.container}>
      <h2 className={SummaryPanelCss.title}>Você receberá:</h2>
      <p>
        Amanha: <span className={SummaryPanelCss.result}>R$: 0,00</span>
      </p>
      <p>
        Amanha: <span className={SummaryPanelCss.result}>R$: 0,00</span>
      </p>
      <p>
        Amanha: <span className={SummaryPanelCss.result}>R$: 0,00</span>
      </p>
      <p>
        Amanha: <span className={SummaryPanelCss.result}>R$: 0,00</span>
      </p>
    </div>
  );
};
