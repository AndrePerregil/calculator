export const conditions = (formData) => {
  const amount = formData.amount >= 1000;

  const installments =
    formData.installments >= 0 && formData.installments <= 12;

  const mdr = formData.mdr >= 0 && formData.mdr <= 100;

  const days = () => {
    return formData.days.every((day) => {
      return !isNaN(day);
    });
  };

  return amount && installments && mdr && days();
};
