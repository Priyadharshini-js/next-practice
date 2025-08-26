import Link from "next/link";


const Header = () => {
    return (
        <>
            <header id="header">
                <nav className="border-y border-gray-200 fixed top-0 left-0 right-0 bg-white">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between md:items-center gap-4 container mx-5 py-4">
                        <Link href="/" className="text-xl font-bold">
                            <span>Logo</span>
                        </Link>
                        <ul className="flex flex-col sm:flex-row gap-4 ">
                            <li>
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>About</Link></li>
                            <li>
                                <Link href='/features'>Features</Link></li>
                            <li><Link href='/products'>Products</Link></li>
                            <li><Link href='/post'>Post</Link></li>
                            <li><Link href='/comments'>Comments</Link></li>
                            <li><Link href='/ssg'>SSG</Link></li>
                            <li><Link href='#footer'>
                                Contact</Link>
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            <button className="cursor-pointer">Sign In</button>
                            <button className="cursor-pointer bg-black text-white py-2 px-2 rounded-lg">Get Started</button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header