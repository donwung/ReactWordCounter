import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const [characterCount, setCharacterCount] = useState(0);
    const [vowelCount, setVowelCount] = useState(0);
    const [consonantCount, setConsonantCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [punctuationCount, setPunctuationCount] = useState(0);
    const [commaCount, setCommaCount] = useState(0);
    const [uppercaseCharacterCount, setUppercaseCharacterCount] = useState(0);

    const updateVowelCount = (text: string) => {
        const vowels = ["a", "e", "i", "o", "u"];
        // const vowels = /[aeiou]/; // regex
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (vowels.find(character => character === text[i].toLowerCase())) {
                count++
            }
        }
        setVowelCount(count);
    }

    const updateWordCount = (text: string) => {
        let count = 0;
        let startWord = false;
        let word = "";

        for (let i = 0; i < text.length; i++) {
            if (text[i] === " " || text[i] === "\n") {
                startWord = false;
            } else {
                if (!startWord) {
                    startWord = true;
                    count++;
                }
                word = word + text[i];
            }
        }
        console.log(word);
        setWordCount(count);
    }

    const updateCharacterCount = (text: string) => {
        let lineBreakCount = 0;

        for (let i = 0; i < text.length; i++) {
            if (text[i] === "\n") {
                lineBreakCount++;
            }
        }
        setCharacterCount(text.length - lineBreakCount);
    }

    const updateUppercaseCharacterCount = (text: string) => {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toUpperCase()) {
                count++;
            }
        }
        setUppercaseCharacterCount(count);
    }

    // TODO: refactor
    const updateWordStats = (text: string) => {
        updateCharacterCount(text);
        updateVowelCount(text);
        updateWordCount(text);
        updateConsonantCount(text);
        updatePunctuationCount(text);
        updateCommaCount(text);
        updateUppercaseCharacterCount(text);
    }

    const handleOnTextInput = (text: string) => {
        console.log("added text");
        setText(text)
        updateWordStats(text);
    }

    const updateConsonantCount = (text: string) => {
        const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (consonants.find(character => character === text[i].toLowerCase())) {
                count++
            }
        }
        setConsonantCount(count);
    }

    const updatePunctuationCount = (text: string) => {
        const punctuation = [".", "?", "!", ",", "'", '"', ";", "-", "—", "(", ")", "{", "}", "[", "]", "…", ":"];
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (punctuation.find(character => character === text[i])) {
                count++
            }
        }
        setPunctuationCount(count);
    }

    const updateCommaCount = (text: string) => {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if ("," === text[i]) {
                count++
            }
        }
        setCommaCount(count);
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
                        Vowels: {vowelCount}
                    </h5>
                    <h5>
                        Words: {wordCount}
                    </h5>
                    <h5>
                        Consonants: {consonantCount}
                    </h5>
                    <h5>
                        Punctuation: {punctuationCount}
                    </h5>
                    <h5>
                        Commas: {commaCount}
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
