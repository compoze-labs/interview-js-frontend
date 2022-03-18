import React from "react"

const appStyle = {
    textAlign: "center",
    background: "linear-gradient(to right top, #FE7A2C, #FE7A2C, #FDE25E)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
}

function App() {
    return (
        <div style={appStyle} className="App">
            <header className="App-header" />
        </div>
    )
}

export default App
