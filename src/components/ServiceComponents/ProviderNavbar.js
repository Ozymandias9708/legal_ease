import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ProviderNavbar = ({ active }) => {
    const location = useLocation();
    useEffect(() => { }, [location])
    return (
        <div>
            <header className="text-gray-600 body-font shadow-md fixed top-0 w-full z-10 bg-white">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">LegalEase.com</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
                        <Link className={`mr-5 text-sm p-2 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all hover:transition-all ${active === 'dashboard' ? 'bg-blue-600 text-white' : ''} ${location.pathname === '/serviceLogin' || location.pathname ==='/serviceRegister' ? 'hidden' : ''}`} to='/providerHome'><i className="fa-solid fa-home mr-2"></i>Dashboard</Link>
                        <Link className={`mr-5 text-sm p-2 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all hover:transition-all ${active === 'cases' ? 'bg-blue-600 text-white' : ''} ${location.pathname === '/serviceLogin' || location.pathname ==='/serviceRegister' ? 'hidden' : ''}`} to='/providerCaseslist'><i className="fa-solid fa-list mr-2"></i>Cases Taken</Link>
                        <Link className={`mr-5 text-sm p-2 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all hover:transition-all ${active === 'clients' ? 'bg-blue-600 text-white' : ''} ${location.pathname === '/serviceLogin' || location.pathname ==='/serviceRegister' ? 'hidden' : ''}`} to='/providerClients'><i className="fa-solid fa-people-group mr-2"></i>Clients</Link>
                        <Link className={`mr-5 text-sm p-2 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all hover:transition-all ${active === 'request' ? 'bg-blue-600 text-white' : ''} ${location.pathname === '/serviceLogin' || location.pathname ==='/serviceRegister' ? 'hidden' : ''}`} to='/providerRequests'><i className="fa-solid fa-message mr-2"></i>Messages</Link>
                    </nav>
                    <ul className='flex'>
                        <li className={`m-2 hover:text-blue-600 ${location.pathname === '/serviceLogin' || location.pathname === '/serviceRegister' ? '' : 'hidden'}`}><Link to='/serviceLogin'>Login</Link></li>
                        <li className={`m-2 hover:text-blue-600 ${location.pathname === '/serviceLogin' || location.pathname === '/serviceRegister' ? '' : 'hidden'}`}><Link to='/serviceRegister'>Register</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default ProviderNavbar