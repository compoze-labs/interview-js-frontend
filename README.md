![CompozeLabs Logo](/docs/CompozeLabsLogo512.png)
# Feedback Frontend

Welcome interviewee! We wanted to give you an idea for how we develop at CompozeLabs. CompozeLabs builds custom software for clients looking to leverage unique integrations to differentiate themselves from others. Some examples are: a fullstack solution for a dispensary, unique backend data processing pipelines, and building out infrastructure automation for existing development teams to deliver code faster. 
 
The purpose of this interview is to get an idea of how you would approach problem solving. We will be looking at some of the following broad categories:
* **Software Artisanship**: - How well does your solution follow best practices, is flexible to change, and continues to work confidently?
* **Product Thinking**: - How well you take into account the broad scope of the client into your solution?
* **Creativity**: I mean, you don't need to rewrite Minecraft in 64 lines of code or anything, but sometimes a creative, simple solution is the best one!
* **Collaboration**: We will be pairing with you on this! At CompozeLabs, we work together as teams - because we view that getting a diverse set of inputs to a solution is the best.

# Background
This repository is intended as an MVP for a product for providing feedback for a US-based company. The current MVP allows us to input feedback into the custom feedback form and integrate that into several downstream services that the company uses for tracking customer sentiment. 

# Development
This repository starts up the frontend for the Feedback application. It is a simple React App that hosts a small form and sends the information to our backend via `POST /feedback`. The idea is that this repository isn't necessarily perfect - there are intentionally issues that we may need to address, that the developer has left as tech debt in order to get to MVP.

### Startup
```bash
$ npm install
$ npm start
```
> You might want to make sure you've started up the backend Express JS as well in a separate terminal :)

### Testing
```bash
$ npm test
```

### Linting
```bash
$ npm run lint:fix
```

```bash
$ npm run lint
```
> Does not fix any changes, just tells you if you have anything out of line :)
