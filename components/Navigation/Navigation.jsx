import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import checkCurrentPage from './CheckCurrentPage'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import style from './Navstyle.module.css'

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(true)

    return (
        <>
            <button onClick={() => setOpenMenu(!openMenu)} className={style.menuButton}><AiOutlineMenu /></button>
            <div className={style.navMenu}>
                <nav className={`${style.container} ${openMenu ? style.open : ''}`}>
                    {/* <div className={style.logoContainer}>
                        <Image 
                            src="/logo.svg"
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div> */}
                    <div className={style.content}>
                        <main className={style.navContainer}>
                            <Link href="/"><a className={checkCurrentPage('/')}>Home</a></Link>
                            <Link href="/about"><a className={checkCurrentPage('/about')}>About</a></Link>
                            <div className={style.portfolioContainer}>
                                <button onClick={() => setSubMenuOpen(!subMenuOpen)} className={style.portfolio}>Portfolio <FaChevronRight className={`${style.chevron} ${subMenuOpen && style.rotated}`}/></button>
                                <div className={`${style.subMenu} ${subMenuOpen ? style.subMenuOpen : ''}`}>
                                    <Link href="#"><a>Web Development</a></Link>
                                    <Link href="#"><a>User Experience</a></Link>
                                </div>
                            </div>
                            <Link href="#"><a>Resume</a></Link>
                            <Link href="/contact"><a className={checkCurrentPage('/contact')}>Contact</a></Link>
                        </main>
                        <footer className={style.footerContainer}>
                            <p>Let's connect!</p>
                            <div className={style.connectContainer}>
                                <Link href="#"><a><FaGithub /></a></Link>
                                <Link href="#"><a><FaFacebookF /></a></Link>
                                <Link href="#"><a><FaLinkedinIn /></a></Link>
                                <Link href="#"><a><FaEnvelope /></a></Link>
                            </div>
                        </footer>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation
