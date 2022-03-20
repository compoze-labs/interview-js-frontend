import React from "react"
import styled from "styled-components"
import FeedbackRepository from "./data/FeedbackRepository"
import FeedbackProvider from "./features/feedback/FeedbackContext"
import FeedbackForm from "./features/feedback/FeedbackForm"

const AppContainer = styled.div`
    text-align: center;
    background: linear-gradient(to right top, #FE7A2C, #FE7A2C, #FDE25E);
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
    overflow: hidden;
`

const CenteredAppWithGutters = styled.div`
    width: 100%;
    height: 100%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center,
`

function App() {
    return (
        <AppContainer>
            <CenteredAppWithGutters>
                <FeedbackProvider feedbackRepository={new FeedbackRepository()}>
                    <FeedbackForm />
                </FeedbackProvider>
            </CenteredAppWithGutters>
        </AppContainer>
    )
}

export default App
