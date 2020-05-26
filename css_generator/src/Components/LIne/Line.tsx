import * as React from "react";
import {ILieProps} from "../../Interfaces/Interfaces";
import "./Line.css";


const Line = (props: ILieProps) => {
    const rangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputs({...props.inputs, [event.target.name]: event.target.value})
    };
    const reversHandler = (isRevers: boolean) => {
        props.setInputs({...props.inputs, reversLine: isRevers})
    };
    console.log(props.inputs);

    let style = JSON.stringify({...props.style, background: "#369", height: "50vh", transaction: "all 1s"});

    return (
        <div className="line-container">
            {props.fild === "settings" ?
                <>
                    <input type="checkbox" checked={props.inputs.reversLine}
                           onChange={() => reversHandler(!props.inputs.reversLine)}/>
                    <input type="range" name="range" step="1" min="0" max="20" value={props.inputs.range}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => rangehandler(event)}/>
                </> : props.fild === "css" ? <textarea value = {style}></textarea> :
                    <div className="generator-value">html</div>

            }
        </div>
    )
};
export default Line