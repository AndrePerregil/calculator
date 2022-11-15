export const FormField = (props) => {
  if (props.description) {
    return (
      <div>
        <label>{props.label}</label>
        <input />
      </div>
    );
  }
};
