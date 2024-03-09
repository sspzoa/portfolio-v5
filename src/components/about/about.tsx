import styles from '@/components/about/about.module.css';
import Image from "next/image";

export default function About() {
    return (
        <div id='about' className={styles.container}>
            <Image src={'/images/profile.jpeg'} alt={'profile'} width={240} height={240}
                   style={{objectFit: "cover"}}/>
            <div className={styles.content}>
                <div className={styles.career}>
                    <div className={styles.header}>
                        <h2>KDMHS</h2>
                        <hr/>
                        <h3>2023.03</h3>
                    </div>
                    <ul>
                        <li>디미고 인트라넷 개발팀, 딘 (2024.03~)</li>
                        <li>IT 소셜벤처 동아리, LUNA (2023.12~)</li>
                        <li><strong>👑 STA+C 2023 가작 (SK플래닛대표상) (2023.11)</strong></li>
                        <li><strong>👑 제5회 한국코드페어 해커톤 금상 (과학기술정보통신부장관상) (2023.11)</strong></li>
                        <li>교내 무인매점 결제 솔루션 개발팀, 디미페이 (2023.10~)</li>
                        <li>디미고 22기 학생홍보팀 (2023.03~)</li>
                        <li>정보보안 동아리, Stealth & STARE (2023.03~2023.12)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}