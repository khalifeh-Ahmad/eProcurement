import Link from 'next/link'
import Styles from './../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.container}>
                <div className={Styles.logo}>Logo</div>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Products</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Become a Seller</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Careers</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Contact us</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar