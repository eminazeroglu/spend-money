import React from 'react';
import {useAppContext} from "../../contexts/AppContext";

function ProductItem({item}) {

    const {baskets, handleSetValue, person, total} = useAppContext();

    const money = person?.money;

    const basketCount = baskets.find(i => i.id === item.id);

    const addBasket = () => {
        const checkBasket = baskets.find(i => i.id === item.id);
        if (checkBasket) {
            checkBasket.amount += 1;
            handleSetValue('baskets', [
                ...baskets.filter(i => i.id !== item.id),
                checkBasket
            ])
        }
        else {
            handleSetValue('baskets', [
                ...baskets, {
                    id: item.id,
                    amount: 1,
                    title: item.title
                }
            ]);
        }
    }

    const removeBasket = () => {
        const checkBasket = baskets.find(i => i.id === item.id);
        const newBaskets = baskets.filter(i => i.id !== item.id);
        if (checkBasket?.amount > 1) {
            checkBasket.amount -= 1;
            handleSetValue('baskets', [
                ...newBaskets,
                checkBasket
            ])
        }
        else {
            handleSetValue('baskets', newBaskets);
        }
    }

    return (
        <div className="flex flex-col border border-gray-100 bg-white shadow-lg rounded">
            <figure className="aspect-square flex flex-1 items-center justify-center p-4">
                <img src={item.image} alt={item.title}/>
            </figure>
            <div className="text-center font-medium text-lg">{item.title}</div>
            <div className="text-center font-medium text-indigo-500">$ {new Intl.NumberFormat().format(item.price)}</div>
            <div className="flex justify-center mt-5 pt-5 border-t border-gray-200 p-4 space-x-2">
                <button
                    onClick={removeBasket}
                    disabled={!basketCount?.amount}
                    className="flex-1 h-8 items-center justify-center text-white rounded font-medium bg-pink-500 disabled:bg-pink-500/60"
                >
                    Sat
                </button>
                <span className="flex-1 text-center flex h-8 items-center justify-center border border-gray-200 rounded">{basketCount?.amount || 0}</span>
                <button
                    onClick={addBasket}
                    disabled={(total + item.price) > money}
                    className="flex-1 h-8 items-center justify-center bg-green-500 text-white rounded font-medium disabled:bg-green-500/60"
                >
                    Al
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
