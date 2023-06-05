export const getRepositories = async () => {
	const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL!, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
		},
		body: JSON.stringify({
			query: `
              query getRepositories {
                viewer {
									repositories(last: 10) {
										edges {
											node {
												id
												createdAt
												name
												url
											}
										}
									}
								}
              }
           `,
		}),
		next: { revalidate: 10 },
	})
	const data = await response.json()
	return data;
}