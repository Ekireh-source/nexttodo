import Link from "next/link"

const MobileDropdown = () => {
    return(
        <>
             <div className="h-12 bg-yellow-500 rounded-[10px] mb-3 flex items-center md:hidden">
                <div className="flex-1 px-2">
                    <a className="text-lg">dashboard</a>
                </div>
                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-center">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn w-full flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li><Link href='/active-tasks'>Active</Link></li> 
                        <li><Link href='/completed-tasks'>Completed</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MobileDropdown;

