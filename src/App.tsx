import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./site/Button";


const students = [
    {id:0, name: 'Jame', age: 8},
    {id:1, name: 'Robert', age: 18},
    {id:2, name: 'John', age: 28},
    {id:3, name: 'Michael', age: 48},
    {id:4, name: 'Tomas', age: 20},
    {id:5, name: 'Li', age: 24},
    {id:6, name: 'Franck', age: 15},
]

function App() {
    const ButtonFoo1 = (subscriber: string, age: number)=>{
        console.log(subscriber, age)
    }
    const ButtonFoo2 = (subscriber: string)=>{
        console.log(subscriber)
    }
    const StupidButton = ()=>{
        console.log('Stupid Button')
    }

    return (
        <div className={'App'}>
            <Button name={"MyYouTubeChanel-1"} callBack={()=>ButtonFoo1('Ildar', 49)}/>
            <Button name={"MyYouTubeChanel-2"} callBack={()=>ButtonFoo2('Ivan')}/>
            <Button name={"Stupid Button"} callBack={StupidButton}/>

        </div>
    );
}

export default App;
