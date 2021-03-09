import React from "react";
import { parseAttributesFromProps } from "../utils/parseAttributes";
const ParagraphWithAttributes = ({ as, ...props }) => {
  // if paragraph contains image, change it to div
  let isDiv = React.Children.toArray(props.children).find(
    (c) => c?.props?.mdxType === "img"
  )
    ? true
    : false;

  const Component = isDiv ? "div" : as || "p";

  return (
    <Component
      {...parseAttributesFromProps(props)}
      style={isDiv ? { display: "flex" } : undefined}
    />
  );
};

export default ParagraphWithAttributes;
