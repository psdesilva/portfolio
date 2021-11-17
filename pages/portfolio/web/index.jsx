import { useState, useEffect } from 'react'
import Head from 'next/head'
import { FaReact } from 'react-icons/fa'
import style from './Web.module.css'
import projects from '../../../projectlists/WebProjectList'
import ProjectCard from '../../../components/ProjectCard/ProjectCard'

export default function Web() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false)
    }, [])

    return (
      <div className={style.page}>
        <Head>
          <title>Web Projects | Pdesilva's Portfolio</title>
        </Head>
        <header className={`${style.background} ${loading ? '' : style.backgroundLoaded}`}>
            <h1>Web Portfolio</h1>
        </header>
        <main className={style.container}>
          <section className={style.info}>
            <div className={`${style.infoCategory} ${loading ? '' : style.loaded}`}>
              <p className={style.infoCategoryType}>Languages:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div className={`${style.infoCategory} ${loading ? '' : style.loaded}`}>
              <p className={style.infoCategoryType}>{`Frameworks & Pre-processors:`}</p>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>SASS</li>
              </ul>
            </div>
            <div className={`${style.infoCategory} ${loading ? '' : style.loaded}`}>
              <p className={style.infoCategoryType}>Tools:</p>
              <ul>
                <li>VS Code</li>
                <li>GIT</li>
                <li>NPM</li>
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