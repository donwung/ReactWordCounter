import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const [characterCount, setCharacterCount] = useState(0);

    const handleOnTextInput = (text: string) => {
        console.log("added text");
        setText(text)
        setCharacterCount(text.length);
    }

    const handleOnTextPaste = () => {
        console.log("pasted text");
    }

    return (
        <div className="App">
            <h1>
                Text block stats
            </h1>
            <div style={{ display: "flex" }}>
                <div>
                    <h1>Enter text here</h1>
                    <textarea onChange={(e: any) => { handleOnTextInput(e.target.value) }} onPaste={(e) => { handleOnTextPaste() }}></textarea>
                    <textarea disabled value={text}></textarea>
                </div>
                <div>
                    <h5>
                        Characters: {characterCount}
                    </h5>
                    <h5>
                        Vowels:
                    </h5>
                    <h5>
                        Words:
                    </h5>
                    <h5>
                        Consonants:
                    </h5>
                    <h5>
                        Punctuation:
                    </h5>
                    <h5>
                        Commas:
                    </h5>
                    <h5>
                        Uppercase letters:
                    </h5>
                    <h5>
                        Lowercase letters:
                    </h5>
                    <h5>
                        Pixels:
                    </h5>
                    <h5>
                        Average word length:
                    </h5>
                    <h5>
                        Words shorter than average word length:
                    </h5>
                    <h5>
                        Words greater than average word length:
                    </h5>
                    <h5>
                        Characters not in English alphabet:
                    </h5>
                    <h5>
                        Articles:
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default App
