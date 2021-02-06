const Cover = ({ children, src, alt }) => {
  return (
    <figure>
      <img className="cover" src={src} alt={alt} />
      <figcaption className="copyright right white">{children}</figcaption>
    </figure>
  );
};

export default Cover;
