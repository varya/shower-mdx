import React from "react";
import { parseAttributesFromString } from "../utils/parseAttributes";
import { isString } from "../utils/helpers";

const ListWithAttributes = ({ children, as, ...initialProps }) => {
  const Component = as || "div";
  let listProps = {};

  /* Parse attributes for <li> items */
  let newChildren = React.Children.map(children, (c, i) => {
    let itemString = isString(c.props.children) ? c.props.children : null;
    if (i < children.length) {
      if (itemString) {
        const { children: newString, ...props } = parseAttributesFromString(
          c.props.children,
          true
        );
        listProps = props;
        return React.cloneElement(c, { children: newString });
      }
    }
    return c;
  });
  return (
    <Component {...listProps} {...initialProps}>
      {newChildren}
    </Component>
  );
};

export default ListWithAttributes;
