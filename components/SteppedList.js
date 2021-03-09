import { cloneElement } from "react";

const SteppedList = ({ children }) => {
  const listElements =
    children?.props?.originalType === "ul" ||
    children?.props?.originalType === "ol"
      ? children.props.children
      : null;

  if (listElements) {
    return (
      <ol>
        {listElements.map((item, index) => {
          return cloneElement(item, {
            className: index === 0 ? "" : "next",
            key: "SteppedList-" + index,
          });
        })}
      </ol>
    );
  }
  return <ol>{children}</ol>;
};

export default SteppedList;
