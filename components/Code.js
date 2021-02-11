const Code = ({ children }) => {
  return (
    <pre>
      {children.map((node, index) => {
        let codeNode = node?.props?.originalType === "code" ? node : null;
        return (
          <code
            key={"codeline" + index}
            className={codeNode && codeNode?.props?.className}
          >
            {codeNode ? codeNode.props.children : node}
          </code>
        );
      })}
    </pre>
  );
};

export default Code;
