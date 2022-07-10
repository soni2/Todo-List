import React from 'react'

function useLocalStorage (itemName, initialValue){

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const todoLocal = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!todoLocal) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorage.getItem(itemName))
        }
  
        saveItem(parsedItem);
        setLoading(false);
        } catch(error) {
          setError(error)
        }
        
      },2000)
    },initialValue)
    
    const saveItem = (newItem) =>{
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem); 
  
      } catch (error) {
        setError(error);
      }
    }
  
    return {
        item,
        saveItem,
        loading,
        error
    }
  
  }

export { useLocalStorage };