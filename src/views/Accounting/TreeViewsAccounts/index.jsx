import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Icon } from "../../../utils/Icon";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const data = {
  id: "1",
  name: "Parent",
  children: [
    {
      id: "2",
      name: "Child - 1",
    },
    {
      id: "3",
      name: "Child - 3",
      children: [
        {
          id: "4",
          name: "Child - 4",
        },
      ],
    },
  ],
};

export const TreeViewsAccounts = ({ treeAccounts }) => {
    console.log("🚀 ~ file: index.jsx:32 ~ TreeViewsAccounts ~ treeAccounts:", treeAccounts[2])

  const renderTree = (nodes) => (
      <TreeItem key={nodes?.code} nodeId={nodes?.code} label={nodes?.acount_name}>
        {Array.isArray(nodes?.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
          
      </TreeItem>
  );
  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<Icon styles="" iconName={faChevronDown} />}
      defaultExpanded={["101"]}
      defaultExpandIcon={<Icon style="" iconName={faChevronRight} />}
    > 
      {renderTree(treeAccounts[4])}
    </TreeView>
  );
};
