import React,{createContext,useState} from 'react';
const AppContext=createContext();

const AppProvider=({children})=>{
    const [page,setPage]=useState(false);
    const updateState=(newValue)=>{
        setPage(newValue);
    };
    return (
        <AppContext.Provider value={{page,updateState}}>
            {children}
        </AppContext.Provider>
    )

}
export { AppProvider, AppContext };