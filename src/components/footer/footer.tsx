import styles from '@/components/footer/footer.module.css';
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
            <div className={styles.container}>

                <div className={styles.content}>
                    <h3>&copy; 2024 Seungpyo Suh. All rights reserved.</h3>
                    <div className={styles.links}>
                        <Link href="mailto:sspzoa@dimipay.io"><i className="far fa-envelope"></i></Link>
                        <Link href="https://github.com/sspzoa" target="_blank"><i className="fab fa-github"></i></Link>
                        <Link href="https://www.instagram.com/_s._.pyo/" target="_blank"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
}