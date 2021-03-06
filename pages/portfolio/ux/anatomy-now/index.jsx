import { useState, useEffect } from 'react'
import Head from 'next/head'
import { BiPlusMedical } from 'react-icons/bi'
import anatomyNow from '../../../../writeups/ANWriteUp';
import ProjectImages from '../../../../components/ProjectImages/ProjectImages';
import style from '../../../../styles/Project.module.css'


export default function AnatomyNow() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])

    const { section1, section2, section3, section4, section5, section6 } = anatomyNow;

    return (
      <div className={style.page}>
        <Head>
          <title>Anatomy Now | UX | Pdesilva's Portfolio</title>
        </Head>
        <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1>Anatomy Now</h1>
        </header>
        <main className={style.container}>
          <section className={`${style.section} ${style.section1} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section1.title}</h2>
            <p className={style.paragraph}>{section1.p1}</p>
            <p className={style.paragraph}>{section1.p2}</p>
            <ProjectImages imageArray={section1.images1[1]} height={section1.images1[0]} description={section1.images1[2]}/>
            <ProjectImages imageArray={section1.images2[1]} height={section1.images2[0]} description={section1.images2[2]}/>
            <p className={style.paragraph}>{section1.p3}</p>
          </section>
          <section className={`${style.section} ${style.section2} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section2.title}</h2>
            <p className={style.paragraph}>{section2.p1}</p>
            <p className={style.paragraph}>{section2.p2}</p>
            <ProjectImages imageArray={section2.images1[1]} height={section2.images1[0]} description={section2.images1[2]}/>
            <p className={style.paragraph}>{section2.p3}</p>
            <p className={style.paragraph}>{section2.p4}</p>
          </section>
          <section className={`${style.section} ${style.section3} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section3.title}</h2>
            <p className={style.paragraph}>{section2.p1}</p>
            <ProjectImages imageArray={section3.images1[1]} height={section3.images1[0]} description={section3.images1[2]}/>
          </section>
          <section className={`${style.section} ${style.section4} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section4.title}</h2>
            <p className={style.paragraph}>{section4.p1}</p>
            <ProjectImages imageArray={section4.images1[1]} height={section4.images1[0]} description={section4.images1[2]}/>
            <ProjectImages imageArray={section4.images2[1]} height={section4.images2[0]} description={section4.images2[2]}/>
            <p className={style.paragraph}>{section4.p2}</p>
          </section>
          <section className={`${style.section} ${style.section5} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section5.title}</h2>
            <p className={style.paragraph}>{section5.p1}</p>
            <p className={style.paragraph}>{section5.p2}</p>
            <p className={style.paragraph}>{section5.p3}</p>
            <ProjectImages imageArray={section5.images1[1]} height={section5.images1[0]} description={section5.images1[2]}/>
          </section>
          <section className={`${style.section} ${style.section6} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section6.title}</h2>
            <p className={style.paragraph}>{section6.p1}</p>
            <p className={style.paragraph}>{section6.p2}</p>
            <p className={style.paragraph}>{section6.p3}</p>
          </section>
        </main>
        <footer className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1><BiPlusMedical/></h1>
        </footer>
      </div>
    )
  }
