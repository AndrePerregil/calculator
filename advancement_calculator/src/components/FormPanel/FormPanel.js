import { useState, useEffect, useRef } from "react";
import { FormField } from "./FormField/FormField";
import FormPanelCss from "./FormPanel.module.css";
import { conditions } from "../../utils/requestConditions";

export const FormPanel = ({ responseData, setResponseData }) => {
  const hasMounted = useRef(false);

  const defaultValues = {
    amount: 0,
    installments: 0,
    mdr: 0,
    days: [1, 15, 30, 90],
  };

  const [formData, setFormData] = useState({
    ...defaultValues,
  });

  const handleChange = (field, value) => {
    let data = { [field]: value };
    if (field === "days" && value[0] === "") {
      data = { [field]: defaultValues.days };
    }
    setFormData({ ...formData, ...data });
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
    }
    if (conditions(formData)) {
      const sendRequest = setTimeout(() => {
        fetch("https://frontend-challenge-7bu3nxh76a-uc.a.run.app/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((response) => setResponseData(response));
      }, 4000);

      return () => clearTimeout(sendRequest);
    }
  }, [formData, setResponseData]);

  return (
    <section className={FormPanelCss.panel}>
      <h1 className={FormPanelCss.title}>Simule a sua Antecipação</h1>
      <form className={FormPanelCss.form}>
        <FormField
          label={"Informe o valor da sua venda*"}
          description={"Inteiro ou float, minimo 1000 ou 1000.00"}
          financial={true}
          handleChange={handleChange}
          placeholder={"1000.00"}
        />
        <FormField
          label={"Em quantas parcelas*"}
          description={"Inteiro, minimo 1, maximo 12"}
          installments={true}
          handleChange={handleChange}
          placeholder={"1"}
        />
        <FormField
          label={"Informe o percentual de MDR*"}
          description={"Inteiro, minimo 0 maximo 100"}
          handleChange={handleChange}
          mdr={true}
          placeholder={"5"}
        />
        <FormField
          label={"Informe os dias"}
          description={"Inteiro, ou inteiros separados por virgula."}
          handleChange={handleChange}
          placeholder={["1", "15", "30", "90"]}
        />
      </form>
    </section>
  );
};
