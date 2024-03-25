import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

function MenuItems({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 w-full flex justify-between p-3
                 hover:bg-teal-200"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}

export default MenuItems;
