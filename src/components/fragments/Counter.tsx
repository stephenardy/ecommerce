type Tcounter = {
  number?: number;
};

const Counter = (props: Tcounter) => {
  const { number } = props;
  return (
    <div className="flex flex-row font-bold px-2">
      <button className="cursor-pointer px-2">&minus;</button>
      <span className="bg-white px-4 py-2 font-normal">{number}</span>
      <button className="cursor-pointer px-2">&#43; </button>
    </div>
  );
};

export default Counter;
