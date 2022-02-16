import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FunctionComponent } from 'react'

const Idea: FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://admin.xingxingmobility.com"
                target="_blank"
                rel="noopener noreferrer"
            >
            Made by yunjeong
            <span className={styles.logo}>
                {/* <Image src="/xingxing_TMS@3x.png" alt="Vercel Logo" width={72} height={16} /> */}
            </span>
            </a>
        </footer>
    );
}

export default Idea;