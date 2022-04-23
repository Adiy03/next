import styles from '../styles/Layanan.module.css'

const Layanan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Landing Page & Website</h1>
        <div className={styles.content}></div>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Google Ads</h1>
        <div className={styles.content}></div>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Content Marketing</h1>
        <div className={styles.content}></div>
      </div>
    </div>
  )
}

export default Layanan