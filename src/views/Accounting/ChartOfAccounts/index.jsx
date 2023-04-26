import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { api_accounts } from '../../../apiURL';



export const ChartOfAccount = () => {
  const [accounts, setAccounts]=useState([]);

  useEffect(()=>{
    const getAccounts = async()=>{
    try {
      await fetch(api_accounts.root)
      .then((res)=>res.json())
      .then((data)=>{
        setAccounts(data)
      })
    } catch (error) {
      console.log("🚀 ~ file: index.jsx:18 ~ getAccounts ~ error:", error)
    } 
  }
  getAccounts();
  },[])
  function createChartOfAccountsTree(input) {
    //Divida la entrada por línea e identifique inmediatamente
    // el prefijo numérico y excluye el punto final
    const lines = input.matchAll(/(\d+)[ .:]+(.*?)\.?[ ]*$/gm);
    //Crear un objeto para almacenar todas las cuentas
    const accounts = {};
    // ......y uno para las cuentas de nivel superior
    const top = {};
    let cont = 0
    // Loop through each line, grabbing the parts
    for (const [,code, id, accountName] of input) {
      // Bucle a través de cada línea, agarrando las partes
      let account = {
        code,        
        accountName,
        id,
        children: {}
      };
      console.log("🚀 ~ file: index.jsx:40 ~ createChartOfAccountsTree ~ account:", account)
      // Comprobar si la cuenta es hija de una cuenta existente
      let parentId = id.slice(0, -1);
      console.log("🚀 ~ file: index.jsx:47 ~ createChartOfAccountsTree ~ parentId:", parentId)
      let parent = accounts[parentId];
      console.log("🚀 ~ file: index.jsx:49 ~ createChartOfAccountsTree ~ parent:", parent)
      if (parent) {
        // Si la cuenta tiene un padre, agréguelo como hijo
        parent.children[id] = account;
      } else {
        // Si la cuenta no tiene un padre, es una cuenta de nivel superior
        top[id] = account;
      }
      // Registrar todas las cuentas:
      accounts[id] = account;
    }
    return console.log(top);
  }

  const input = `1: Comptes de capitaux.
10. Capital et Réserves.
101. Capital.
1011. Capital souscrit - non appelé.
1012. Capital souscrit - appelé, non versé.
1013. Capital souscrit - appelé, versé.
10131. Capital non amorti.
10132. Capital amorti.
1018. Capital souscrit soumis à une réglementation particulière.
105. Ecarts de réévaluation.
108. Compte de l'exploitant.

`;
  return (
    <div className='bg-info'>ChartOfAccount

    <button onClick={()=>createChartOfAccountsTree(input)}>genearra</button>

    </div>
  )
}


