import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="border-y border-gray-200">
                <div className="mx-5 flex flex-col sm:flex-row justify-between md:items-center sm:items-start gap-8 py-4">
                    <div className="flex-1 flex flex-col gap-4">
                        <Link href="/" className="font-bold">
                            <span>Logo</span>
                        </Link>
                        <p>Transform your ideas into reality with our powerful platform. Join thousands of satisfied customers who trust us with their business.</p>
                        <div className="flex flex-row gap-4">
                            <Link href='/' className="bg-white border border-gray-200 text-black py-2 px-2 rounded-lg">Twitter</Link>
                            <Link href='/' className="bg-white border border-gray-200 text-black py-2 px-2 rounded-lg">LinkedIn</Link>
                            <Link href='/' className="bg-white border border-gray-200 text-black py-2 px-2 rounded-lg">Github</Link>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="font-bold">Product</h1>
                        <ul>
                            <li><Link href='/features'>Features</Link></li>
                            <li><Link href='/'>Pricing</Link></li>
                            <li><Link href='/'>Documentation</Link></li>
                            <li><Link href='/'>API Reference</Link></li>
                        </ul>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="font-bold">Company</h1>
                        <ul>
                            <li ><Link href='/about'>About</Link></li>
                            <li><Link href='/'>Blog</Link></li>
                            <li><Link href='/'>Careers</Link></li>
                            <li><Link href='#footer'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-y border-gray-200 p-4 text-center">
                    <span>© 2025 Logo. All rights reserved.</span>
                </div>
            </footer>
        </>
    )
}
export default Footer