'use client'
import { Provider } from "react-redux";
import {ReactNode} from "react";
import store from "@/app/store/store";

export interface ProviderProps{
    children: ReactNode
}

export default function Providers({children}: ProviderProps){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}