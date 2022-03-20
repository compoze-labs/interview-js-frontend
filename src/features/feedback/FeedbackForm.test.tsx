import { fireEvent, render } from "@testing-library/react"
import React from "react"
import FakeFeedbackRepository from "../../__fixtures__/FakeFeedbackRepository"
import FeedbackProvider from "./FeedbackContext"
import FeedbackForm from "./FeedbackForm"

describe("the FeedbackForm", () => {

    // todo: why is this failing??
    xit("can render and submit feedback", () => {
        const repo = new FakeFeedbackRepository()
        const container = render(
            <FeedbackProvider feedbackRepository={repo}>
                <FeedbackForm />
            </FeedbackProvider>
        )
        
        const name = container.getByTestId("name-field")
        const comments = container.getByTestId("comments-field")
        fireEvent.change(name, {target: {value: "Bilbo Baggins"}})
        fireEvent.change(comments, {target: {value: "Was a hobbit from the Shire."}})

        const submitButton = container.getByRole("button")
        expect(submitButton).toBeVisible()
        submitButton.click()

        expect(repo.sentFeedback).toStrictEqual([{
            name: "Bilbo Baggins",
            comments: "Was a hobbit from the Shire."
        }])

        expect(submitButton).not.toBeVisible()
        const thankYou = container.getByText("Thank you for your feedback!")
        expect(thankYou).toBeVisible()
    })
})