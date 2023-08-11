import React, { useContext } from "react";

export const UserContext = React.createContext({ user: undefined, setUser: () => { } });


export const useUserContext = () => {
    return useContext(UserContext);
}