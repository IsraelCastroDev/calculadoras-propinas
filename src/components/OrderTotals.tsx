import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

function OrderTotals({ order, tip, placeOrder }: OrderProps) {
  const subtotalAmount = useMemo(() => {
    return order.reduce((total, item) => total + item.quantity * item.price, 0);
  }, [order]);

  const tipAmount = useMemo(() => {
    return subtotalAmount * tip;
  }, [subtotalAmount, tip]);

  const totalAmount = useMemo(() => {
    return subtotalAmount + tipAmount;
  }, [subtotalAmount, tipAmount]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Propinas:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black text-white font-extrabold py-2 text-lg uppercase 
                  disabled:opacity-50"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar orden
      </button>
    </>
  );
}

export default OrderTotals;
