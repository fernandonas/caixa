import React from 'react';
import useGlobalContext from '../../contexts/globalContext';

const Main: React.FC = () => {
    const info = useGlobalContext();

    return (
        <>
            <h1>Olá: {info.nome} </h1>
            <button onClick={() => info.setNome('Hahahhah')}>Mudar Nome</button>
        </>
    );
};

export default Main;