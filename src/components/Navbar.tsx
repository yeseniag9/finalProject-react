import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false) 

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }  

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className="flex items-center flex-wrap bg-red-600 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/" className="font-semibold text-xl tracking-tight">My App</Link> 
            </div>
            <div className="block">
                <button onClick={dropDown} className="flex items-center px-3 py-2 text-black border rounded border-black hover:text-white hover:border-white">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            { isVisible ? ( 
                <div className="block">
                    <div className="flex flex-row text-sm lg:flex-grow pl-3">
                        <Button className="p-3 m-5 bg-black justify-center rounded-lg">
                            <div>
                                <Link to="/account" onClick={ clicked } className="flex place-items-center mt-4 pl-6 pr-2 lg:inline-block lg:mt-0 text-zinc-400 hover:text-white mr-4">
                                    Account
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-black justify-center rounded-lg">
                            <div>
                                <Link to="/dashboard" onClick={ clicked } className="flex place-items-center mt-4 ml-2 pl-2 lg:inline-block lg:mt-0 text-zinc-400 hover:text-white mr-4">
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-black justify-center rounded-lg">
                            <div>
                                <Link to="/sneaker" onClick={ clicked } className="flex place-items-center mt-4 ml-2 pl-4 pr-3 lg:inline-block lg:mt-0 text-zinc-400 hover:text-white mr-4">
                                    Sneaker
                                </Link>
                            </div>
                        </Button>
                        {
                            !auth.currentUser ?

                            <Button className="p-3 m-5 bg-black justify-center rounded-lg">
                                <div>
                                    <Link to="/account" onClick={ () => { signInOnClick()}} className="flex place-items-center mt-4 pl-8 pr-8 lg:inline-block lg:mt-0 text-zinc-400 hover:text-white">
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className="p-3 m-5 bg-black justify-center rounded-lg">
                                <div>
                                    <Link to="/" onClick={ () => { signOutOnClick()}} className="flex place-items-center mt-4 pl-7 pr-7 lg:inline-block lg:mt-0 text-zinc-400 hover:text-white">
                                        Logout
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div> 
                ) : (
                <></>
            ) }
        </nav>
    )
}

export default Navbar