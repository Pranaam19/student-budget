import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const AuthUsersContext = createContext({
    authUser: null,
    isLoading: true
});

export default useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const onAuthStateChanged = async (user) => {
        setIsLoading(true);
        if (!user) {
            setAuthUser(null);
            setIsLoading(false);
            return;
        }
        setAuthUser({
            uid: user.uid,
            email: user.email
        });
        setIsLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, AuthStateChanged);
        return () => unsubscribe();
    
    }, []);

    return { authUser, isLoading };
};

export function AuthUserProvider({ children}){
    const auth = useFirebaseAuth();
    return <AuthUsersContext.Provider value={auth}>{children}</AuthUsersContext.Provider>
}

export const useAuth = () => useContext(AuthUsersContext);