const Blockquote = ({ children, caption }) => {
  return (
    <figure>
      <blockquote>
        <p>{children}</p>
      </blockquote>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Blockquote;
