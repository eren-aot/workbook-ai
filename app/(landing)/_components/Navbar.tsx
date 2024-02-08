import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='sticky top-0 shadow z-40 bg-slate-900 text-white'>
            <nav className='flex items-center justify-between gap-4 max-w-7xl mx-auto px-4 py-3'>
                <Link href={"/"} className='flex gap-1 items-center hover:bg-white/10 rounded-2xl px-2 transition'>
                    <strong className='font-extrabold tracking-tight text-base md:text-lg'>WorkBook</strong>
                    <span className='font-extrabold text-quinaryColor-quinary-400'>PDF</span>
                </Link>
                <div className='flex-1 hidden md:flex items-center justify-start gap-2 text-sm '>
                    <Link href={"/"} className='transition font-bold rounded-2xl px-3 py-0.5 bg-quinaryColor-quinary-500/10 hover:bg-quinaryColor-quinary-500/10 text-quinaryColor-quinary-500'>How it Works</Link>
                    <Link href={"/"} className='transition font-bold rounded-2xl px-3 py-0.5 text-white/80 hover:bg-white/10'>Workbooks</Link>
                    <Link href={"/"} className='transition font-bold rounded-2xl px-3 py-0.5 text-white/80 hover:bg-white/10'>Pricing</Link>
                    <Link href={"/"} className='transition font-bold rounded-2xl px-3 py-0.5 text-white/80 hover:bg-white/10'>Free Samples</Link>
                </div>
                <Button size="sm">Start Now</Button>
            </nav>
        </header>
    )
}

export default Navbar