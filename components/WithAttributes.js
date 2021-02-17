import { parseAttributesFromProps } from "../utils/parseAttributes";
const WithAttributes = ({ as, ...props }) => {
  const Component = as || "div";
  return <Component {...parseAttributesFromProps(props)} />;
};

export default WithAttributes;
