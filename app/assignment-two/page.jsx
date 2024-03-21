'use client'

import Link from "next/link";
import Image from "next/image"
import { useState } from "react"

import functionInAttr from '@/public/images/vscode-3.jpg'

export default function AssignmentTwo() {
    const [count, setCount] = useState(0);
    let sampleRegex = /[a-zA-Z0-9]/g

    function handleChange(event) {
        let regex = /[a-zA-Z0-9]/g

        if(event == '') {
            setCount(0)

            return
        }

        let charCount = event.match(regex).length

        setCount(charCount)
    }

    function handleClick() {
        let textArea = document.querySelector('.text-area')
        textArea.value = ''

        setCount(0)
    }

    return (
        <div className="md:w-3/4 md:mx-auto lg:max-w-5xl">
            <div className="h-20 text-2xl flex justify-start items-center">
                Assignment 2
            </div>

            <div className="mt-5">
                <p>In this assignment, you will be creating a character counter app. The demo is provided to you below. You need to replicate this demo full with the functionality. You will be working with:</p>
                <ul className="list-decimal ml-4">
                    <li>Regex</li>
                    <li>JavaScript match function</li>
                </ul>

                <p className="mt-3">Note: This <Link href='https://charactercounter.com/count-characters-in-javascript' className="underline text-indigo-500">link</Link> will help you during the logic implementation. Hint - You can pass in parameter to a function in onChange attribute for example:</p>

                <Image src={functionInAttr} alt='code 3' width='auto' height='auto' />
            </div>

            <hr className="border-2 my-10"/>

            <div className="mt-10 flex flex-col">
                <textarea onChange={(e) => handleChange(e.target.value)} rows={6} placeholder="Enter text to enable the character count ..." className="px-2 py-1 rounded-lg text-area"></textarea>
                <p className="mt-2">Character count: {count}</p>
            </div>

            <button className="bg-indigo-500 px-4 py-2 mt-5 text-white rounded-xl" onClick={handleClick}>Clear</button>
        </div>
    )
}