import React, {useContext} from "react";
import { CounterContext } from "./CounterContext";

function FComponent(){
    const value = useContext(CounterContext);
    return(

        <div className="border">
            <h1>Function Component</h1>
            <h2></h2>
            <h2>{value}</h2>
            <hr></hr>
            <Fchild />
        </div>
    );
}

const Fchild = () =>{
    const value = useContext(CounterContext);
    return(
        <div className="border">
            <h1>Function Child Component</h1>
            <h2></h2>
            <h2>{value}</h2>
        </div>
    );
};

export default FComponent