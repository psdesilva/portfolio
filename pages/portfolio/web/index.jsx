import { useState, useEffect } from 'react'
import { FaReact } from 'react-icons/fa'
import style from './Web.module.css'
import projects from './ProjectList'
import ProjectCard from '../../../components/ProjectCard/ProjectCard'

export default function Contact() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])

    return (
      <div className={style.page}>
        <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1>Web Portfolio</h1>
        </header>
        <main className={style.container}>
          <section className={style.info}>
              <div className={`${style.infoCategory} ${loading ? '' : style.loaded}`}>
                <p className={style.infoCategoryType}>Skills:</p>
                <ul>
                  <li>User Testing</li>
                  <li>Prototyping</li>
                  <li>Theoretical Usability Analysis</li>
                </ul>
              </div>
              <div className={`${style.infoCategory} ${loading ? '' : style.loaded}`}>
                <p className={style.infoCategoryType}>Tools:</p>
                <ul>
                  <li>Adobe Xd</li>
                  <li>Hotjar</li>
                  <li>Axure RP</li>
                </ul>
            </div>
          </section>
          <section className={style.projectList}>
            {projects.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} img={project.img} web={true} url1={project.github} url2={project.demo} className={`${style[`project-${index}`]} ${loading ? '' : style.loaded}`}/>)}
          </section>
        </main>
        <footer className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1><FaReact/></h1>
        </footer>
      </div>
    )
  }