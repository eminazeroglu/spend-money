import Header from "./components/header/Header";
import ProductContent from "./components/product/ProductContent";
import React, {useEffect} from "react";
import Info from "./components/info/Info";
import {useAppContext} from "./contexts/AppContext";
import Basket from "./components/basket/Basket";

function App() {

    const {fetchRichPerson} = useAppContext();

    useEffect(() => {
        fetchRichPerson();
    }, [fetchRichPerson])

    return (
        <div className="h-full overflow-y-auto flex flex-col pb-10">
            <Header/>
            <div className="w-[900px] mx-auto ">
                <Info/>
                <ProductContent/>
                <Basket/>
            </div>

        </div>
    );
}

export default App;
