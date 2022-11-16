import FormFieldCss from "./FormField.module.css";

export const FormField = ({
  label,
  register,
  placeholder,
  type,
  description,
  financial,
}) => {
  return description ? (
    <div className={FormFieldCss.fieldContainer}>
      <label className={FormFieldCss.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        register={register}
        className={FormFieldCss.input}
      />
      <span className={FormFieldCss.description}>{description}</span>
    </div>
  ) : financial ? (
    <div className={FormFieldCss.fieldContainer}>
      <label className={FormFieldCss.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        register={register}
        className={FormFieldCss.input}
      />
      <p className={FormFieldCss.financialIcon}>R$</p>
    </div>
  ) : (
    <div className={FormFieldCss.fieldContainer}>
      <label className={FormFieldCss.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        register={register}
        className={FormFieldCss.input}
      />
    </div>
  );
};
