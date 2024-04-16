import React from 'react';
import {FilterType} from "../App";

type currentMoneyType = {
    banknots: string
    value: number
    number: string
}
type NewComponentType = {
    onClickFilterHandler: (filter: FilterType)=>void
    currentMoney: Array<currentMoneyType>
}

export const NewComponent = ({onClickFilterHandler, currentMoney}:  NewComponentType) => {
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => onClickFilterHandler('all')}>All</button>
                <button onClick={() => onClickFilterHandler('ruble')}>Ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>Dollar</button>
            </div>
        </>
    );
};

