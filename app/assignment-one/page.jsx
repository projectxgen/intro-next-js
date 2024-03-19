'use client'

import { useState } from "react"
import Link from "next/link";

export default function AssignmentOne() {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');
    const [check, setCheck] = useState(false)

    function addTodoList() {
        let todos = todoList
        let id = todoList.length + 1
        let desc = todo
        let inputText = document.querySelector('.todo-input')
        let errMsg = document.querySelector('.error-msg')

        if (todo == '') {
            setCheck(true)
            errMsg.innerHTML = 'Please enter a text'
            return
        }

        inputText.value = ''

        todos.push({ 'id': id, 'desc': desc })

        errMsg.innerHTML = ''
        setTodo('')
        setTodoList(todos)
        setCheck(false)
    }

    return (
        <div className="md:w-3/4 md:mx-auto  lg:max-w-5xl lg:mx-auto">
            <div className="h-20 text-2xl flex justify-start items-center">
                Assignment 1
            </div>

            <div className="mt-5">
               <p> In this assignment, you will be creating a to-do list by using hook. The example of the to-do list has been done for you with full functionality of &apos;Add&apos;. Here are the list of things that you need to pay attention to: </p>
               <ul className="list-decimal ml-5">
                    <li>You need to prompt user to input text if no input is entered by adding a user interactive message by setting the border to red and the text message to red. Try to click the &apos;Add Task&apos; button by leaving the input text empty.</li>
                    <li>You need to reset the input value to empty after the user click the &apos;Add Task&apos; button. Try to input some text and click on the &apos;Add Task&apos; button, and you will see the text that previously there was cleared</li>
               </ul>
               <p>Note: You will need to understand onChange HTML Event Handler before you start this project. You could access it from the <Link href='/explore' className="underline">Exploration</Link> tab</p>
            </div>

            <hr className="border-2 my-10"/>

            <div className="mt-10">
                <h1 className="text-xl font-semibold mb-5">My To Do List</h1>

                <div className="flex flex-row items-center">
                    <div>
                        <input type='text' placeholder='Enter a todo list' className={check ? "px-5 py-2 rounded-xl border-2 border-red-600 todo-input" : "px-5 py-2 rounded-xl todo-input"} onChange={(event) => setTodo(event.target.value)}/>
                    </div>
                    <button className="ml-5 bg-indigo-500 text-white px-5 py-2 rounded-full" onClick={addTodoList}>Add Task +</button>
                </div>
                
                <p className="error-msg text-sm text-red-600 ml-5 mt-1"></p>

                <ul className="list-disc ml-9 mt-4">
                    {
                        todoList.map((t) => (
                            <li key={t.id} className="mt-2">{t.desc}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}