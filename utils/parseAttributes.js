const parseAttr = require("md-attr-parser");

/**
 * Parse attributes from children, respecting its type
 *
 * @param {node} children
 * @returns {object} - nodeAttributes
 *
 */
export const parseAttributesFromChildren = (children) => {
  if (Array.isArray(children)) {
    return children.map((child) => processChildStrings(child));
  }
  return processChildStrings(children);
};

/**
 * Process only string nodes and return the rest unchanged
 *
 * @param {node}
 * @returns {object} - nodeAttributes object
 * @returns {node} - node
 *
 */
const processChildStrings = (node) => {
  if (node instanceof String || typeof node === "string") {
    return parseAttributesFromString(node) || { children: node };
  }
  return node;
};

/**
 * Parse attributes from string
 *
 * @param {string} input string
 * @returns {object} - nodeAttributes
 * @returns {string} - nodeAttributes.className
 * @returns {string} - nodeAttributes.children - modified string without attributes
 *
 */
const parseAttributesFromString = (string) => {
  // Search for "{...}" brackets
  let attrString = string.match(/ {(.*?)}/);

  if (!attrString) return;

  let parsedAttributes = parseAttr(attrString[0]).prop;

  // Since parseAttr returns object with "class" key, we need to fix it
  const { class: classNamesArr, ...otherProps } = parsedAttributes;

  return Object.assign(otherProps, {
    className: classNamesArr && classNamesArr.join(" "),
    children: string.substring(0, attrString.index), // extract attributes definition and return clean string
  });
};
