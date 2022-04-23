import styles from '../../styles/Blog.module.css'
import Head from 'next/head'


const blog = () => {
  return (
    <>
      <Head>
        <title>Ady Media Blog</title>
        <meta name="description" content="blog digital marketing agency" />
      </Head>
      <div className={styles.container}>
        {/* <div className='card'>

        </div> */}
      </div>
    </>
  )
}

export default blog