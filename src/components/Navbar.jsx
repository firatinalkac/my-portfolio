"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import NavLink from "./NavLink"

const links = [
  {url: '/', title: 'Home'},
  {url: '/about', title: 'About'},
  {url: '/portfolio', title: 'Portfolio'},
  {url: '/contact', title: 'Contact'}
]

const socialMediaAccounts = [
  {url: "github", image: 'github-light-icon'},
  {url: "linkedin", image: 'linkedin-light-icon'},
]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleClasses = `h-1 w-full rounded ${open ? 'bg-white' : 'bg-black' }`
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xlg:px-28'>
      {/* LINKS */}
      <div className="hidden md:flex gap-3 w-1/3">
        {links.map((link) => <NavLink link={link} key={link.title} /> )}
      </div>
      {/* LINKS */}
      {/* LOGO */}
      <div className="flex xl:w-1/3 xl:justify-center z-50">
        <Link href="/" className="text-sm bg-black rounded-md p-1">
          <span className='text-white'>firatinlkc</span>
          <span className="text-black bg-white rounded ml-1 px-1">.dev</span>
        </Link>
      </div>
      {/* LOGO */}
      {/* Social Media */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {
          socialMediaAccounts.map((account, index) => 
            <Link href={account.url} key={index}>
              <Image src={`${account.image}.svg`} width={20} height={20} alt={account.url} />
            </Link>
          )
        }
      </div>
      {/* Social Media */}
      {/* Responsive Menu */}
      <div className="md:hidden">
        <button className="w-8 h-6 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev) => !prev)}>
          <div className={toggleClasses}></div>
          <div className={toggleClasses}></div>
          <div className={toggleClasses}></div>
        </button>
        {/* MENU LIST */}
        {open && <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
          {
            links.map((link) => {
              return (
                <Link href={link.url} key={link.title}>{link.title}</Link>
              )
            })
          }
        </div>}
      </div>
    </div>
  )
}
