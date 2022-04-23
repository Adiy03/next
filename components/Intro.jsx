import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top='-50vh' left='-50vh'/>
      <Circle backgroundColor="#01c686" right='-40vh'/>
      <div className={styles.card}>
        <h1 className={styles.title}><span className={styles.brand}>Adiy Media <br /></span>Digital Marketing Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image 
          src='/img/Avocado.png'
          layout='fill'
          alt=''
          objectFit='contain'
          height='240px'
        />
      </div>
    </div>
  )
}

export default Intro