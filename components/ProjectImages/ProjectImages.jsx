import Image from 'next/image'
import style from './ProjectImages.module.css'
import useMediaQuery from '../../hooks/MediaQuery'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const ProjectImages = ({ imageArray, height, description }) => {
    const isBreakPoint = useMediaQuery(801);

    const options = {}

    return (
        <SimpleReactLightbox>
            <SRLWrapper>
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
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

export default ProjectImages
