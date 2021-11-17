import { useState, useEffect } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import Head from 'next/head'
import letterLeser from '../../../../writeups/LLWriteUp';
import ProjectImages from '../../../../components/ProjectImages/ProjectImages';
import style from '../../../../styles/Project.module.css'


export default function Stickley() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])

    const { section1, section2, section3, section4, section5 } = letterLeser;

    return (
      <div className={style.page}>
        <Head>
          <title>LetterLeser | UX | Pdesilva's Portfolio</title>
        </Head>
        <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1>LetterLeser</h1>
        </header>
        <main className={style.container}>
          <section className={`${style.section} ${style.section1} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section1.title}</h2>
            <p className={style.paragraph}>{section1.p1}</p>
            <p className={style.paragraph}>{section1.p2}</p>
          </section>
          <section className={`${style.section} ${style.section2} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section2.title}</h2>
            <p className={style.paragraph}>{section2.p1}</p>
            <p className={style.paragraph}>{section2.p2}</p>
            <p className={style.paragraph}>{section2.p3}</p>
            <ProjectImages imageArray={section2.images1[1]} height={section2.images1[0]} description={section2.images1[2]}/>
            <p className={style.paragraph}>{section2.p4}</p>
            <p className={style.paragraph}>{section2.p5}</p>
            <p className={style.paragraph}>{section2.p6}</p>
          </section>
          <section className={`${style.section} ${style.section3} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section3.title}</h2>
            <p className={style.paragraph}>{section3.p1}</p>
            <p className={style.paragraph}>{section3.p2}</p>
            <p className={style.paragraph}>{section3.p3}</p>
          </section>
          <section className={`${style.section} ${style.section4} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section4.title}</h2>
            <p className={style.paragraph}>{section4.p1}</p>
            <ProjectImages imageArray={section4.images1[1]} height={section4.images1[0]} description={section4.images1[2]}/>
            <ProjectImages imageArray={section4.images2[1]} height={section4.images2[0]} description={section4.images2[2]}/>
            <ProjectImages imageArray={section4.images3[1]} height={section4.images3[0]} description={section4.images3[2]}/>
            <p className={style.paragraph}>{section4.p2}</p>
            <ProjectImages imageArray={section4.images4[1]} height={section4.images4[0]} description={section4.images4[2]}/>
            <p className={style.paragraph}>{section4.p3}</p>
          </section>
          <section className={`${style.section} ${style.section5} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section5.title}</h2>
            <p className={style.paragraph}>{section5.p1}</p>
            <p className={style.paragraph}>{section5.p2}</p>
            <p className={style.paragraph}>{section5.p3}</p>
          </section>
        </main>
        <footer className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1><FaEnvelope/></h1>
        </footer>
      </div>
    )
  }
