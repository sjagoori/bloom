
import Head from 'next/head'
import styles from './LoadingScreen.module.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animation'

export default function LoadingScreen() {
  return (
    <>
      <Head>
        <title>Loading</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.container}
        transition={{ delay: 0.2 }}
      >
        <CircularProgress className={styles.loader} />
      </motion.div>
    </>
  )
}