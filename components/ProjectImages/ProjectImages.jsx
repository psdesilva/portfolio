import Image from 'next/image'
import style from './ProjectImages.module.css'
import useMediaQuery from '../../hooks/MediaQuery'

const ProjectImages = ({ imageArray, height, description }) => {
    const isBreakPoint = useMediaQuery(801);

    return (
        <div className={style.container} style={isBreakPoint ? {height: "auto"} : {height: height}}>
            <div className={style.imageContainer}>
                {imageArray.map((image, index) => (
                    <div key={index} className={style.image}>
                        <Image 
                            src={image.url}
                            alt={image.name}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center center"
                            className={style.actualImage}
                        />
                    </div>
                ))}
            </div>
            <p className={style.description}>{description}</p>
        </div>
    )
}

export default ProjectImages
