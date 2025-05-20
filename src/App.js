import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React from "react";

class App extends React.Component{

    state = {
        buttonText: "Why algebra",
        text: "Učilište Algebra"
    }

    toggleView = () => {
        this.setState(prev => {
            if (prev.buttonText === "Why algebra") {
                return { buttonText: "We are", text: "Be excellent in things you like" }
            } else {
                return { buttonText: "Why algebra", text: "Učilište Algebra" }
            }
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header toggleView={this.toggleView} text={this.state.text} buttonText={this.state.buttonText}/>
                    <Main/>
                    <Footer date={new Date().toLocaleDateString()}/>
                </header>
            </div>
        );
    }
}

export default App;
