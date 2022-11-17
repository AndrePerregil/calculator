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
    amount: 0,
    installments: 0,
    mdr: 0,
    days: [1, 15, 30, 90],
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
          financial={true}
          handleChange={handleChange}
          placeholder={"1000.00"}
        />
        <FormField
          label={"Em quantas parcelas*"}
          description={"Maximo de 12 parcelas"}
          installments={true}
          handleChange={handleChange}
          placeholder={"1"}
        />
        <FormField
          label={"Informe o percentual de MDR*"}
          handleChange={handleChange}
          mdr={true}
          placeholder={"5"}
        />
        <FormField
          label={"Informe os dias"}
          description={"Numero inteiro, ou separados por virgula. ex: 1,15,30"}
          handleChange={handleChange}
          placeholder={["1", "15", "30", "90"]}
        />
      </form>
    </section>
  );
};
