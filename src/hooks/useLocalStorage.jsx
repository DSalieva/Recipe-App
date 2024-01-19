import { useState } from "react"


const getValue = (key, initialValue) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(ietm) : initialValue
}

const useLocalStorage = (key, _initialValue) => {

    const [localStorageValue, setLocalStorageValue] = useState(() => getValue(key, initialValue))

    const setValue = (value) => {
        setLocalStorageValue(value);
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [localStorageValue, setValue]
}

export default useLocalStorage;