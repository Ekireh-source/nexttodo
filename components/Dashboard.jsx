"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import MobileDropdown from './MobileDropdown';
import axios from 'axios';
  


const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async() => {
            try {
        
                const response = await axios.get("http://localhost:3000/api/task");
                setTasks(response.data);
                console.log("data: ",response.data);
            } catch (error) {
                throw error;
                
            }
        
        
          
        }
        getTasks();
        

    }, [])

    


  return (
    <section className="mx-10">
       <MobileDropdown />
        <div className="flex justify-between border-gray-300 shadow-lg rounded-[10px] py-[50px] items-center">
            <div className="px-2">
                <h1 className="font-bold text-[25px] whitespace-nowrap lg:text-[45px]">Hello, Beautiful Human!</h1>
                <p className="text-[15px] lg:text-[20px]">What do you want to do today?</p>
            </div>
            <div>
            <Image
                src="/images/avatar.png"
                alt="avatar"
                width={300}
                height={250}
            />

            </div>
        </div>
        <div className="flex gap-4 mt-4 lg:hidden">
                <Card className="bg-amber-700 rounded-[10px] h-20 flex-1 items-center">
                    <CardHeader className="text-white flex flex-row justify-around items-center text-center pt-3">
                        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                        </svg>
                        <div>
                        <CardTitle className="">40%</CardTitle>
                        <CardDescription className="whitespace-nowrap">Completed tasks</CardDescription>
                        </div>
                        
                    </CardHeader>
                    
                </Card>

                <Card className="bg-yellow-500 rounded-[10px] h-20 flex-1">
                    <CardHeader className="text-white flex flex-row justify-around items-center text-center pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <div>
                            <CardTitle className="text-center">60%</CardTitle>
                            <CardDescription className="text-center whitespace-nowrap">Active tasks</CardDescription>
                        </div>
                        
                    </CardHeader>
                    
                </Card>
            </div>
        <div className="mt-[56px]">
            <div className="flex items-center justify-between ">
                <div>
                <h1 className="text-[20px]">
                    Today’s Tasks
                </h1>
                </div>
                
                <div className="flex justify-between gap-4">
                    <p className="text-amber-700 text-[10px]">
                        Delete All
                    </p>
                    <p className="text-[10px]">
                        Monday, 18 December 2023
                    </p>
                </div>
                
            </div>
            

        </div>
        <div className="flex justify-between gap-4 items-center">
            <div className="w-full">
                {tasks.map((task) => (
                    <div key={task._id} className=" border-gray-300 shadow-lg rounded-[10px] my-4 py-4 flex items-center px-3">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>

                        <p className="px-10">{ task.task }</p>
                    </div>
                ))}
                
                
                <div className="bg-yellow-500 border-gray-300 rounded-[10px] my-4 py-4 flex items-center px-3">
                    <svg className="w-6 h-6 text-amber-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                    </svg>

                    <p className="px-10">
                        Prepare presentations
                    </p>   
                </div>
                <div className="bg-yellow-500 border-gray-300 rounded-[10px] my-4 py-4 flex items-center px-3">
                    <svg className="w-6 h-6 text-amber-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                    </svg>
                    <p className="px-10">
                        Go to the gym
                    </p>   
                </div>
            </div>
            <div className="hidden lg:block">
                <Card className="bg-amber-700 rounded-[10px] h-40 pt-2 mb-8">
                    <CardHeader className="text-white flex flex-col items-center">
                        <svg className="w-10 h-10 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                        </svg>
                        <CardTitle className="text-center">40%</CardTitle>
                        <CardDescription className="text-center whitespace-nowrap">Completed tasks</CardDescription>
                    </CardHeader>
                    
                </Card>

                <Card className="bg-yellow-500 rounded-[10px] h-40 pt-2">
                    <CardHeader className="text-white flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>


                        <CardTitle className="text-center">60%</CardTitle>
                        <CardDescription className="text-center whitespace-nowrap">Active tasks</CardDescription>
                    </CardHeader>
                    
                </Card>
            </div>

        </div>
        
    </section>
  )
}

export default Dashboard