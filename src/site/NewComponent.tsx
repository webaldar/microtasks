import React from 'react';
import {FilterType} from "../App";

type NewComponentType = {
    onClickFilterHandler: ()=>void
}

export const NewComponent = (props: FilterType, NewComponentType) => {
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

