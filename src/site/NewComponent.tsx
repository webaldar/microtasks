import React from 'react';

type StudentsType = {
    id: number
    name: string
    age: number
}
type NewComponentType = {
    students: Array<StudentsType>
}
export const NewComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <table>
            {topCars.map((auto, index)=>{
                return(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{auto.manufacturer}</td>
                        <td>{auto.model}</td>
                    </tr>
                )
            })}
        </table>
    );
};

