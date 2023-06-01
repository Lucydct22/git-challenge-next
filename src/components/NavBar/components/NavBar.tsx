import Image from "next/image"
import Link from "next/link"
import { NavBarButton } from "./NavBarButton"


export const NavBar = () => {
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-between py-4 px-6">
			<span>
				<a href="./" className="flex items-center">
					<span className="mb-4 text-3xl font-extrabold dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">RepoTrack</span>
				</a>
			</span>

			<span className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
				<NavBarButton href={'/overview'} title={"Overview"} />
				<NavBarButton href={'/'} title={"Repositories"} />
				<NavBarButton href={'/projects'} title={"Projects"} />
			</span>
		</nav>
	)
}

