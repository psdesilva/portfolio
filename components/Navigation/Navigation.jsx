import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import checkCurrentPage from './CheckCurrentPage'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
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
            <button onClick={() => setOpenMenu(!openMenu)} className={style.menuButton}>{openMenu ? <AiOutlineClose/> :  <AiOutlineMenu />}</button>
            <div className={style.navMenu}>
                <nav className={`${style.container} ${openMenu ? style.open : ''}`}>
                    <div className={style.content}>
                        <main className={style.navContainer}>
                            <Link href="/"><a className={checkCurrentPage('/')}>Home</a></Link>
                            <Link href="/about"><a className={checkCurrentPage('/about')}>About</a></Link>
                            <div className={style.portfolioContainer}>
                                <button onClick={() => setSubMenuOpen(!subMenuOpen)} className={style.portfolio}>Portfolio <FaChevronRight className={`${style.chevron} ${subMenuOpen && style.rotated}`}/></button>
                                <div className={`${style.subMenu} ${subMenuOpen ? style.subMenuOpen : ''}`}>
                                    <Link href="/portfolio/web"><a className={checkCurrentPage('/portfolio/web')}>Web Development</a></Link>
                                    <Link href="/portfolio/ux"><a className={checkCurrentPage('/portfolio/ux')}>User Experience</a></Link>
                                </div>
                            </div>
                            <a href="/PdeSilva-resume.pdf" target="_blank">Resume</a>
                            <Link href="/contact"><a className={checkCurrentPage('/contact')}>Contact</a></Link>
                        </main>
                        <footer className={style.footerContainer}>
                            <p>Let's connect!</p>
                            <div className={style.connectContainer}>
                                <a href="https://github.com/psdesilva" target="_blank"><FaGithub /></a>
                                <a href="https://www.facebook.com/chknrss" target="_blank"><FaFacebookF /></a>
                                <a href="https://www.linkedin.com/in/priyanka-de-silva-b391451b2/" target="_blank"><FaLinkedinIn /></a>
                                <a href="mailto:prnkdslv@gmail.com" target="_blank"><FaEnvelope /></a>
                            </div>
                        </footer>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation
