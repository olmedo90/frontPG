import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api_accounts } from "../../../apiURL";
import { TreeViewsAccounts } from "../TreeViewsAccounts";

export const ChartOfAccount = () => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    const getAccounts = async () => {
      try {
        await fetch(api_accounts.root)
          .then((res) => res.json())
          .then((data) => {
            setAccounts(data);
          });
      } catch (error) {
        console.log("🚀 ~ file: index.jsx:18 ~ getAccounts ~ error:", error);
      }
    };
    getAccounts();
  }, []);

  function createChartOfAccountsTree(input) {
    const accounts = {};
    const top = {};
    for (const { code, acount_name, id } of input) {
      let account = {
        code,
        acount_name,
        id,
        children:[],
      };
      
      let parentId = code.slice(0,-1);
      let parent = accounts[parentId];
      if (parent) {
        parent.children[code] = account;
      } else {
        top[code] = account;
      }
      accounts[code] = account;
    }
    return (top);
  }

  return (
    <div className="content-home ">
      <TreeViewsAccounts treeAccounts={createChartOfAccountsTree(accounts)}/>
      <button onClick={() => createChartOfAccountsTree(accounts)}>
        Mi proyecto
      </button>
    
    </div>
  );
};

