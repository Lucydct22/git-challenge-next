import { getRepositories, formatDate } from "@/utils"
import { RepositoryRow } from "./RepositoryRow";
import { FC, useEffect, useState } from "react";
import { IRepository } from "../types";

interface RepositoriesTableProps {
	repositories: IRepository[];
	query: string;
}

export const RepositoriesTable: FC<RepositoriesTableProps> = ({
	repositories,
	query
}) => {
	const [filterRepositories, setFilterRepositories] = useState<IRepository[]>([])

	useEffect(() => {
		const handleRepositoryFilter: IRepository[] = query && repositories.filter((repo) => {
			const regex = new RegExp(query, 'i');
			return regex.test(repo.node.name);
		}) || [];
		setFilterRepositories(handleRepositoryFilter)
	}, [query, repositories])


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
					{filterRepositories.length ? filterRepositories.map(({ node: { id, name, url, createdAt } }: IRepository) => (
						<RepositoryRow
							key={id}
							name={name}
							url={url}
							createdAt={formatDate(createdAt)}
						/>
					)) : null}
					{repositories.length && !filterRepositories.length ?
						repositories.map(({ node: { id, name, url, createdAt } }: IRepository) => (
							<RepositoryRow
								key={id}
								name={name}
								url={url}
								createdAt={formatDate(createdAt)}
							/>
						)) : null}
				</tbody>
			</table>
		</div>
	)
}
