import { useState, useEffect } from 'react'
import Head from 'next/head'
import useMediaQuery from '../../hooks/MediaQuery'
import Link from 'next/link'
import Button from '../../components/Button/Button'
import { FaPhone } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { IoIosPhonePortrait } from 'react-icons/io'
import style from './Contact.module.css'

export default function Contact() {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [messageStatus, setMessageStatus] = useState('')

  const isBreakPoint = useMediaQuery(799)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessageStatus('')
    setSubmitting(true)
    console.log('Sending')
    let data = {
      name,
      email,
      subject,
      message
    }

    const requestOptions = {
      method: 'POST',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }

    fetch('/api/contact', requestOptions)
    .then(res => {
      console.log('Response received')
      if (res.status == 200) {
        console.log('Response succeeded!')
        setSubmitting(false)
        setMessageStatus('Message Sent Successfully!')
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      } else {
        setMessageStatus('Error: Please try again, or use a different method of contact.')
      }
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className={style.page}>
      <Head>
        <title>Contact | Pdesilva's Portfolio</title>
      </Head>
      <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
          <h1>Contact</h1>
      </header>
      <main className={style.container}>
          <section className={style.details}>
            <Link href="tel:+94772255063"><a className={`${style.detail1} ${loading ? '' : style.detailLoaded}`}><IoIosPhonePortrait /> {isBreakPoint ? <p>{`+94 (77) 2255 063`}</p> : <p>{`Phone: +94 (77) 2255 063`}</p>}</a></Link>
            <Link href="mailto:prnkdslv@gmail.com"><a className={`${style.detail2} ${loading ? '' : style.detailLoaded}`}><FaEnvelope /> {isBreakPoint ? <p>{`prnkdslv@gmail.com`}</p> : <p>{`E-mail: prnkdslv@gmail.com`}</p>}</a></Link>
          </section>
          <section className={style.formContainer}>
            <p className={`${style.formTitle} ${loading ? '' : style.detailLoaded}`}>{`Or just message me on here :)`}</p>
            <form className={`${style.form} ${loading ? '' : style.detailLoaded}`} onSubmit={handleSubmit}>
              {messageStatus !== '' ? <p className={style.messageStatus}>{messageStatus}</p> : ''}
              <div className={style.inputGroup}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your Name" name="name" onChange={(e)=>{setName(e.target.value)}} value={name} className={style.inputField} required/>
              </div>
              <div className={style.inputGroup}>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="Your E-mail"name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className={style.inputField} required/>
              </div>
              <div className={style.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="Subject"name="subject" onChange={(e)=>{setSubject(e.target.value)}} value={subject} className={style.inputField} />
              </div>
              <div className={style.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Message" onChange={(e)=>{setMessage(e.target.value)}} value={message} className={style.inputField} required/>
              </div>
              <div className={style.buttonContainer}>
                <Button submitBtn={true} text={"Send"}/>
                <div className={`${submitting ? style.loadingRing : ''} ${style.ldsRing} `}><div></div><div></div><div></div><div></div></div>
              </div>
            </form>
          </section>
      </main>
      <footer className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
          <h1><FaPhone/></h1>
      </footer>
    </div>
  )
}