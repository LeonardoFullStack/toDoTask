import React, { useReducer } 
from "react";

const actions = {
    getLocalData:'getLocalData',
    setLocalData:'setLocalData'
}

export const localStorageReducer = (state, action) => {
  
    switch (action.type) {
      case actions.getLocalData:
        console.log('paso')
        const value = localStorage.getItem(action.key);
        console.log(JSON.parse(value))
        return JSON.parse(value) || [];
      case actions.setLocalData:

        const currentValue = JSON.parse(localStorage.getItem(action.key)) || [];

        currentValue.push(action.payload); // Agrego el nuevo valor al array
        
        localStorage.setItem(action.key, JSON.stringify(currentValue)); // Guardo el nuevo valor en el localStorage
        return currentValue;
      default:
        return state;
    } 
  };