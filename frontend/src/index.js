import React from "react";
import { ShirtContextProvider } from "./services/shirt.context";
import ShirtScreen from "./shirt.screen";

export const Index = () => {
    return (
        <ShirtContextProvider>
            <ShirtScreen />
        </ShirtContextProvider>
    )
}
