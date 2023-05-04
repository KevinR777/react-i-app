import React, {useState} from 'react'

export const useToggle = (defaultState = false) => {
    const [toggle, setToggle] = useState(defaultState)

    const switchToggle = () => setToggle(!toggle)

    return {
        toggle, switchToggle
    }
}