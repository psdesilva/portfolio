import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import style from './Navstyle.module.css'

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const router = useRouter();

    return (
        <>
            <button onClick={() => setOpenMenu(!openMenu)} className={style.menuButton}><AiOutlineMenu /></button>
            <div className={style.navMenu}>
                <nav className={`${style.container} ${openMenu ? style.open : ''}`}>
                    <main className={style.mainContainer}>
                        <header className={style.logoContainer}>
                            <Image 
                                src="/logo.svg"
                                alt="logo"
                                width={150}
                                height={80}
                            />
                        </header>
                        <section className={style.navContainer}>
                            <Link href="/"><a>Home</a></Link>
                            <Link href="/about"><a>About</a></Link>
                            <Link href="#"><a>Portfolio</a></Link>
                            <Link href="#"><a>Resume</a></Link>
                            <Link href="/contact"><a>Contact</a></Link>
                        </section>
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
                </nav>
            </div>
        </>
    )
}

export default Navigation
