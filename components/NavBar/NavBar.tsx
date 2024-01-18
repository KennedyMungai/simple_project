import Link from "next/link"

type Props = {}

const NavBar = (props: Props) => {
	return <nav className='h-[10vh] border-b flex justify-between items-center'>
        <h1 className="uppercase text-2xl">
            <Link href={'/'}>WikiRocket</Link>
        </h1>
    </nav>
}

export default NavBar
