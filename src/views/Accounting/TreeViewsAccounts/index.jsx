

import * as React from "react";
import { Icon } from "../../../utils/Icon";
import {TreeView, TreeItem} from '@mui/lab';
import {
  faChevronDown,
  faChevronRight,
  faSquareCaretRight,
  faSquareCaretDown,
  faSquare
} from "@fortawesome/free-solid-svg-icons";

const Items = ({code, name})=>{
  return(
    <div className="row  d-flex align-items-center my-1">
      <span className="col-auto ">
      <b className="mx-3">{code}</b>
      {name}
      </span>
      
    </div>
  )
}

const renderTree = tree => {
  return <TreeItem 
    key={tree.id} 
    nodeId={tree.code} 
    label={<Items code={tree.code} name={tree.acount_name} />} 

>
      
    {tree.children && tree.children.map((node)=>renderTree(node))}
  </TreeItem>


}


export const  TreeViewsAccounts =  ({ treeAccounts }) => {
  return (
<TreeView 
   defaultCollapseIcon={<Icon style="iconAccounts" iconName={faChevronDown} />}
   defaultExpandIcon={<Icon style="iconAccounts" iconName={faChevronRight} />} 
   sx={{ height:500,width:"100%" ,flexGrow: 1,  overflowY: 'auto' }}
>
  {treeAccounts.map(item => renderTree(item))}
</TreeView>
  );
};

