import styles from './page.module.css'
import Intro from "@/components/intro/intro";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Intro />
                <About />
                <Skills />
                <Projects />
            </div>
        </div>
    )
}
