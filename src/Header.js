import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {

    const [burguerMenu , setBurguerMenu ] = useState(false)    

    return (
        
        <div>
            <header className="fixed z-40 w-screen">
                <div className="backgroundBlue pt-6 pb-5">
                    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
                        <div className="flex flex-1 items-center">
                            <div className="flex w-full items-center justify-between lg:w-auto">
                                <HashLink to={'/#presentacion'}>
                                    <span className="font1 color1 text-2xl hover:text-white">CrewInsights</span>
                                </HashLink>
                                <div className="-mr-2 flex items-center lg:hidden">
                                    <button type="button" onClick={()=>{setBurguerMenu(true)}} className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden space-x-2 lg:space-x-8 lg:ml-10 lg:flex">
                                <HashLink to={"/#sobre-nosotros"} className="text-base font-medium text-white">Sobre Nosotros</HashLink>
                                <HashLink to={"/#transformacion-operativa"} className="text-base font-medium text-white">Transformación Operativa</HashLink>
                                <HashLink to={"/#nuestras-soluciones"} className="text-base font-medium text-white">Nuestras Soluciones</HashLink>
                                <HashLink to={"/#nuestro-proposito"} className="text-base font-medium text-white">Nuestro propósito</HashLink>
                                <HashLink to={"/#opiniones"} className="text-base font-medium text-white">Opiniones</HashLink>
                                <HashLink to={"/#contacto"} className="text-base font-medium text-white">Contacto</HashLink>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={ burguerMenu ? "absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition lg:hidden" : "absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition hidden"}>
                    <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center justify-between px-5 pt-4">
                            <div>
                                <p className='font1 color1 text-2xl hover:text-white'>Crewdule</p>
                            </div>
                            <div className="-mr-2">
                                <button type="button" onClick={()=>{setBurguerMenu(false)}} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="pt-5 pb-6">
                            <div className="space-y-1 px-2">
                                <HashLink to={"/#sobre-nosotros"} onClick={()=> {setBurguerMenu(false)}} className="block rounded-md px-3 py-2 text-base text-center font-medium text-gray-900 hover:bg-gray-50">Sobre Nosotros</HashLink>
                                <HashLink to={"/#transformacion-operativa"} onClick={()=> {setBurguerMenu(false)}} className="block rounded-md px-3 py-2 text-base text-center font-medium text-gray-900 hover:bg-gray-50">Transformación Operativa</HashLink>
                                <HashLink to={"/#nuestras-soluciones"} onClick={()=> {setBurguerMenu(false)}} className="block rounded-md px-3 py-2 text-base text-center font-medium text-gray-900 hover:bg-gray-50">Nuestras Soluciones</HashLink>
                                <HashLink to={"/#nuestro-proposito"} onClick={()=> {setBurguerMenu(false)}} className="block rounded-md px-3 py-2 text-base text-center font-medium text-gray-900 hover:bg-gray-50">Nuestro propósito</HashLink>
                                <HashLink to={"/#opiniones"} onClick={()=> {setBurguerMenu(false)}} className="block rounded-md px-3 py-2 text-base text-center font-medium text-gray-900 hover:bg-gray-50">Opiniones</HashLink>
                                <HashLink to={"/#contacto"} onClick={()=> {setBurguerMenu(false)}} className="block rounded-md px-3 py-2 text-base text-center font-medium text-gray-900 hover:bg-gray-50">Contacto</HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

        
        
    )
}

export default Header