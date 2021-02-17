const parseAttr = require("md-attr-parser");
import React from "react";

/**
 * Parse attributes from props object
 *
 * @param {object} props
 * @returns {object} - modified props with added attributes and modified children elements
 *
 */
export const parseAttributesFromProps = (props) => {
  const childrenArray = React.Children.toArray(props.children);

  const firstStringIndexReverse = childrenArray
    .slice()
    .reverse()
    .findIndex((child) => child instanceof String || typeof child === "string");

  if (firstStringIndexReverse === -1) return props; // Return if there are no strings at all in children

  const lastStringIndex = childrenArray.length - 1 - firstStringIndexReverse;
  const lastString = childrenArray[lastStringIndex];

  const {
    children: newString,
    ...parsedAttributes
  } = parseAttributesFromString(lastString);

  childrenArray.splice(lastStringIndex, 1, newString);
  const newProps = {
    ...props,
    ...parsedAttributes,
    ...{ children: childrenArray },
  };

  return newProps;
};

/**
 * Parse attributes from string
 *
 * @param {string} input string
 * @param {boolean} block if the attribute should be parsed from the next line(after line break)
 * @returns {object} - nodeAttributes
 * @returns {string} - nodeAttributes.className
 * @returns {string} - nodeAttributes.children - modified string without attributes
 *
 */
export const parseAttributesFromString = (string, block = false) => {
  if (string instanceof String || typeof string === "string") {
    // Search for "{...}" brackets
    const attrRe = block ? /\n{(.*?)}/ : / {(.*?)}/;
    let attrString = string.match(attrRe);

    if (!attrString) return { children: string };

    let parsedAttributes = parseAttr(attrString[1]).prop;

    // Since parseAttr returns object with "class" key, we need to fix it
    const { class: classNamesArr, ...otherProps } = parsedAttributes;

    return Object.assign(otherProps, {
      className: classNamesArr && classNamesArr.join(" "),
      children: string.substring(0, attrString.index), // extract attributes definition and return clean string
    });
  }
  return string;
};
