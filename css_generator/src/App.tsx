import React from 'react';
import Line from "./Components/LIne/Line";
import Border from "./Components/Border/Border";
import {generators, filds} from "./GeneratorTypes/GeneratorTypes";
import {IGenerate, IInputs, IFilds} from "./Interfaces/Interfaces";
import './App.css';

function App() {
    const [fild, setFild] = React.useState<string>("settings");
    const [type, setType] = React.useState<string>("line");
    const [revers, setRevers] = React.useState<boolean>(false);
    const [isHidden, setIsHidden] = React.useState<boolean>(false);
    const [inputs, setInputs] = React.useState<IInputs>({
        lineRange: 0,
        reversLine: false,
        borderRange: 0,
        reversBorder: false
    });

    const fildsHandler = (activ: string) => {
        setFild(activ);
    };

    const typehandler = (type: string) => {
        setType(type);
    };
    const hiddenHandler = (hidden: boolean) => {
        setIsHidden(hidden)
    };

    const leftLineStyles: React.CSSProperties = {
        transformOrigin: inputs.reversLine ? "top right" : "top left",
        transform: inputs.reversLine ? `skewY(${inputs.lineRange}deg)` : `skewY(-${inputs.lineRange}deg)`
    };
    const borderRadius: React.CSSProperties = inputs.reversBorder ?
        {
            borderTopRightRadius: `${inputs.borderRange}%`,
            borderTopLeftRadius: `${inputs.borderRange}%`
        } :
        {
            borderBottomRightRadius: `${inputs.borderRange}%`,
            borderBottomLeftRadius: `${inputs.borderRange}%`
        };

    console.log(fild);
    console.log(inputs);
    return (
        <div className="first-container">
            <div style={type === "line" ? leftLineStyles : type === "border" ? borderRadius : {}}
                 className="css-geneartor-element"></div>
            <div className={`generator-controller ${isHidden && "close-controller"}`}>
                <div className="filds-container">
                    {filds.map((item: IFilds) => (
                        <span onClick={() => fildsHandler(item.title)} key={item.id}
                              className={fild === item.title ? "activ-fild" : ""}>{item.title.toUpperCase()}</span>
                    ))}
                </div>
                <div className={`controller-input-div`}>
                    {
                        isHidden ? null :
                            <>
                                {
                                    type === "line" ?
                                        <Line inputs={inputs} setInputs={setInputs} fild={fild}/> : type === "border" ?
                                        <Border inputs={inputs} setInputs={setInputs} fild={fild}/> : null
                                }
                            </>
                    }

                </div>
                <div className="hidden">
                    <p><span className={`arrow ${isHidden ? "open" : "close"} `}/> <span
                        onClick={() => hiddenHandler(!isHidden)} className="hidden-btn">Hidden</span></p>
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
