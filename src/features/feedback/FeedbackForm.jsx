import React from "react"
import styled from "styled-components"
import { useFeedbackContext } from "./FeedbackContext"

const Card = styled.div`
    background: white;
    box-shadow: 4px 2px 6px #6D6D6D;
    color: #6D6D6D;
    border-radius: 2px;
    padding: 40px;
    width: 450px;
    height: 70vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.span`
    display: block;
    font-size: 30px;
    margin-bottom: 20px;
`

const NameLabel = styled.span`
    display: block;
    font-size: 20px;
    width: 75%;
    text-align: left;
`

const NameInput = styled.input`
    font-size: 20px;
    padding: 10px;
    width: 75%;
    margin: 10px;
`

const FeedbackLabel = styled.span`
    display: block;
    font-size: 20px;
    width: 75%;
    text-align: left;
`

const FeedbackArea = styled.textarea`
    font-size: 20px;
    padding: 10px;
    width: 75%;
    margin: 10px;
    flex-grow: 1
`

const SubmitButton = styled.button`
    background: #FE7A2C;
    color: white;
    border: none;
    border-radius: 3px;
    width: 100px;
    height: 36px;
    font-family: 'Quicksand';
    font-weight: 700;
    font-size: 16px;
    &:active {
        background: #f55e05;
    }
`

export default function FeedbackForm() {
    return (
        <div>
            <Title>Your Feedback is Appreciated!</Title>
            <Card>
                <NameLabel>Name</NameLabel>
                <NameInput />

                <FeedbackLabel>Comments</FeedbackLabel>
                <FeedbackArea />
                <SubmitButton type="button" onClick={() => {}}>Submit</SubmitButton>
            </Card>
        </div>
    )
}
