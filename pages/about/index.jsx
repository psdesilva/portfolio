import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { FaQuestion } from 'react-icons/fa'
import style from './About.module.css'

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])

    return (
      <div className={style.page}>
        <Head>
            <title>About | Pdesilva's Portfolio</title>
        </Head>
        <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1>About</h1>
        </header>
        <main className={style.container}>
            <section className={style.topText}>
                <p className={`${style.tagline} ${loading ? '' : style.taglineLoaded}`}>Hey there! My name is Priyanka and I'm a UX Designer with experience in Web Development.</p>
                <aside className={`${style.topImage} ${loading ? '' : style.topImageLoaded}`}>
                    <Image 
                        src="/me72.jpg"
                        alt="picture-of-myself"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                    />
                </aside>
                <p className={`${style.paragraphTop} ${loading ? '' : style.paragraphLoaded}`}>{`After finishing O/Ls, I struggled to find something I genuinely enjoyed doing. I dabbled in Aerospace Engineering and Computer Science before I finally earned a Cognitive Science Bachelor's degree with a minor in Psychology.`}</p>
                <p className={`${style.paragraphTop} ${loading ? '' : style.paragraphLoaded}`}>{`Afterwards, I was encouraged to pursue a Master's degree, and was recommended the Human-Computer Interaction program. Two and a half years later, I was a Master's degree holder.`}</p>
            </section>
            <aside className={`${style.bottomImage} ${loading ? '' : style.bottomImageLoaded}`}>
                <Image 
                    src="/IMG_2769.jpg"
                    alt="using-the-hololens"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center 25%"
                />
            </aside>
            <section className={style.bottomText}>
                <p className={`${style.paragraphBtm} ${loading ? '' : style.paragraphLoaded}`}>{`In January of 2020, I returned back to Sri Lanka. While I was trying to enjoy being back home, COVID-19 began its rampage. During this time, I became restless merely sitting around and home, and decided to add web development to my repertoire of skills.`}</p>
                <p className={`${style.paragraphBtm} ${loading ? '' : style.paragraphLoaded}`}>{`Once I was confident that this knowledge would be helpful in my pursuit of a career in UX design, I forayed into the ever-competetive job market hoping to utlize my knowledge in psychology, design and development to create pleasant and satisfying experiences for my users, clients and colleagues alike.`}</p>
            </section>
        </main>
        <footer className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1><FaQuestion/></h1>
        </footer>
      </div>
    )
}