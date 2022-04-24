import React from 'react';
import {useAppContext} from "../../contexts/AppContext";

function Info() {
    const {total, person, rich_people, changeRichPerson} = useAppContext();
    const totalPrice = person?.money - total;
    return (
        <>
            {person?.id && (
                <div className="bg-white p-10 space-y-3 flex flex-col items-center justify-center mt-5">
                    <figure className="w-28 h-28 rounded-full overflow-hidden">
                        <img src={person?.image} alt={"Demo"} className="w-full h-full object-cover"/>
                    </figure>
                    <p className="text-2xl font-medium">{person.name}</p>
                    <div>
                        <select onChange={e => changeRichPerson(e.target.value)} className="border border-gray-200 h-10 px-2">
                            {rich_people.length > 0 && rich_people.map((i, index) => (
                                <option value={i.id} defaultValue={person.id} key={index}>{i.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
            <div className="sticky top-0 my-5 bg-green-500 p-4 rounded flex items-center justify-center font-medium text-2xl text-white">
                $ {new Intl.NumberFormat().format(totalPrice)}
            </div>
        </>
    );
}

export default Info;
