import styles from '@/components/skills/skills.module.css';
import Image from "next/image";

export default function Skills() {
    return (
        <div id='skills' className={styles.container}>
            <div className={styles.content}>
                <Image src={'/images/skills/flutter.svg'} alt={'flutter'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/android.svg'} alt={'android'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/reactnative.svg'} alt={'flutter'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/next.svg'} alt={'next'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/nest.svg'} alt={'flutter'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/spring.svg'} alt={'spring'} width={250} height={100} style={{objectFit: "contain"}} />
            </div>
        </div>
    );
}