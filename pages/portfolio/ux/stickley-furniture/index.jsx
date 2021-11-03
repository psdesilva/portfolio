import { useState, useEffect } from 'react'
import { GiSofa } from 'react-icons/gi'
import stickley from '../../../../writeups/SFWriteUp';
import ProjectImages from '../../../../components/ProjectImages/ProjectImages';
import style from '../../../../styles/Project.module.css'


export default function Stickley() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])

    const { section1, section2, section3, section4, section5 } = stickley;

    return (
      <div className={style.page}>
        <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1>Stickley</h1>
        </header>
        <main className={style.container}>
          <section className={`${style.section} ${style.section1} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section1.title}</h2>
            <p className={style.paragraph}>{section1.p1}</p>
            <p className={style.paragraph}>{section1.p2}</p>
            <ProjectImages imageArray={section1.images1[1]} height={section1.images1[0]} description={section1.images1[2]}/>
            <p className={style.paragraph}>{section1.p3}</p>
          </section>
          <section className={`${style.section} ${style.section2} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section2.title}</h2>
            <p className={style.paragraph}>{section2.p1}</p>
            <p className={style.paragraph}>{section2.p2}</p>
            <p className={style.paragraph}>{section2.p3}</p>
            <ul>
                <li>{section2.list.l1}</li>
                <li>{section2.list.l2}</li>
            </ul>
          </section>
          <section className={`${style.section} ${style.section3} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section3.title}</h2>
            <p className={style.paragraph}>{section3.p1}</p>
            <ProjectImages imageArray={section3.images1[1]} height={section3.images1[0]} description={section3.images1[2]}/>
            <ProjectImages imageArray={section3.images2[1]} height={section3.images2[0]} description={section3.images2[2]}/>
            <p className={style.paragraph}>{section3.p2}</p>
            <p className={style.paragraph}>{section3.p3}</p>
            <ProjectImages imageArray={section3.images4[1]} height={section3.images4[0]} description={section3.images4[2]}/>
            <p className={style.paragraph}>{section3.p4}</p>
          </section>
          <section className={`${style.section} ${style.section4} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section4.title}</h2>
            <p className={style.paragraph}>{section4.p1}</p>
            <ol>
                <li>{section4.list.l1}</li>
                <li>{section4.list.l2}</li>
                <li>{section4.list.l3}</li>
                <li>{section4.list.l4}</li>
                <li>{section4.list.l5}</li>
                <li>{section4.list.l6}</li>
                <li>{section4.list.l7}</li>
                <li>{section4.list.l8}</li>
            </ol>
            <p className={style.paragraph}>{section4.p2}</p>
          </section>
          <section className={`${style.section} ${style.section5} ${loading ? '' : style.sectionLoaded}`}>
            <h2 className={style.sectionTitle}>{section5.title}</h2>
            <p className={style.paragraph}>{section5.p1}</p>
            <p className={style.paragraph}>{section5.p2}</p>
            <div className={style.quoteContainer}>
                <p className={style.quoteText}>&#8220;{section5.quote.text}&#8221;</p>
                <p className={style.quotee}>{section5.quote.quotee}</p>
            </div>
          </section>
        </main>
        <footer className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1><GiSofa/></h1>
        </footer>
      </div>
    )
  }
