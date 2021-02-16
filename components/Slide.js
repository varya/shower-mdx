import React from "react";
import { parseAttributesFromProps } from "../utils/parseAttributes";

const Slide = (props) => {
  let children = React.Children.toArray(props.children);
  const firstChild = children.splice(0, 1)[0];

  // Continue only with slide sections, which start wiith h2 heading
  // By returning props.children, we "unwrap" the rest of headings, which were wrapped into sections by remark-sectionize plugin
  if (!firstChild || !firstChild.props || firstChild.props.mdxType !== "h2")
    return props.children;

  // Resolve atributes for slide
  // The attributes parsed be remark-attr as h2 attributes should belong to section, while h2 attributes were not parsed at all: parse them manually below
  let {
    parentName,
    mdxType,
    originalType,
    children: headingChildren,
    ...sectionProps // h2 props which were parsed by remark-attr, become section props
  } = firstChild.props;

  let headingProps = Object.assign(
    parseAttributesFromProps({ children: headingChildren })
  );

  return (
    <section
      {...sectionProps}
      className={`slide${
        sectionProps.className ? " " + sectionProps.className : ""
      }`}
    >
      {headingProps && headingProps.children && (
        <h2 {...headingProps}>{headingProps.children}</h2>
      )}
      {children}
    </section>
  );
};

export default Slide;
