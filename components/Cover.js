import React from "react";
// import WithAttributes
import WithAttributes from "./WithAttributes";
const Cover = ({ children, src, alt }) => {
  // unwrap <p> tags
  const newChildren = React.Children.map(children, (child) => {
    return child.props.originalType === "p" ? (
      <WithAttributes as="figcaption">{child.props.children}</WithAttributes>
    ) : (
      child
    );
  });

  return (
    <figure>
      <img className="cover" src={src} alt={alt} />
      {newChildren}
    </figure>
  );
};

export default Cover;
