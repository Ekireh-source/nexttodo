"use client";
import Link from "next/link"
import { useState } from "react";
import axios from 'axios';







const Sidebar = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[task, setTask] = useState([]);
    const[description, setDescription] = useState([]);

    
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };  
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/task/new', {task: task, description: description});
            console.log(response.data);
        
        } catch (error) {
            throw new Error(error.message);
        }finally{
            setIsModalOpen(false);
        }

    };
    

    return (
        <div className="hidden md:block">
            <div className="flex flex-col pl-0 pt-4 pr-4 pb-4 w-[300px] min-w-[300px] min-h-screen text-center md:block">
                <div className="mb-[50px] text-amber-700 text-2xl">
                    <strong>To-Do-App</strong>
                    </div>
                <div className="mx-10 mb-[50px] p-3 border-gray-300 shadow-lg rounded-[10px]  px-8 items-center" >
                    <div onClick={openModal} className="flex justify-between items-center">
                        <button  >Add Task</button>
                        
                        <svg className="w-8 h-8 text-amber-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    

                    {isModalOpen && (
                        <dialog id="my_modal_1" className="modal" open>
                        <div className="modal-box">
                    
                           
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <input type="text" placeholder="Add Task" className="py-2 my-2 px-2" value={task} onChange={(e) => setTask(e.target.value)} />
                                    <textarea className="py-2 my-2 px-2" placeholder="Add Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    <div className="flex justify-end gap-2 pt-2">
                                        <button className="btn" onClick={closeModal}>Cancel</button>
                                        <button type="submit" className="btn">save</button>
                                    </div>
                                    
                                </div>
                                
                            </form>
                            
                        </div>
                    </dialog>
                    )}
                    
                    
                </div>
                <div className="mb-[50px] pt-2 pb-2 border bg-yellow-500 pl-0 hover:bg-sky-700 hover:text-white">
                    <Link href="/">
                        Dashboard
                    </Link>
                    </div>
                <div className="pl-4 mb-[50px] hover:bg-sky-700 hover:text-white">
                    <Link href="/active-tasks">
                        Active
                    </Link>
                    
                    </div>
                <div className="pl-4 my-2 hover:bg-sky-700 hover:text-white">
                    <Link href="/completed-tasks">
                        Completed
                    </Link>
                    
                    </div>
            </div>
        </div>
        
        
    )
};

export default Sidebar;
