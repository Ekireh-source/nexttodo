
import '@styles/globals.css';


export const metadata =  {
    "title": "Todo-App",
    "description": "by Ekireh-source",
};

const CustomLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className='flex items-start justify-between'>
           
        { children }
            
        </body>
    </html>
    
  )
};






export default CustomLayout;