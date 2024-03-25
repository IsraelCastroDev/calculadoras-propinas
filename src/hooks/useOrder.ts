import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]); //<tipo de dato> generics, en este caso OrderItem
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
      console.log(order);
    }
  };

  const removeItem = (id: number) => {
    // filtra todas las ordenes que no sea igual al id => por consecuencia simula un delete
    const updatedOrder = order.filter((orderItem) => orderItem.id !== id);
    setOrder(updatedOrder);
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return { addItem, order, removeItem, tip, setTip, placeOrder };
};
