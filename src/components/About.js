import React from 'react'

export default function About(props) {
    return (
        <div className={`w-full rounded md:border md:border-gray-300 p-5 xs:max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto my-4 ${props.mode === "light" ? "text-gray-700" : "text-slate-100"}`}>
            <h2 className={`tracking-wide text-2xl font-bold my-2`}>TextUtils: Unleash Your Words, Empower Your Text</h2>
            <p className='tracking-tight text-justify'>Welcome to TextUtils - the ultimate text manipulation app designed to put you in control of your text! Whether you're a writer, student, or just someone who loves playing with words, TextUtils empowers you to transform and customize your text like never before.</p>
            <h3 className={`tracking-wide my-3 text-lg font-bold mb-2`}>TextUtils offers an impressive selection of features, including:</h3>
            <ul className='list-disc list-inside'>
                <li className='tracking-tight text-justify'>Case Conversion: Quickly convert your text to uppercase, lowercase, title case, or sentence case. Whether you want to add emphasis or standardize the format, we've got you covered.</li>
                <li className='tracking-tight text-justify'>Text Formatting: Add line breaks, remove extra spaces, or indent your text to create clean and visually appealing paragraphs.</li>
                <li className='tracking-tight text-justify'>Language Tools: Count the number of words, characters, or paragraphs in your text. Calculate the reading time or find the most common words used.</li>
            </ul>
        </div>
    )
}

// ${props.mode === "light" ? "text-gray-700" : "text-slate-100"}