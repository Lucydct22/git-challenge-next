import Image from "next/image"
import Link from "next/link"
import { NavBarButton } from "./NavBarButton"

export const NavBar = () => {
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-between py-4 px-6">
			<span>
				<a href="./" className="flex items-center">
					<Image src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" width={32} height={32} />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
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
