export default function Repositories() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 w-4/5">


      <form className="w-11/12">
        <div className="relative w-full" >
          <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Repositories.." required />
          <button
            className='absolute top-0 right-0 p-2.5 text-sm font-medium text-stone-200 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </div>


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between pb-4">
            <div>
              <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <svg className="w-4 h-4 mr-2 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                Last 30 days
                <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-1" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-2" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-3" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="filter-radio-example-5" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Repository name
              </th>
              <th scope="col" className="px-6 py-3">
                Language used
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" />
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              audity_react_app
            </th>
            <td className="px-6 py-4">
              TypeScript
            </td>
            <td className="px-6 py-4">
              6/1/2023
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add to Favs</a>
            </td>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" />
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              audity_react_app
            </th>
            <td className="px-6 py-4">
              TypeScript
            </td>
            <td className="px-6 py-4">
              6/1/2023
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add to Favs</a>
            </td>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" />
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              audity_react_app
            </th>
            <td className="px-6 py-4">
              TypeScript
            </td>
            <td className="px-6 py-4">
              6/1/2023
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add to favs</a>
            </td>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" />
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              audity_react_app
            </th>
            <td className="px-6 py-4">
              TypeScript
            </td>
            <td className="px-6 py-4">
              6/1/2023
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add to Favs</a>
            </td>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" />
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              audity_react_app
            </th>
            <td className="px-6 py-4">
              TypeScript
            </td>
            <td className="px-6 py-4">
              6/1/2023
            </td>            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add to Favs</a>
            </td>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" />
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              audity_react_app
            </th>
            <td className="px-6 py-4">
              TypeScript
            </td>
            <td className="px-6 py-4">
              6/1/2023
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add to favs</a>
            </td>
          </tbody>
        </table>
      </form >
    </main >
  )
}



