import Link from "next/link";
import { FC } from "react"

interface RepositoryRowProps {
	name: string;
	url: string;
	createdAt: string;
}

export const RepositoryRow: FC<RepositoryRowProps> = ({
	name,
	url,
	createdAt
}) => {
	return (
		<>
			<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
				<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
					<Link href={url} target="_blank">{name}</Link>
				</th>
				<td className="px-6 py-4">
					{createdAt}
				</td>
				<td className="px-6 py-4">
					<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add to Favs</a>
				</td>
			</tr>
		</>
	)
}