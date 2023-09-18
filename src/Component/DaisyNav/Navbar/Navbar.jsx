import { useState } from "react";
import Link from "../../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
          const [open, setOpen] =useState(false);
          const routes = [
                    { id: 1, path: "/", name: "Home", description: "The default route that loads when the app starts." },
                    { id: 2, path: "/about", name: "About", description: "A route that provides information about the app." },
                    { id: 3, path: "/products", name: "Products", description: "A route that lists all the products available in the app." },
                    { id: 4, path: "/contact", name: "Contact", description: "A route that provides contact information." },
                    { id: 5, path: "/profile/:username", name: "UserProfile", description: "A dynamic route that displays user profiles." }
                  ];
                  
          return (

                    <nav>
                              <div className="md:hidden" onClick={() => setOpen(!open)}>
                                        {
                                           open === true? <AiOutlineClose className="text-3xl "></AiOutlineClose>: 
                                           <AiOutlineMenu className="text-3xl "></AiOutlineMenu>       
                                        }
                              
                              </div>
                              <ul className="md:flex">
                              {
                              routes.map(route => <Link key={route.id} route={route}></Link> )
                        } 
                    </ul>
                    </nav>
          );
};

export default Navbar;