'use client'

import { useEffect, useState } from "react";
import { Search } from "@/components/Search";
import { RepositoriesTable } from "./RepositoriesTable";
import { getRepositories } from "@/utils";
import { IRepository } from "../types";

export const Repositories = () => {
	const [query, setQuery] = useState('')
	const [repositories, setRepositories] = useState<IRepository[]>([])

	useEffect(() => {
		const fetchRepositories = async () => {
			const { data: { viewer: { repositories: { edges: repositoriesGQL } } } } = await getRepositories()
			setRepositories(repositoriesGQL)
		}
		fetchRepositories()
	}, [query])

	return (
		<>
			<Search query={query} setQuery={setQuery} />
			<RepositoriesTable repositories={repositories} query={query} />
		</>
	)
}
