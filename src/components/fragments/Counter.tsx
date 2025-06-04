type Tcounter = {
  number: number;
  setQuantity: (qty: number) => void;
  removeItem: () => void;
};

const Counter = (props: Tcounter) => {
  const { number, setQuantity, removeItem } = props;

  const decrement = () => {
    if (number <= 1) {
      removeItem();
    } else {
      setQuantity(Math.max(number - 1, 0));
    }
  };

  const increment = () => {
    if (setQuantity) {
      setQuantity(number + 1);
    }
  };

  return (
    <div className="flex flex-row font-bold px-2">
      <button onClick={decrement} className="cursor-pointer px-2">
        &minus;
      </button>
      <input
        disabled
        type="text"
        value={number}
        className="bg-white py-2 font-normal w-8 text-center"
      />

      <button onClick={increment} className="cursor-pointer px-2">
        &#43;
      </button>
    </div>
  );
};

export default Counter;
