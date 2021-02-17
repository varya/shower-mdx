import React from "react";
import { parseAttributesFromString } from "../utils/parseAttributes";
const ListWithAttributes = ({ children, as, ...props }) => {
  const Component = as || "div";
  let listProps = {};
  let newChildren = React.Children.map(children, (c, i) => {
    if (i < children.length) {
      const { children: newString, ...props } = parseAttributesFromString(
        c.props.children,
        true
      );
      listProps = props;
      return React.cloneElement(c, { children: newString });
    }
    return c;
  });
  return (
    <Component {...listProps} {...props}>
      {newChildren}
    </Component>
  );
};

export default ListWithAttributes;
