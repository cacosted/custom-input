import "./Input.css";
import React,{useState} from "react";

export default function Input({
    id, 
    error,
    disabled,
    helperText,
    ...props
}) {
    
    let inputToRender;

    // Check which input will be rendered
    if(error) {
        inputToRender = <ErrorInput />;
    }

    else if(disabled) {
        inputToRender = <DisabledInput />;
    }

    else {
        inputToRender = <RegularInput />;
    }
    return (
        
        <>
            <h2>{"<Input />"}</h2>
            
            {inputToRender}
        </>
    );
}

function RegularInput(focus) {
    
    const [isFocused,setFocus] = useState(false);

    return (
        <>
            <label className="input__box">
                <span 
                    className={`input__label ${isFocused ? 'input__label--focus' : ''}`}
                >Label</span>
                <input 
                    className={`input__body ${isFocused ? 'input__body--focus' : ''}`} 
                    onFocus={ () => setFocus(true) }
                    onBlur={ () => setFocus(false) }
                    placeholder="Type here..." 
                />
            </label>

        </>
    )
}

function ErrorInput(focus) {
    
    const [isFocused,setFocus] = useState(false);

    return (
        <>
            <label className="input__box">
                <span 
                    className={`input__label input__label--error ${isFocused ? 'input__label--focus' : ''}`}
                >Label</span>
                <input 
                    className={`input__body input__body--error ${isFocused ? 'input__body--focus' : ''}`} 
                    onFocus={ () => setFocus(true) }
                    onBlur={ () => setFocus(false) }
                    placeholder="Type here..." 
                />
            </label>

        </>
    )
}

function DisabledInput(focus) {
    

    return (
        <>
            <label className="input__box">
                <span 
                    className={`input__label input__label--disabled`}
                >Label</span>
                <input 
                    className={`input__body input__body--disabled`} 
                    placeholder="Type here..." 
                    disabled
                />
            </label>

        </>
    )
}