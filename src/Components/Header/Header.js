import { useEffect, useState } from 'react';
import Nav from './Nav';
import Card from './Card';

export default function Header() {

    // list menu
    const [Menu, setMenu] = useState([
        { id: 1, title: "صفحه اصلی" },
        {
            id: 2, title: "فروشگاه", subMenu: [
                { id: 1, title: 'قهوه ویژه' },
                { id: 2, title: 'ویژه در سطح جهانی' },
                { id: 3, title: 'قهوه درجه یک' },
                { id: 4, title: 'ترکیبات تجاری' },
            ]
        },
        { id: 3, title: "دیکشنری" },
        { id: 4, title: "بلاگ" },
        { id: 5, title: "درباره ما" },
        { id: 6, title: "تماس با ما" },
    ])

    const [Dark, setDark] = useState(0)

    // change mode dark
    useEffect(() => {
        if (Dark) {
            document.body.classList.add('dark')
        }
        else {
            document.body.classList.remove('dark')
        }

    }, [Dark])

    // change icon mode dark
    const changeMode = () => {
        setDark(!Dark)

    }



    return (
        <header className='fixed top-9 left-0 right-0  bg-black/50 w-[90%] h-24 mx-auto flex items-center rounded-2xl py-5 px-10 text-xl backdrop-blur-[6px]'>
            <div className='flex justify-between w-full items-center '>
                {/* All App Icon */}
                <svg className='hidden'>
                    <symbol id='shopping-cart' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </symbol>

                    <symbol id='moon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </symbol>

                    <symbol id='sun' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </symbol>

                    <symbol id='arrow-left' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </symbol>




                </svg>
                {/* Logo and menu */}
                <nav className='flex gap-x-3.5 lg:gap-x-9 items-center h-14'>
                    {/* Logo */}
                    <div>
                        <img src='images/app-logo.png' alt='CoffeeShop-Logo'></img>
                    </div>
                    {/* Menu */}
                    <ul className='flex gap-x-4 lg:gap-x-5 tracking-tightest h-full child:leading-[56px]'>
                        {Menu.map(menu => (
                            <Nav  key={menu.id} {...menu} />

                        ))}

                    </ul>
                </nav>
                {/* Cart & Switch Btn Toggle & Login link */}
                <div className='flex gap-x-5 text-orange-200 items-center '>
                    {/* Cart & Switch Btn Toggle */}
                    <div className='flex gap-x-5'>
                        {/* Cart */}
                        <div>
                            {/* manage cart */}
                            <div className='py-[12px] relative group'>
                                <svg className='w-8 h-8 '>
                                    <use href='#shopping-cart'></use>
                                </svg>

                                <div className='absolute left-0 border-t-[3px] border-orange-300 bg-white dark:bg-zinc-700  w-[400px] rounded-2xl font-DanaMedium top-full p-4 opacity-0 group-hover:opacity-100  transition-all delay-75' >
                                    <Card/>
                                </div>

                            </div>
                        </div>
                        {/* Switch Btn Toggle */}
                        <div className='py-[12px]  cursor-pointer' onClick={changeMode} >

                            <svg className='w-8 h-8'>
                                {/* show mode dark with onclick user */}
                                {Dark == 0 ? (
                                    <use href='#moon'></use>
                                )
                                    :
                                    (<use href='#sun'></use>)

                                }

                            </svg>


                        </div>
                    </div>

                    {/* divided border */}
                    <span className='block w-px h-14 bg-white/20'>

                    </span>
                    {/* Login Link */}
                    <a className='flex gap-x-2.5 items-center tracking-tightest'>
                        <svg className='w-8 h-8 rotate-180'>
                            <use xlinkHref='#arrow-left'></use>
                        </svg>
                        <span className='hidden lg:inline-block'>  ورود  |  ثبت‌ نام </span>

                    </a>

                </div>
            </div>
        </header>
    )

}