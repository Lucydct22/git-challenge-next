This is a [Next.js](https://nextjs.org/) project 
## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Description

Displays the GitHub repositories and allows the user to filter through the repositories by name using a search bar. 

## Technologies

- NextJS 
- TypeScript
- TailwindCSS


## Future implementations 
Pagination for repositories: Implement a pagination system that allows the user to navigate through different pages of repositories. You can fetch a limited number of repositories per page from the GitHub API and provide navigation links or buttons to switch between pages.

Sorting options: Enhance the user experience by adding sorting options for the repositories. You can allow the user to sort the repositories by various criteria such as name, creation date, stars, or forks. Implement the sorting logic on the server-side or client-side to rearrange the repository list accordingly.

Detailed repository information: Expand the functionality by providing a detailed view for each repository. When a user clicks on a repository, display additional information such as the repository description, contributors, issues, and other relevant data. You can create a separate page or a modal to present this information.

Filtering by tags or labels: Enable the user to filter repositories based on tags or labels associated with them. Tags can help categorize repositories and make it easier for users to find specific types of projects. Implement a filtering mechanism that dynamically updates the displayed repositories based on the selected tags.

User authentication and personalization: Implement user authentication using Next.js authentication libraries or frameworks such as NextAuth.js or Firebase Authentication. Once authenticated, users can personalize their experience, such as saving favorite repositories, customizing settings, or following specific projects.

Error handling and feedback: Improve error handling by displaying meaningful error messages when API requests fail or other errors occur. Provide appropriate feedback to the user, such as loading spinners or progress bars, to indicate when data is being fetched or processed.
