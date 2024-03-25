import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderProps = {
  order: OrderItem[];
  removeItem: (id: number) => void;
};

function OrderContents({ order, removeItem }: OrderProps) {
  return (
    <>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        <ul>
          {order.map((o) => (
            <li
              key={o.id}
              className="flex justify-between items-center 
                        border-t border-gray-700 py-4 last-of-type:border-b last-of-type:border-slate-700"
            >
              <div>
                <p>
                  {o.name} - {formatCurrency(o.price)}
                </p>
                <p className="font-black">
                  Cantidad: {o.quantity} -{" "}
                  {formatCurrency(o.price * o.quantity)}
                </p>
              </div>

              <button onClick={() => removeItem(o.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default OrderContents;
