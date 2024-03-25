'use client'

import { useState } from "react";
import Image from "next/image";

import minus from '@/public/svgs/minus.svg'
import plus from '@/public/svgs/add.svg'

export default function AssignmentThree () {
    const [items, setItems] = useState({});
    const [cart, setCart] = useState([]);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

    function handleClickAddItem() {
        let [obj, desc, amount, id, c, total] = [items, description, price, cart.length + 1, cart, totalPrice];

        let newObj = {}

        setTotalPrice(total + parseInt(amount))
        
        let val = {'description': desc, 'price': amount, 'count': 1}
        newObj[id] = val 

        Object.assign(obj, newObj)

        val['id'] = id

        c.push(val)
        
        resetAll(obj, c);
    }

    function addQuantity() {

    }

    function removeQuantity() {

    }

    function resetAll(items, cart) {
        let item = document.querySelector('.item-name')
        let amount = document.querySelector('.price')

        setItems(items)
        setCart(cart)
        setDescription('')
        setPrice('')

        item.value = ''
        amount.value = ''
    }


    return (
        <div className="md:w-3/4 md:mx-auto  lg:max-w-5xl lg:mx-auto">
            <div className="h-20 text-2xl flex justify-start items-center">
                Assignment 3
            </div>

            <div className="mb-10">
                <h1 className="text-2xl mb-5">Manual Insert Cart</h1>

                <div className="flex flex-row justify-around w-full mb-4">
                    <div className="flex flex-col w-2/4 mr-10">
                        <label className="mb-1">Item Description</label>
                        <input placeholder='Item Name' className="item-name px-2 py-1 rounded-xl bg-slate-300" onChange={(event) => setDescription(event.target.value)} />
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label className="mb-1">Price List</label>
                        <input placeholder='Item Price' className="price px-2 py-1 rounded-xl bg-slate-300" onChange={(event) => setPrice(event.target.value)} />
                    </div>
                </div>
                    
                <button className="bg-black px-3 py-1 text-white rounded-xl" onClick={handleClickAddItem}>Add Item +</button>
            </div>

            <hr className="border border-slate-200" />

            <div>
                <h1>Items Added</h1>

                <p>{`You have ${cart.length} ${cart.length > 1 ? 'items' : 'item'} in the cart.`}</p>

                <div>
                    {
                        cart.map((item) => (
                            <div key={item.id} className="flex flex-row justify-between items-center bg-slate-300 px-5 py-2 rounded-xl mb-2">
                                <div>
                                    <h1 className="text-lg">{item.description}</h1>
                                    <p className="text-base text-white">$ {item.price}</p>
                                </div>

                                <div className="flex flex-row items-center">
                                    <button className="rounded-md px-2 py-1"><Image src={minus} width={10} height={10} alt='sign'/></button>
                                    <p className="mx-4">{item.count}</p>
                                    <button className=" rounded-md px-2 py-1"><Image src={plus} width={10} height={10} alt='sign'/></button>
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