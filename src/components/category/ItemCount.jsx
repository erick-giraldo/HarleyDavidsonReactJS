import { useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador < stock) setContador((prev) => prev + 1);
  };

  return (
    <>
      <div className="flex gap-4 count-center">
        <button
          onClick={() => {
            setContador((prev) => prev - 1);
          }}
          disabled={contador === initial}
          className='min-max-count'
        >
          -
        </button>
        <span className="font-poppins font-bold ">{contador}</span>
        <button
          onClick={aumentarContador}
          disabled={contador >= stock}
          className='min-max-count'

        >
          +
        </button>
      </div>
      <div>
        <Button
          variant="outlined"
          color="success"
          onClick={() => onAdd(contador)}
          disabled={contador === 0}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};
export default ItemCount;
