import {createContext, useCallback, useContext, useEffect, useState} from "react";
import products from "../products";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [value, setValue] = useState({
        money: 100,
        total: 0,
        baskets: [],
        products,
        rich_people: [
            {
                id: 1,
                name: 'Elon Musk',
                money: 277000000000,
                image: require('../assets/img/elon-musk.jpg')
            },
            {
                id: 2,
                name: 'Jeff Bezos',
                money: 195000000000,
                image: require('../assets/img/jeff-bezos.jpg')
            },
            {
                id: 3,
                name: 'Bernard Arnault',
                money: 176000000000,
                image: require('../assets/img/bernard-arnault.jpg')
            },
            {
                id: 4,
                name: 'Bill Gates',
                money: 139000000000,
                image: require('../assets/img/billgates.jpg')
            },
            {
                id: 5,
                name: 'Larry Page',
                money: 130000000000,
                image: require('../assets/img/larry-page.jpg')
            },
            {
                id: 6,
                name: 'Mark Zuckerberg',
                money: 128000000000,
                image: require('../assets/img/mark-zuckerberg.jpg')
            },
            {
                id: 7,
                name: 'Sergey Brin',
                money: 125000000000,
                image: require('../assets/img/sergey-brin.jpg')
            },
            {
                id: 8,
                name: 'Steve Ballmer',
                money: 122000000000,
                image: require('../assets/img/steve-ballmer.jpg')
            },
            {
                id: 9,
                name: 'Larry Ellison',
                money: 109000000000,
                image: require('../assets/img/larry-ellison.jpg')
            },
            {
                id: 10,
                name: 'Warren Buffet',
                money: 109000000000,
                image: require('../assets/img/warren-buffet-.jpg')
            }
        ],
        person: {}
    });

    const handleSetValue = (key, newValue) => {
        setValue(prevState => ({
            ...prevState,
            [key]: newValue
        }))
    }

    const changeRichPerson = (id) => {
        handleSetValue('person', value.rich_people.find(i => parseFloat(i.id) === parseFloat(id)) || {})
    }

    const fetchRichPerson = useCallback(() => {
        handleSetValue('person', value.rich_people.sort(() => .5 - Math.random())[0])
    }, [value.rich_people])

    useEffect(() => {
        handleSetValue('total', value.baskets.reduce((acc, item) => {
            return acc + (item.amount * (products.find(i => i.id === item.id).price))
        }, 0))
    }, [value.baskets])

    const values = {
        ...value,
        handleSetValue,
        fetchRichPerson,
        changeRichPerson
    }

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);
