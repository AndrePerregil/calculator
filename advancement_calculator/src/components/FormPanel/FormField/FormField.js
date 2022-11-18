import FormFieldCss from "./FormField.module.css";

export const FormField = ({
  label,
  register,
  placeholder,
  type,
  description,
  financial,
  installments,
  mdr,
  handleChange,
}) => {
  return installments ? (
    <div className={FormFieldCss.fieldContainer}>
      <label className={FormFieldCss.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        register={register}
        className={FormFieldCss.input}
        onChange={(e) => {
          handleChange("installments", e.target.value);
        }}
      />
      <span className={FormFieldCss.description}>{description}</span>
    </div>
  ) : financial ? (
    <div className={FormFieldCss.fieldContainer}>
      <label className={FormFieldCss.label}>{label}</label>
      <div className={FormFieldCss.fieldContainerIcon}>
        <input
          type={type}
          placeholder={placeholder}
          register={register}
          className={FormFieldCss.inputFinantial}
          onChange={(e) => {
            handleChange("amount", e.target.value);
          }}
        />
        <p className={FormFieldCss.financialIcon}>R$</p>
      </div>
      <span className={FormFieldCss.description}>{description}</span>
    </div>
  ) : mdr ? (
    <div className={FormFieldCss.fieldContainer}>
      <label className={FormFieldCss.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        register={register}
        className={FormFieldCss.input}
        onChange={(e) => {
          handleChange("mdr", e.target.value);
        }}
      />
      <span className={FormFieldCss.description}>{description}</span>
    </div>
  ) : (
    <div className={FormFieldCss.fieldContainer}>
      <label className={FormFieldCss.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        register={register}
        className={FormFieldCss.input}
        onChange={(e) => {
          handleChange("days", e.target.value.split(","));
        }}
      />
      <span className={FormFieldCss.description}>{description}</span>
    </div>
  );
};
