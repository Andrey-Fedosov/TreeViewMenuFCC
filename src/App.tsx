import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TreeMenu } from "./components/treeMenu/TreeMenu";
import menus from "./components/treeMenu/data";

export type MenuItemType = {
  label: string;
  to: string;
  children?: MenuItemType[];
};

function App() {
  return (
    <div className="App">
      <TreeMenu menus={menus} />
    </div>
  );
}

export default App;
