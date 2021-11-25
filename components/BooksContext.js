import React, { useState } from "react";

const BookContext = React.createContext()

export function BookProvider (props) {
    const [checkedOne, setCheckedOne] = useState(false)
    const [checkedTwo, setCheckedTwo] = useState(false)

    const getAllAudioBooks = () => {
        console.log("asdjkk")
        setCheckedOne(!checkedOne)
        if(checkedOne === false) {
            setCheckedTwo(false)
        }
    }

    const getAllEbooks = () => {
        console.log("asssssssssss")
        setCheckedTwo(!checkedTwo)
        if(checkedTwo === false) {
            setCheckedOne(false)
        }
    }

    const value = React.useMemo(() => {
        return (
            {
                checkedOne,
                checkedTwo,
                getAllAudioBooks,
                getAllEbooks   
            }
        )
    }, [checkedOne, checkedTwo])
    
    return <BookContext.Provider value={value} {...props} />
}

export function useBooks() {
    const context = React.useContext(BookContext)
    if(!context) {
        throw new Error(`there was an error`)
    }
    return context
}