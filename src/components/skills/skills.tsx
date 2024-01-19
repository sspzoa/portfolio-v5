import styles from '@/components/skills/skills.module.css';
import Image from "next/image";

export default function Skills() {
    return (
        <div id='skills' className={styles.container}>
            <div className={styles.content}>
                <Image src={'/images/skills/flutter.svg'} alt={'flutter'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/android.svg'} alt={'flutter'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/next.svg'} alt={'flutter'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/firebase.svg'} alt={'flutter'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/spring.svg'} alt={'spring'} width={250} height={100} style={{objectFit: "contain"}} />
                <Image src={'/images/skills/node.svg'} alt={'flutter'} width={250} height={100} style={{objectFit: "contain"}} />
            </div>
        </div>
    );
}