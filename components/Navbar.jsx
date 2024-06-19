"use client";
import Link from "next/link";
import { useState } from "react";



const Navbar = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    } 


  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3 px-4 ">
        <div className="hidden md:block">Dashboard</div>
        <div className="text-amber-700 text-2xl block md:hidden">
                    <strong>To-Do-App</strong>
                    </div>
        <div className="flex gap-4">
        <div className="border-gray-300 shadow-lg rounded-[10px]  px-8 items-center block md:hidden" >
                    <div onClick={openModal} className="flex justify-between items-center gap-3">
                        <button  >Add Task</button>
                        
                        <svg className="w-8 h-8 text-amber-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    

                   
                </div>
            <Link href="/">
                <button className="bg-amber-700 text-white rounded-[4px] px-4 py-2 flex gap-2 items-center">
                    SignOut
                    <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                    </svg>
                </button>
            </Link>
        </div>
        {isModalOpen && (
                        <dialog id="my_modal_1" className="modal" open>
                        <div className="modal-box">
                    
                           
                            <form method="">
                                <div className="flex flex-col">
                                    <input type="text" placeholder="Add Task" className="py-2 my-2 px-2" />
                                    <textarea className="py-2 my-2 px-2" placeholder="Add Description"></textarea>
                                    <div className="flex justify-end gap-2 pt-2">
                                        <button className="btn" onClick={closeModal}>Cancel</button>
                                        <button type="submit" className="btn">save</button>
                                    </div>
                                    
                                </div>
                                
                            </form>
                            
                        </div>
                    </dialog>
                    )}
    </nav>
  )
}

export default Navbar