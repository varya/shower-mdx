const Code = ({ children, ...props }) => {
  return (
    <pre>
      {children.map((node) =>
        node?.props?.originalType === "code" ? node : <code>{node}</code>
      )}
    </pre>
  );
};

export default Code;
