import React, { createContext, useCallback, useContext, useState } from "react"

const FeedbackContext = createContext({})

export const useFeedbackContext = () => useContext(FeedbackContext)

function FeedbackProvider({
    children,
    feedbackRepository
}) {
    const [currentName, setCurrentName] = useState("")
    const [currentComments, setCurrentComments] = useState("")

    const doSubmit = () => {
        feedbackRepository.sendFeedback(currentName, currentComments)   
    }

    return (
        <FeedbackContext.Provider
            value={{
                name: currentName,
                setCurrentName,
                comments: currentComments,
                setCurrentComments,
                doSubmit
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackProvider