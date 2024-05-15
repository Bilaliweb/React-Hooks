import React, {useState, useEffect} from "react";

export default function List({getItems}){
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(2))
        console.log('Updating Items')
    }, [getItems])

    return (
        items.map((item) => {
            return <div key={item}>{item}</div>
        })
    )
}