import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'
import useMediaQuery from '../../hooks/MediaQuery'
import style from './ProjectCard.module.css'



const ProjectCard = ({ title, description, img, web, url1, url2, className }) => {
    return (
        <div className={`${style.container} ${className}`}>
            <div className={style.overlay}></div>
            <div className={style.info}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
                { web ? 
                    <div className={style.buttonContainer}>
                        <a href={url1} target="_blank"><Button type="large" text="Github"/></a>
                        {url2 === "#" ? '' : <a href={url2} target="_blank"><Button type="large" text="Demo"/></a>}
                    </div> :
                    <div className={style.buttonContainer}>
                        <Link href={url1}><a><Button type="large" text="Case Study"/></a></Link>
                    </div>
                }
            </div>
            <Image 
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"
                className={style.image}
                quality="75" 
            />
        </div>
    )
}

export default ProjectCard
