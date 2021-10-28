import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '../../components/Button/Button'
import { FaPhone } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { IoIosPhonePortrait } from 'react-icons/io'
import style from './Contact.module.css'

export default function Contact() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])

    return (
      <div className={style.page}>
        <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1>Contact</h1>
        </header>
        <main className={style.container}>
            <section className={style.details}>
              <Link href="tel:+94772255063"><a className={`${style.detail1} ${loading ? '' : style.detailLoaded}`}><IoIosPhonePortrait /> <p>{`Phone: +94 (77) 2255 063`}</p></a></Link>
              <Link href="mailto:prnkdslv@gmail.com"><a className={`${style.detail2} ${loading ? '' : style.detailLoaded}`}><FaEnvelope /> <p>{`E-mail: prnkdslv@gmail.com`}</p></a></Link>
            </section>
            <section className={style.formContainer}>
              <p className={`${style.formTitle} ${loading ? '' : style.detailLoaded}`}>{`Or just message me on here :)`}</p>
              <form className={`${style.form} ${loading ? '' : style.detailLoaded}`}>
                <div className={style.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your Name" name="name" className={style.inputField} required/>
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="email">E-mail</label>
                  <input id="email" type="text" placeholder="Your E-mail"name="email" className={style.inputField} required/>
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" placeholder="Subject"name="subject" className={style.inputField} />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Message" className={style.inputField} required/>
                </div>
                <Button submitBtn={true} text={"Send"}/>
              </form>
            </section>
        </main>
        <footer className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1><FaPhone/></h1>
        </footer>
      </div>
    )
  }