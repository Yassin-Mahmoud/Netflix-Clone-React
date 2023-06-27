import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

interface AuthContextInterface {
    user: User | null;
    signUp: (email: string, password: string) => void;
    logIn: (email: string, password: string) => void;
    logOut: () => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextInterface>({
    user: null,
    signUp: () => null,
    logIn: () => null,
    logOut: () => Promise.resolve(),
});

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);

    const signUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, "users", email), {
            savedMovies: [],
        });
    };
    const logIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe;
        };
    });

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
