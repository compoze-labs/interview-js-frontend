import axios from "axios"

export default class FeedbackRepository {
    // eslint-disable-next-line class-methods-use-this
    constructor() {
        this.url = process.env.REACT_APP_BACKEND_ENDPOINT
    }

    sendFeedback(name, comments) {
        return axios.post(`${this.url}/feedback`, {
            name,
            comments
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}
