import React from "react";
import { MenuList } from "./MenuList";
import { MenuItemType } from "../../App";
import "./styles.css";

export function TreeMenu(props: { menus: MenuItemType[] }) {
  return (
    <div className="tree-view-container">{<MenuList list={props.menus} />}</div>
  );
}
