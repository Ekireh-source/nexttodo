import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';
import '@styles/globals.css';


export const metadata =  {
    "title": "Todo-App",
    "description": "by Ekireh-source",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className='flex items-start justify-between'>
            <Sidebar />
            <main className='w-full h-full'>
            <Navbar />
            { children }
            </main>
            
        </body>
    </html>
    
  )
}

export default RootLayout