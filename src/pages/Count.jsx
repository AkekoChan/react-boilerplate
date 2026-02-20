import { useStore } from "@/hooks/useStore.jsx";

const Count = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button className="btn-primary" onClick={increment}>
          Increment
        </button>
        <button className="btn-primary" onClick={decrement}>
          Decrement
        </button>
      </div>
      <span>Count: {count}</span>
    </div>
  );
};

export default Count;
