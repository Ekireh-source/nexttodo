"use client";

import MobileDropdown from "@components/MobileDropdown";
import { useState } from 'react';

const activeTasks = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
  return (
    <>
        
        
        <div className="mt-[56px] px-8">
            <MobileDropdown />
            {isModalOpen && (
                <dialog id="task_detail" className="modal" open>
                    <div className="modal-box">
                    <div className="flex flex-col mx-5">
                        <div className="mb-5">
                        <h1 className="font-bold pb-2">Buy Monthly Groceries</h1>
                        <p className="text-gray-300 text-xs">Added 22 hours ago</p>
                        </div>
                        <div className="mb-5">
                        <h2 className="font-bold pb-2">Description</h2>
                        <p>Need to get Vegetables, fruits, milk, soap, shampoo and snacks</p>
                        </div>
                        <div className="flex justify-between">
                        <div>
                            <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                            </svg>
                        </div>
                        <div className="flex gap-4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                            </svg>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={closeModal}>Close</button>
                    </form>
                </dialog>
            )}
            <div className="flex items-center justify-between ">
                <div>
                <h1 className="text-[20px]">
                    Today’s Active Tasks
                </h1>
                </div>
                
                <div className="flex justify-between gap-4">
                    
                    <p className="text-[10px]">
                        Monday, 18 December 2023
                    </p>
                </div>
                
            </div>
            

        </div>
        <div className="px-8">
            <div className="flex flex-col">
                <div className=" border-gray-300 shadow-lg rounded-[10px] my-4 py-4 flex items-center px-3">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>

                    <p onClick={openModal}
                    
                    className="px-10 cursor-pointer">Buy monthly groceries</p>
                </div>
                <div className=" border-gray-300 shadow-lg rounded-[10px] my-4 py-4 flex items-center px-3">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <p 
                    onClick={openModal} 
                    className="px-10 cursor-pointer">Pick up the kids</p>
                </div>
                <div className=" border-gray-300 shadow-lg rounded-[10px] my-4 py-4 flex items-cente px-3">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <p
                    onClick={openModal} 
                     className="px-10 cursor-pointer">Get nails and hair done</p>
                </div>
                
            </div>
            

        </div>
    </>
  )
}

export default activeTasks;