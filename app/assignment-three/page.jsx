'use client'

import { useState } from "react";

export default function AssignmentThree () {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)


    return (
        <div className="md:w-3/4 md:mx-auto  lg:max-w-5xl lg:mx-auto">
            <div className="h-20 text-2xl flex justify-start items-center">
                Assignment 3
            </div>

            <div className="mb-10">
                <h1>Manual Insert Cart</h1>

                <hr />

                <div className="flex flex-row justify-around w-full mb-4">
                    <div className="flex flex-col bg-red-100 w-2/4 mr-10">
                        <label>Item Description</label>
                        <input placeholder='Item Name' className="px-2 py-1 rounded-xl" />
                    </div>
                    <div className="flex flex-col bg-red-100 w-2/4">
                        <label>Price List</label>
                        <input placeholder='Item Name' className="px-2 py-1 rounded-xl" />
                    </div>
                </div>
                    
                <button className="bg-black px-3 py-1 text-white rounded-xl">Add Item +</button>
            </div>

            <div>
                <h1>Items Added</h1>

                <p>You have {cart.length} items in the cart.</p>

                <div>
                    {
                        cart.map((item) => (
                            <div key={item.id}>
                                <div>
                                    <h1>{item.description}</h1>
                                    <p>{item.price}</p>
                                </div>

                                <div>
                                    <button></button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <p>Total Price: ${totalPrice}</p>
            </div>
        </div>
    )
}