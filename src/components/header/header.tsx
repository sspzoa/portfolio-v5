'use client'

import { useState } from 'react';
import styles from '@/components/header/header.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Image src={'/images/sspzoa_logo.svg'} alt={'sspzoa'} width={25} height={25}/>
                        <h2>Portfolio</h2>
                    </div>
                    <div className={isMenuOpen ? styles.navActive : styles.nav}>
                        <Link href={'/'} onClick={toggleMenu}>Home</Link>
                        <Link href={'#about'} onClick={toggleMenu}>About</Link>
                        <Link href={'#skills'} onClick={toggleMenu}>Skills</Link>
                        <Link href={'#projects'} onClick={toggleMenu}>Projects</Link>
                    </div>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <i className="fas fa-hamburger"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
