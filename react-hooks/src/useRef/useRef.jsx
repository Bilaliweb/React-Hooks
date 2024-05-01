import React, { useEffect, useRef, useState } from "react";
/**
 * Most important useCase is if we want to persist values between renders and don't want to rerender our component. useRef() returns an object and we use its property 'current' to update the state or value and this is what is get persisted between rerenders and whole component is not rerendered
 */
export default function Ref(){
    const [text, setText] = useState('')
    // const [count, setCount] = useState(0)
    const count = useRef(0)
    const inputRef = useRef()
    const prevText = useRef()

    // Effect to increase the count without rerendering the component
    useEffect(() => {
        console.log('To check: ', count.current)
        count.current = count.current + 1 
    })
    
    const handleChange = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }
    
    // This useEffect() will cause infinite rendering so we should avoid it
    // useEffect(() => {
    //     setCount(prevValue => prevValue+1)
    // }, [count])

    // Handler to focus on input field directly by clicking on button
    const handleFocus = () => {
        inputRef.current.focus()
    }

    // Effect to assign initial/old value of 'text' to 'prevText' to display on UI
    useEffect(() => {
        prevText.current = text
    }, [text])

    return(
        <div>
            <input ref={inputRef} value={text} type="text" onChange={handleChange}></input>
            <h2>My text is '{text}' which was used to be '{prevText.current}'</h2>
            <button onClick={handleFocus}>Focus</button>
            <h2>Component is rendered {count.current} times</h2>
        </div>
    )
}