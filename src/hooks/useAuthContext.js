import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw Error( ' UseAuthContext must be used inside an AuthContext Provider'
        )
    }
    return context
}