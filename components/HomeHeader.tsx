import { Container } from "./Container.tsx";
import { Handlers,PageProps } from "$fresh/server.ts";
import { site } from "../data/site.ts";



export function HomeHeader() {
  return (
    <>

      <header class="bg-yellow-200 py-8">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-5xl font-bold text-gray-700">
            Andrej's Blog
          </div>
          <img src="https://cdn-media-1.freecodecamp.org/images/VmDGEaafdOMPVkYJhv6uF6zRqkZPLdxNKv5r" alt="Image" class="w-32 h-32 rounded-full"/>
        </div>
      </header>

     <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
         <input class="appearance
         none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Man on Mars" name="q"></input>
         <button type="submit" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Search</button>
       </div>
     </form>

    </>

  );
}
