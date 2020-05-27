import * as React from "react";
import {ILieProps} from "../../Interfaces/Interfaces";


const Border = (props: ILieProps) => {
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputs({...props.inputs, [event.target.name]: +event.target.value})
    };

    const reverseHandler = (isRevers: boolean) => {
        props.setInputs({...props.inputs, reversBorder: isRevers})
    };

    return (
        <div className="border-container">
            <input
                className="input-reversed"
                type="checkbox"
                checked={props.inputs.reversBorder}
                onChange={() => {
                    reverseHandler(!props.inputs.reversBorder)
                }}
            />
            <input
                type="range"
                name="borderRange"
                value={props.inputs.borderRange}
                min="0"
                max="50"
                step="1"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => inputHandler(event)}
            />
        </div>
    )
};
export default Border;