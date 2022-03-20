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
    const [isSubmitted, setIsSubmitted] = useState(false)

    const doSubmit = () => {
        feedbackRepository.sendFeedback(currentName, currentComments)
        setIsSubmitted(true)
    }

    const feedback = useMemo(() => (
        {
            name: currentName,
            setCurrentName,
            comments: currentComments,
            setCurrentComments,
            doSubmit,
            isSubmitted,
        }
    ), [currentName, currentComments, isSubmitted])

    return (
        <FeedbackContext.Provider value={feedback}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackProvider
