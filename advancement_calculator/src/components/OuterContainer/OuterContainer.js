import ContainerCSS from "./OuterContainer.module.css";

export const Container = (props) => {
  return <div className={ContainerCSS.container}>{props.children}</div>;
};
