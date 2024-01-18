import Link from "next/link"
import Search from "./Search"

type Props = {}

const NavBar = (props: Props) => {
	return <nav className='bg-slate-600 p-4 flex flex-col justify-between md:flex-row items-center sticky top-0 drop-shadow-xl'>
        <h1 className="uppercase text-2xl text-white font-semibold">
            <Link href={'/'}>WikiRocket</Link>
        </h1>
        <Search />
    </nav>
}

export default NavBar
