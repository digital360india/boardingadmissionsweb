import React from 'react'
import Image from "next/image";
export default function Checkout() {
    const items = [
        {
            id: 1,
            title: 'Test Series with PYQs',
            description: 'hsfdhhdsf hsdh',
            price: 120,
            image: './images/pencil.png'
        },
        {
            id: 2,
            title: 'Test Series with PYQs',
            description: 'hsfdhhdsf hsdh',
            price: 120,
            image: './images/pencil.png'
        }
    ];
  return (
    <>
    <div className='xl:px-[100px] lg:px-10 py-[90px] flex flex-col lg:flex-row px-6 gap-10 justify-between'>
        <div className='space-y-8'>
            <div className='lg:py-[32px] lg:px-[32px] p-4 border rounded-lg ' >
                <p className='font-semibold lg:text-[24px] text-[18px] lg:mb-8 lg:m-4 my-4 '>Items in Cart</p>
             <div className='flex lg:gap-[52px] gap-4'>
             <div>
                <img className='w-[75px] h-[75px] rounded-mdq marker:' src="./images/product.png" alt="" />
                </div>
                <div className='lg:space-y-3 space-y-1'>
                    <p className='font-medium lg:text-[24px] text-[16px]'>Foundation Course for class 11th</p>
                    <div className='flex gap-4 items-center'>
                    <p className='font-medium lg:text-[32px] text-[18px]'>$45120</p>
                    <p className='font-medium lg:text-[18px] text-[12px] text-[#808080]'>$65120</p>
                    </div>
                    <div className='flex gap-10'>
                        <p className=' lg:text-[14px] text-[10px] text-[#808080]'><u>Add to wishlist</u></p>
                        <p className=' lg:text-[14px] text-[10px] text-[#808080]'><u>Remove</u></p>
                        <p className=' lg:text-[14px] text-[10px] text-[#808080]'><u>Share</u></p>
                    </div>
                </div>
             </div>
            </div>
            <div className='lg:py-[32px] lg:px-[32px] p-4 border rounded-lg ' >
                <p className='font-semibold lg:text-[24px] text-[18px] lg:mb-8 lg:m-4 my-4 '>Recommended</p>
                <div className='space-y-6'>
            {items.map(item => (
                <div key={item.id} className='border rounded-md py-[29px] px-6 flex gap-6 items-center'>
                    <p><input className='h-[24px] w-[24px]' type="checkbox" name="" id="" /></p>
                    <img src={item.image} alt=""  className='w-[83px] h-[61px] rounded-md'/>
                    <div>
                        <p className='font-medium lg:text-[18px] text-[14px]'>{item.title}</p>
                        <p className='text-[12px]'>{item.description}</p>
                        <p className='font-medium lg:text-[24px] text-[18px]'>${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
            </div>
        </div>
        <div className='py-[32px] px-[32px] border rounded-lg '>
        <p className='font-semibold text-[24px] mb-8 '>Order Summary</p>
        <p className='text-[14px]'>Discount code / Promo code</p>
        <div className='py-4 px-4 border rounded flex justify-between ' >
        <input type="text" placeholder='Enter Code'/>
        <button className='text-white bg-gradient01 px-5 py-2 rounded'>
        Apply
        </button>
        </div>
        <div className='border rounded-md lg:py-[32px] py-6 px-4 flex lg:gap-6 gap-4 items-center my-4'>
                    <p><input className='h-[24px] w-[24px]' type="checkbox" name="" id="" /></p>
                    <img src="./images/pencil.png" alt="" className='w-[83px] h-[61px] rounded-md' />
                    <div>
                        <p className='font-medium lg:text-[18px] text-[14px]'>Test Series with PYQs</p>
                        <p className='text-[12px]'>hsfdhhdsf hsdh</p>
                        <p className='font-medium lg:text-[24px] text-[18px]'>$120</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 py-4'>
                    <div className='flex justify-between'>
                    <p className='font-semibold lg:text-[24px] text-[18px]'>Subtotal</p>
                    <p className='font-medium lg:text-[24px] text-[18px]'>$45120</p>
                    </div>
                    <div className='space-y-2 text-[16px]'>
                    <div className='justify-between flex'>
                        <p className='text-[#545454] text-[14px] lg:text-[16px]'>Discount </p>
                        <p className='text-[#95D18B] font-medium'>$0</p>
                    </div>
                    <div className='justify-between flex'>
                        <p className='text-[#545454] text-[14px] lg:text-[16px]'>Discount </p>
                        <p className='text-[#95D18B] font-medium'>$0</p>
                    </div>
                    <div className='justify-between flex'>
                        <p className='text-[#545454] text-[14px] lg:text-[16px]'>Discount </p>
                        <p className='text-[#95D18B] font-medium'>$0</p>
                    </div>
                    </div>
                    <div className='flex justify-between'>
                    <p className='font-semibold lg:text-[24px] text-[18px]'>Total</p>
                    <p className='font-medium lg:text-[24px] text-[18px]'>$45120</p>
                    </div>
                </div>
                <button className='py-4 mt-10 w-full bg-gradient01 rounded-md text-[18px] font-medium text-white'>
                    Proceed to Buy
                    </button>
        </div>
    </div>
    </>
  )
}





