import { FC, Fragment, useState, useCallback } from "react";

import "./style.css";

export const App: FC<{ items: any[] }> = ({ items = [] }) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleItemClick = useCallback((item) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter(selectedItem => selectedItem !== item)
        : [...prevSelectedItems, item]
    );
  }, []);

  const handleSelectAll = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItems(event.target.checked ? items : []);
  }, [items]);


  return (
    <Fragment>
      <label>
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={selectedItems.length === items.length}
        />
        Select All
      </label>
      {selectedItems.length > 0 && (
        <div className="App__selectedItem">
          Selected: {selectedItems.map((item) => item.name).join(", ")}
        </div>
      )}
      <ul className="List">
        {items.map((item) => (
          <li
            key={item.name}
            className={`List__item List__item--${item.color} ${
              selectedItems.includes(item) ? "List__item--selected" : ""
            }`}
            onClick={() => handleItemClick(item)}
          >
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleItemClick(item)}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
