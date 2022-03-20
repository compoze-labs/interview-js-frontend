import React, {
    createContext, useContext, useState, useMemo,
} from "react"

const FeedbackContext = createContext({})

export const useFeedbackContext = () => useContext(FeedbackContext)

function FeedbackProvider({
    children,
    feedbackRepository,
}) {
    const [currentName, setCurrentName] = useState("")
    const [currentComments, setCurrentComments] = useState("")

    const doSubmit = () => {
        feedbackRepository.sendFeedback(currentName, currentComments)
    }

    const feedback = useMemo(() => (
        {
            name: currentName,
            setCurrentName,
            comments: currentComments,
            setCurrentComments,
            doSubmit,
        }
    ), [currentName, currentComments])

    return (
        <FeedbackContext.Provider value={feedback}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackProvider
