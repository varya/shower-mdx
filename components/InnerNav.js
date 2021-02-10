import { cloneElement } from "react";

const InnerNav = ({ children }) => {
  const listElements =
    children?.props?.originalType === "ul" ||
    children?.props?.originalType === "ol"
      ? children.props.children
      : null;

  if (listElements) {
    return (
      <ol>
        {listElements.map((item, index) => {
          return index === 0 ? item : cloneElement(item, { className: "next" });
        })}
      </ol>
    );
  }
  return <ol>{children}</ol>;
};

export default InnerNav;
