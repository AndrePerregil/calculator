import { FormField } from "./FormField";
import FormPanelCss from "./FormPanel.module.css";

export const FormPanel = (props) => {
  return (
    <section className={FormPanelCss.panel}>
      <h1 className={FormPanelCss.title}>Simule a sua Antecipação</h1>
      <form className={FormPanelCss.form}>
        <FormField label={"Informe o valor da sua venda*"} financial={true} />
        <FormField
          label={"Em quantas parcelas*"}
          description={"Maximo de 12 parcelas"}
        />
        <FormField label={"Informe o percentual de MDR*"} />
      </form>
    </section>
  );
};
