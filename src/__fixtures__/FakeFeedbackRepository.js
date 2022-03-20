
export default class FakeFeedbackRepository {
    constructor() {
        this.sentFeedback = []
    }

    sendFeedback(name, comments) {
        this.sentFeedback.push({
            name,
            comments,
        })
        return Promise.resolve()
    }
}
