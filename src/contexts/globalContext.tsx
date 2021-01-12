import React, { createContext, useContext, useState } from 'react';

interface IGlobalContextProps {
    nome: string;
    setNome: React.Dispatch<React.SetStateAction<string>>;
};

const Context = createContext({} as IGlobalContextProps);

const GlobalContextProvider: React.FC = ({ children }) => {
    const [nome, setNome] = useState('Fernando');

    return (
        <Context.Provider value={{ nome, setNome }}>
            {children}
        </Context.Provider>
    );
};

export {
    GlobalContextProvider,
    Context
};

const useGlobalContext = () => {
    const context = useContext(Context);
    return context;
};

export default useGlobalContext;