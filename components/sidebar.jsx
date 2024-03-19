import Image from "next/image";
import Link from "next/link";

import task from '@/public/svgs/task.svg'
import bulb from '@/public/svgs/bulb.svg'

export default function Navigation () {
    return (
        <div className="min-h-screen flex flex-row bg-gray-100">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-center h-20 shadow-md">
                <h1 className="text-lg">Next Js Practice</h1>
                </div>
                <ul className="flex flex-col py-4">
                <li>
                    <Link href="/explore" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <Image src={bulb} width={10} height={10} alt='task' className="inline-flex items-center justify-center h-6 w-12 text-lg text-gray-400"/>
                        <span className="text-sm font-medium">Exploration</span>
                    </Link>
                </li>
                <li>
                    <Link href="/assignment-one" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <Image src={task} width={10} height={10} alt='task' className="inline-flex items-center justify-center h-6 w-12 text-lg text-gray-400"/>
                        <span className="text-sm font-medium">Assignment 1</span>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
    )
}