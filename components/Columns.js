const Columns = ({ children, col }) => {
  const COLS = { 2: "two", 3: "three", 4: "four" };
  return <div className={`columns ${COLS[col]}`}>{children} </div>;
};

export default Columns;
