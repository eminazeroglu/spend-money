import React from 'react';
import {useAppContext} from "../../contexts/AppContext";

function Basket(props) {
    const {baskets, products, total} = useAppContext();

    return (
        <>
            {baskets.length > 0 && (
                <div className="flex flex-col bg-white space-y-3 shadow-lg mt-5 p-4 rounded items-center justify-center">
                    <h3 className="font-medium text-2xl">Your Receipt</h3>
                    <div className="flex flex-col items-center justify-center space-y-2 border-b border-black pb-2 ">
                        {baskets.map((i, index) => (
                            <div className="grid grid-cols-[170px_45px_75px]" key={index}>
                                <div>{i.title}</div>
                                <div className="text-center">x{i.amount}</div>
                                <div className="text-right">${new Intl.NumberFormat('en', {notation: 'compact'}).format(i.amount * (products.find(product => product.id === i.id)?.price))}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center w-[290px] text-lg font-medium">
                        <span>TOTAL</span>
                        <span>${new Intl.NumberFormat('en', {notation: 'compact'}).format(total)}</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default Basket;
