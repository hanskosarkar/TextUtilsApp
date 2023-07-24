import React, { useState } from 'react'

export default function Textform(props) {

    function countWords() {
        const trimmedText = text.replace(/\s+/g, ' ');
        const finalText = trimmedText.trim();
        let words;
        let arr = finalText.split(" ");
        if (arr[arr.length - 1] === "") {
            words = arr.length - 1;
        }
        else words = arr.length;
        return words;
    }

    function handleUpClick() {
        // console.log("upclick clicked")
        const tempText = text.toUpperCase();
        setText(tempText);
        props.showAlert("Success: Converted to Uppercase");
    }

    function handleLoClick() {
        // console.log("upclick clicked")
        const tempText = text.toLowerCase();
        setText(tempText);
        props.showAlert("Success: Converted to Lowercase");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    function removeExtraSpaces() {
        // Replace multiple spaces with a single space
        const trimmedText = text.replace(/\s+/g, ' ');
        // Trim leading and trailing spaces
        const finalText = trimmedText.trim();
        setText(finalText);
        props.showAlert("Success: Removed extra spaces");
    }

    function clearText() {
        setText("");
        props.showAlert("Success: Cleared text");
    }

    function copyText(){
        let textToCopy = document.getElementById("message");
        textToCopy.select();
        navigator.clipboard.writeText(textToCopy.value);
        props.showAlert("Success: Text copied to clipboard");
    }

    const [text, setText] = useState("")

    return (
        <>
            <form className="w-full mx-auto my-4 xs:max-w-xl  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className={`block text-xl uppercase tracking-wide  ${props.mode === "light" ? "text-gray-700" : "text-slate-100"}  font-bold mb-2`} htmlFor="grid-password">
                            {props.heading}
                        </label>
                        <textarea placeholder='enter text here...' value={text} onChange={handleOnChange} className= {`no-resize appearance-none block w-full  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none ${props.mode === "light" ? "focus:bg-white" : "focus:bg-[#1d2b2b]"} ${props.mode === "light" ? "bg-slate-200" : "bg-[#161c1c]"} ${props.mode === "light" ? "text-gray-700" : "text-slate-100"}`} id="message"></textarea>
                        {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}

                    </div>
                    <div className="btns flex flex-wrap">
                        <button className="mx-1 my-1 shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleUpClick}>
                            Convert to Uppercase
                        </button>
                        <button className="mx-1 my-1 shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleLoClick}>
                            Convert to Lowercase
                        </button>
                        <button className="mx-1 my-1 shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={removeExtraSpaces}>
                            Remove Extra Spaces
                        </button>
                        <button className="mx-1 my-1 shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={clearText}>
                            Clear Text
                        </button>
                        <button className="mx-1 my-1 shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={copyText}>
                            Copy Text
                        </button>
                    </div>
                </div>

                <div className={`summary m-5 px-3 ${props.mode === "light" ? "text-gray-700" : "text-slate-100"}`}>
                    <h3 className='text-xl uppercase tracking-wide font-bold'>Text summary</h3>
                    <p className='tracking-tight'>{countWords()} words and {text.length} characters</p>
                    <h2 className='text-xl uppercase tracking-wide font-bold mt-4'>Preview</h2>
                    <p className='tracking-tight text-justify whitespace-pre-wrap'>{text.length > 0 ? text : "Enter something in the textbox above to preview here."}</p>
                </div>
            </form>

            {/* <div className="summary bg-red-300">
                <h3 className='text-xl uppercase tracking-wide text-gray-700 font-bold'>Text summary</h3>
                <p className='tracking-tight text-gray-700'>{text.split(" ").length} words and {text.length} characters</p>
                <h2 className='text-xl uppercase tracking-wide text-gray-700 font-bold mt-4'>Preview</h2>
                <p className='tracking-tight text-gray-700'>{text}</p>
            </div> */}
        </>



    )
}
