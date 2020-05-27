import * as React from "react";
import {ILieProps} from "../../Interfaces/Interfaces";
import "./Line.css";


const Line = (props: ILieProps) => {
    const rangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputs({...props.inputs, [event.target.name]: +event.target.value})
    };

    const reversHandler = (isRevers: boolean) => {
        props.setInputs({...props.inputs, reversLine: isRevers, lineRange:0})
    };

    const css: string = `.css-geneartor-element{
    background: #369;
    transform-origin: left top; 
    transform: skewY(${!props.inputs.reversLine ? "-" : "+"}${props.inputs.lineRange}deg)
    }`;

    const html: string = `<div className="css-geneartor-element"> </div>`;

    return (
        <div className="line-container">
            {props.fild === "settings" ?
                <>
                    <input className="input-reversed" type="checkbox" checked={props.inputs.reversLine} onChange={() => reversHandler(!props.inputs.reversLine)}/>
                    <input type="range" name="lineRange" step="1" min="0" max="20" value={props.inputs.lineRange} onChange={(event: React.ChangeEvent<HTMLInputElement>) => rangehandler(event)}/>
                </> :
                props.fild === "css" ? <textarea defaultValue={css}></textarea> : <div className="html_value">{html}</div>
            }
        </div>
    )
};
export default Line