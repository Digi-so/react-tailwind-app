export default function card({title,children}) {
  return ( <div classname="big-white dark:big-gray-800 shadow rounded p-4"> <h2 className="text-xl font-semibold mb-2"> {title}</h2>
    <div>{children}</div>
  </div>);}