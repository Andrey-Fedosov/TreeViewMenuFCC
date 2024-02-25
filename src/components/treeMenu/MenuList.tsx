import { MenuItemType } from "../../App";
import { MenuItem } from "./MenuItem";

export function MenuList(props: { list: MenuItemType[] }) {
  return (
    <ul className="menu-list-container">
      {props.list && props.list.length
        ? props.list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
