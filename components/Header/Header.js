import React from 'react'
import Link from 'react-router-dom'
import styles from '../../styles/Home.module.scss'
const Header = () => {
    return (

        <header>
           
            <nav className={styles.nav}>
                <ul className={styles.nav_ul}>
                    <li className={styles.navlinks}>
                        <Link href="/"><a className={styles.link}>Home</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/About"><a className={styles.link}>About</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/RegulatoryFramework"><a className={styles.link}>Regulatory Framework</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/Authorisations"><a className={styles.link}>Authorisation</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/ComplianceAssurance"><a className={styles.link}>Compliance Assurance</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/Public"><a className={styles.link}>Public</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/NNRLibrary"><a className={styles.link}>NNR Library</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/NDR"><a className={styles.link}>NDR</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/CNSS"><a className={styles.link}>CNSS</a></Link>
                    </li>

                </ul>

            </nav>
            <nav className={styles.nav_bottom}>
                <ul className={styles.nav_ul}>
                    <li className={styles.navlinks}>
                        <Link href="/"><a className={styles.link2}>Policy and Legalisation</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/About"><a className={styles.link2}>Nuclear Security</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/RegulatoryFramework"><a className={styles.link2}>Emergency Planning</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/Authorisations"><a className={styles.link2}>International Cooperation</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/ComplianceAssurance"><a className={styles.link2}>Tenders</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/Public"><a className={styles.link2}>Career Opportunities</a></Link>
                    </li>
                    <li className={styles.navlinks}>
                        <Link href="/NNRLibrary"><a className={styles.link2}>Contact us</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;