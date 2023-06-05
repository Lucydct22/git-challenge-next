import { getRepositories, formatDate } from "@/utils"
import { RepositoryRow } from "./RepositoryRow";

interface IRepository {
	node: {
		id: string;
		name: string;
		url: string;
		createdAt: string;
	}
}

export const Repositories = async () => {
	const { data: { viewer: { repositories: { edges: repositories } } } } = await getRepositories()
	return (
		<div className="w-5/6">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Repository name
						</th>
						<th scope="col" className="px-6 py-3">
							Date of creation
						</th>
						<th scope="col" className="px-6 py-3">
							Add to favourites
						</th>
					</tr>
				</thead>
				<tbody>
					{repositories.length && repositories.map(({ node: { id, name, url, createdAt } }: IRepository) => (
						<RepositoryRow
							key={id}
							name={name}
							url={url}
							createdAt={formatDate(createdAt)}
						/>
					)
					)}
				</tbody>
			</table>
		</div>
	)
}
