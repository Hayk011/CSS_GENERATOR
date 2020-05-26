import React from 'react';
import Line from "./Components/LIne/Line";
import {generators, filds} from "./GeneratorTypes/GeneratorTypes";
import {IGenerate, IInputs, IFilds} from "./Interfaces/Interfaces";
import './App.css';

function App() {
    const [fild, setFild] = React.useState<string>("settings");
    const [type, setType] = React.useState<string>("line");
    const [revers, setRevers] = React.useState<boolean>(false);
    const [inputs, setInputs] = React.useState<IInputs>({
        range: 0,
        reversLine: false
    });

    const fildsHandler = (activ: string) => {
        setFild(activ);
    };

    const typehandler = (type: string) => {
        setType(type);
    };

    const leftLineStyles: React.CSSProperties = {
        transformOrigin: inputs.reversLine ? "top right" : "top left",
        transform: inputs.reversLine ? `skewY(${inputs.range}deg)` : `skewY(-${inputs.range}deg)`
    };
    console.log(fild);
    return (
        <div className="first-container">
            <div style={leftLineStyles} className="css-geneartor-element"></div>
            <div className="generator-controller">
                <div className="filds-container">

                    {filds.map((item: IFilds) => (
                        <span onClick={() => fildsHandler(item.title)} key={item.id}
                              className={fild === item.title ? "activ-fild" : ""}>{item.title.toUpperCase()}</span>
                    ))}
                </div>
                <div className="controller-input-div">
                    {
                        type === "line" ?
                            <Line inputs={inputs} setInputs={setInputs} style={leftLineStyles} fild={fild}/> : null
                    }

                </div>
                <div className="hidden">

                </div>

            </div>
            <ul className="view-containr">
                {generators.map((type: IGenerate) => (
                    <li onClick={() => typehandler(type.name)} key={type.id}>{type.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
