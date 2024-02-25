import React, { useState } from "react";
import { MenuItemType } from "../../App";
import { MenuList } from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

export function MenuItem(props: { item: MenuItemType }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<any>({});

  const toggleChildHandler = (getCurrentLabel: any) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };

  console.log(displayCurrentChildren);

  return (
    <div>
      <li>
        <div className="menu-item">
          <p>{props.item.label}</p>
          {props.item &&
          props.item.children &&
          props.item.children.length > 0 ? (
            <span onClick={() => toggleChildHandler(props.item.label)}>
              {displayCurrentChildren[props.item.label] ? (
                <FaMinus color="#fff" size={25} />
              ) : (
                <FaPlus color="#fff" size={25} />
              )}
            </span>
          ) : null}
        </div>

        {props.item &&
        props.item.children &&
        props.item.children.length > 0 &&
        displayCurrentChildren[props.item.label] ? (
          <MenuList list={props.item.children} />
        ) : null}
      </li>
      <div></div>
    </div>
  );
}
