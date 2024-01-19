import styles from '@/components/intro/intro.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <h1>Hello,<br/>I&apos;m Seungpyo Suh</h1>
                    <p>I&apos;m a Mobile/Frontend Developer<br/>
                        proficient in Flutter and Next.js with TS,<br/>
                        learning native Android with Jetpack Compose.
                    </p>
                </div>
                <Image className={styles.logo} src={'/images/sspzoa_logo.svg'} alt={'sspzoa'} width={240} height={240} />
            </div>
        </div>
    );
}