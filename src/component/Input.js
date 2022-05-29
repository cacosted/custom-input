import "./Input.css";
import React,{useState} from "react";

export default function Input({
    id, 
    title,
    error,
    disabled,
    helperText,
    startIcon,
    endIcon,
    size,
    fullWidth,
    multiline,
    row,
    ...rester
}) {

    const generalClass = `
        input__body 
        ${ startIcon === undefined ? '' : 'input__body--icon'}
        ${ size === 'sm' ? 'input__body--small' : '' }
    ` 

    let inputToRender;

    // Check which input will be rendered
    if(error) {
        inputToRender = <ErrorInput general= {generalClass}/>;
    }

    else if(disabled) {
        inputToRender = <DisabledInput general= {generalClass}/>;
    }

    else if(multiline) {
        inputToRender = <MultiLineInput general= {generalClass} row= {row}/>
    }

    else {
        inputToRender = <RegularInput general= {generalClass}/>;
    }
    return (
        
        <>
            
            <article className="input__container--full">
                <h2 className="input__title">{title}</h2>
                
                <div className={`input__container ${fullWidth ? 'input__container--full' : ''}`}>
                    <i className="input__icon input__icon--start material-icons">{startIcon}</i>
                        { inputToRender }
                    <i className="input__icon input__icon--end material-icons">{endIcon}</i>
                </div>
                    { 
                        helperText ? 
                        <p className={`input__helper ${error ? 'input__helper--error' : ''}`}>{helperText}</p> 
                        : ''
                    } 
            </article>
            
        </>
    );
}

function RegularInput({general}) {
    
    const [isFocused,setFocus] = useState(false);
    return (
        <>
            <label className="input__box">
                <span 
                    className={`input__label ${isFocused ? 'input__label--focus' : ''}`}
                >Label</span>
                <input 
                    className={`${general} ${isFocused ? 'input__body--focus' : ''}`} 
                    onFocus={ () => setFocus(true) }
                    onBlur={ () => setFocus(false) }
                    placeholder="Placeholder"
                />
            </label>

        </>
    )
}

function ErrorInput({general}) {
    
    const [isFocused,setFocus] = useState(false);

    return (
        <>
            <label className="input__box">
                <span 
                    className={`input__label input__label--error ${isFocused ? 'input__label--focus' : ''}`}
                >Label</span>
                <input 
                    className={`${general} input__body--error ${isFocused ? 'input__body--focus' : ''}`} 
                    onFocus={ () => setFocus(true) }
                    onBlur={ () => setFocus(false) }
                    placeholder="Placeholder" 
                />
            </label>

        </>
    )
}

function DisabledInput({general}) {
    

    return (
        <>
            <label className="input__box">
                <span 
                    className={`input__label input__label--disabled`}
                >Label</span>
                <input 
                    className={`${general} input__body--disabled`} 
                    placeholder="Placeholder" 
                    disabled
                />
            </label>

        </>
    )
}

function MultiLineInput({general,row}) {
    

    return (
        <>
            <label className="input__box">
                <span 
                    className={`input__label input__label`}
                >Label</span>
                <textarea 
                    className={`${general} input_body--multiline`} 
                    rows={row}
                    placeholder="Placeholder" 
                >
                </textarea>
            </label>

        </>
    )
}