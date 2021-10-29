import { useState, useEffect } from 'react'
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
        <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1>About</h1>
        </header>
        <main className={style.container}>
            <section className={style.topText}>
                <p className={`${style.tagline} ${loading ? '' : style.taglineLoaded}`}>Hey there! My name is Priyanka and I'm a front-end developer with a background in UX Research.</p>
                <p className={`${style.paragraphTop} ${loading ? '' : style.paragraphLoaded}`}>{`After finishing O/Ls, I struggled to find something I genuinely enjoyed doing. I dabbled in Aerospace Engineering and Computer Science before I finally earned a Cognitive Science Bachelor's with a minor in Psychology.`}</p>
                <p className={`${style.paragraphTop} ${loading ? '' : style.paragraphLoaded}`}>{`Afterwards, I was encouraged to pursue a Master's degree, and was recommended the Human-Computer Interaction program. Two and a half years later, I was a Master's degree holder.`}</p>
            </section>
            <section className={style.bottomText}>
                <p className={`${style.paragraphBtm} ${loading ? '' : style.paragraphLoaded}`}>{`In January of 2020, I returned back to Sri Lanka. While I was trying to enjoy being back home, COVID-19 began its rampage. During this time, I went through a period of ups and downs and began to reconsider what I wanted to do with myself.`}</p>
                <p className={`${style.paragraphBtm} ${loading ? '' : style.paragraphLoaded}`}>{`This was when I discovered the joy in creating websites, while creating a personal portfolio. Fueled by this new found interest, I began to learn the ins and outs of web development, and decided to follow a career in front-end development specializing in React. `}</p>
            </section>
            <aside className={`${style.topImage} ${loading ? '' : style.topImageLoaded}`}>
                <Image 
                    src="/me72.jpg"
                    alt="picture-of-myself"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                />
            </aside>
            <aside className={`${style.bottomImage} ${loading ? '' : style.bottomImageLoaded}`}>
                <Image 
                    src="/IMG_2769.jpg"
                    alt="using-the-hololens"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center 25%"
                />
            </aside>
        </main>
        <footer className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1><FaQuestion/></h1>
        </footer>
      </div>
    )
  }