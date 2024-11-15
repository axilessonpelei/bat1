import { createContext } from "react";

const Context = createContext({});

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {


    const values = {

    };

    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, Context };