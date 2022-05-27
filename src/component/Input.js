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
    disabled,
    helperText,
    ...props
}) {
    const [isFocus, setFocus] = useState(false);
    
    
    const labelClass = `Input-label ${isFocus ? 'Input-label--focus' : ''}`;
    const inputClass = `Input-body ${isFocus ? 'Input-body--focus' : ''}`;
    
    const errorLabel = `Input-label ${isFocus ? 'Input-label--error' : ''}`;
    const errorInput = `Input-body ${isFocus ? 'Input-body--error' : ''}`;
    
    const disabledLabel = `Input-label--disabled`;
    const disabledClass = `Input-body--disabled`;

    const helperClass = `Input-helper${error ? '--error' : ''}`;
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
                    <p className={helperClass}>{helperText}</p>

                </label>
                :
                <label htmlFor={id} className="Input-box">
                    <span className={ disabled ? disabledLabel : labelClass}>Label</span>
                    <div className="Input-container">
                        <span className="material-icons Input-icon">settings</span>
                        <input 
                            id={id}
                            className={ disabled ? disabledClass : inputClass} 
                            placeholder="Placeholder" 

                            onFocus={ ()=> setFocus(true) }
                            onBlur={ ()=> setFocus(false) }

                            {...props} 
                        />
                    </div>
                    <p className={helperClass}>{helperText}</p>
                </label>
            }
        </>
    );
}
