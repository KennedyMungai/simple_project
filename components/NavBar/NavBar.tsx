import Link from "next/link"

type Props = {}

const NavBar = (props: Props) => {
	return <nav className='bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl'>
        <h1 className="uppercase text-2xl text-white font-semibold">
            <Link href={'/'}>WikiRocket</Link>
        </h1>
    </nav>
}

export default NavBar
