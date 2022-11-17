import React from "react";
import { render, screen } from "@testing-library/react";
import { FormField } from "../../components/FormPanel/FormField/FormField";

describe("Input Component for ammount", () => {
  test("should be able to render an financial input", () => {
    render(
      <FormField
        label={"Informe o valor da sua venda*"}
        financial={true}
        placeholder={"1000.00"}
      />
    );
    expect(screen.getByPlaceholderText("1000.00")).toBeTruthy();
    expect(screen.getByText("Informe o valor da sua venda*")).toBeTruthy();
    expect(screen.getByText("R$")).toBeTruthy();
  });
});

describe("Input Component for installments", () => {
  test("should be able to render an  installment input", () => {
    render(
      <FormField
        label={"Em quantas parcelas*"}
        description={"Maximo de 12 parcelas"}
        installments={true}
        placeholder={"1"}
      />
    );
    expect(screen.getByPlaceholderText("1")).toBeTruthy();
    expect(screen.getByText("Em quantas parcelas*")).toBeTruthy();
    expect(screen.getByText("Maximo de 12 parcelas")).toBeTruthy();
  });
});

describe("Input Component for Interest rates", () => {
  test("should be able to render an interest input", () => {
    render(
      <FormField
        label={"Informe o percentual de MDR*"}
        mdr={true}
        placeholder={"5"}
      />
    );
    expect(screen.getByPlaceholderText("5")).toBeTruthy();
    expect(screen.getByText("Informe o percentual de MDR*")).toBeTruthy();
  });
});
