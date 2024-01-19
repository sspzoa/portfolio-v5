import styles from '@/components/header/header.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Image src={'/images/sspzoa_logo.svg'} alt={'sspzoa'} width={25} height={25}/>
                    <h2>Portfolio</h2>
                </div>
                <div className={styles.nav}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'#about'}>About</Link>
                    <Link href={'#skills'}>Contact</Link>
                    <Link href={'#projects'}>Projects</Link>
                </div>
            </div>
        </div>
    )
}