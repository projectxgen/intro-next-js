'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import variable from '@/public/images/vscode-1.jpg'
import eventCode from '@/public/images/vscode-2.jpg'

export default function Exploration () {
    const [input, setInput] = useState('');

    return (
        <div className="md:max-w-3xl md:mx-auto lg:max-w-5xl">
            <div className="h-20 text-2xl flex justify-start items-center">
                Exploration
            </div>
            
            <div className="mt-5">
                <h1 className="text-xl font-semibold mb-2">Event</h1>

                <p className="mb-5">In assignment 1, you will need to implement an onChange event handler. So, please understand how the functionality of the code below on how it works before implementing assignment 1.</p>

                <p className="mb-3">Demo:</p>

                <div className="mb-5">
                    <input type='text' onChange={(event) => setInput(event.target.value)} placeholder="Enter any text here ..." className="px-3 py-1 rounded-xl w-full" />
                    <p className='px-1 mt-2'>Text entered: {input}</p>
                </div>

                <div>
                    <p className="mb-3">Code below are the code implemented for the demo</p>
                    <Image src={variable} alt='var' width='auto' height='auto' className="mb-1"/>
                    <Image src={eventCode} alt='var' width='auto' height='auto' />
                </div>

            </div>
        </div>
    )
}