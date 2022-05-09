import "./Input.css";
import React,{useState} from "react";

// const setFocusColor = () => {
//     const label = document.querySelectorAll('.Input-label');
//     const input = document.querySelectorAll('.Input-body');

//     // label.classList.add('Input-focus-text');
//     // input.classList.add('Input-focus-border');
// }

// const removeFocusColor = () => {
//     const label = document.querySelectorAll('.Input-label');
//     const input = document.querySelectorAll('.Input-body');

//     // label.classList.remove('Input-focus-text');
//     // input.classList.remove('Input-focus-border');
// }
export default function Input({
    id, 
    error,
    ...props
}) {
    const [isFocus, setFocus] = useState(false);

    const labelClass = `Input-label ${isFocus ? 'Input-label--focus' : ''}`;
    const inputClass = `Input-body ${isFocus ? 'Input-body--focus' : ''}`;

    const errorLabel = `Input-label ${isFocus ? 'Input-label--error' : ''}`;
    const errorInput = `Input-body ${isFocus ? 'Input-body--error' : ''}`;

    return (
        
        <>
            <h2>{"<Input />"}</h2>
            {
            (error) ? 
                <label htmlFor={id} className="Input-box">
                    <span className="Input-label Input-label--error">Label</span>
                    <input 
                        id={id}
                        className="Input-body Input-body--error" 
                        placeholder="Placeholder" 

                        onFocus={ ()=> setFocus(true) }
                        onBlur={ ()=> setFocus(false) }

                        {...props} 
                    />
                </label>
                :
                <label htmlFor={id} className="Input-box">
                    <span className={labelClass}>Label</span>
                    <input 
                        id={id}
                        className={inputClass} 
                        placeholder="Placeholder" 

                        onFocus={ ()=> setFocus(true) }
                        onBlur={ ()=> setFocus(false) }

                        {...props} 
                    />
                </label>
            }
        </>
    );
}
