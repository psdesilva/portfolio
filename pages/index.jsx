import { useState, useEffect } from 'react'
import useMediaQuery from '../hooks/MediaQuery'
import HomepageText from '../components/HomepageText/HomepageText'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { RiSearchLine } from 'react-icons/ri'
import { SiAdobexd } from 'react-icons/si'
import { IoIosPhonePortrait } from 'react-icons/io'
import { IoIosDesktop } from 'react-icons/io'
import style from '../styles/Home.module.css'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  const isBreakPoint = useMediaQuery(799);

  return (
    <div className={style.page}>
      <div className={`${style.container} ${style.ux}`}>
        <HomepageText type="ux" loading={loading}/>
        <div className={style.scrollContainer}>
          <div className={style.scrollUX}>
            <div>
              <p><FaUserAlt /><AiOutlineArrowRight /><RiSearchLine /><AiOutlineArrowRight /><SiAdobexd /><AiOutlineArrowRight /><IoIosPhonePortrait /><AiOutlineArrowRight /><IoIosDesktop /><AiOutlineArrowRight /></p>
              <p><FaUserAlt /><AiOutlineArrowRight /><RiSearchLine /><AiOutlineArrowRight /><SiAdobexd /><AiOutlineArrowRight /><IoIosPhonePortrait /><AiOutlineArrowRight /><IoIosDesktop /><AiOutlineArrowRight /></p>
            </div>
          </div>
        </div>
      </div>
      {isBreakPoint ? 
        <div className={`${style.nameCard} ${loading ? '' : style.opaque}`}>
          <h1 className={style.mobileSmall}>I'm</h1>
          <h1 className={style.mobileLarge}>Priyanka de Silva</h1>
        </div> 
        :
        <div className={`${style.nameCard} ${loading ? '' : style.opaque}`}>
          <div className={style.image}></div>
          <p>{`I'm`}</p>
          <div className={style.title}>
            <h1 className={style.small}>Priyanka</h1>
            <h1 className={style.large}>de Silva</h1>
          </div>
        </div>
      }
      <div className={`${style.container} ${style.fe}`}>
        <div className={style.scrollContainer}>
          <div className={style.scrollFE}>
            <div>
              <p>{`let x=5; if (x < 10) { document.getElementById(randomNumber).appendChild(textElement) }; console.log(textElement); const randomLetters = [a, b, c, d, e]`}</p>
              <p>{`let x=5; if (x < 10) { document.getElementById(randomNumber).appendChild(textElement) }; console.log(textElement); const randomLetters = [a, b, c, d, e]`}</p>
            </div>
          </div>
        </div>
        <div className={style.scrollContainerLower}>
          <div className={style.scrollFELower}>
            <div>
              <p>{`console.log(textElement); const randomLetters = [a, b, c, d, e] let x=5; if (x < 10) { document.getElementById(randomNumber).appendChild(textElement) };`}</p>
              <p>{`console.log(textElement); const randomLetters = [a, b, c, d, e] let x=5; if (x < 10) { document.getElementById(randomNumber).appendChild(textElement) };`}</p>
            </div>
          </div>
        </div>
        <HomepageText type="fe" loading={loading}/>
      </div>
    </div>
  )
}
