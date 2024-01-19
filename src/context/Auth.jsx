import { createContext, useContext } from "react";
import { toast } from "react-toastify";
const AuthContext = createContext ();

export const AuthProvider = ({children})=>{

    //const [isAuth, setisAuth] = useState(false);

    const [isAuth, setIsAuth]= useLocalStorage('Auth', false)

    const login = ()=> {
        setisAuth(true);
        toast.success('Successfully logged In !')
    };
    const logout = ()=>{
        setisAuth(false);
        toast.success('Successfully logged Out !')
    };

    return (<AuthContext.Provider value={{isAuth, login, logout}}> 
     {children}
    </AuthContext.Provider>
    );
};
    export const useAuth = ()=>{
        const data = useContext(AuthContext)
        return data;
    }