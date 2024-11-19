import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

const Nav = () => {
  const [filterWindow, toggleFilterWindow] = useState<boolean>(false)
  const filters = useSelector((state: RootState) => state.filters)
  return (
    <nav className='desc_text'>
      <ul className='gap-4 flex items-center'>
        <li className='nav-item text-lg chosen_link'><a href="/">Рецепти</a></li>
        <li className='nav-item text-lg flex justify-center gap-2'>
          <a href="/">Обрані</a>
        </li>
        <li>
          <div className="w-6 hover:cursor-pointer relative">
            <img src="assets/images/filter.png" alt="" className="" onClick={() => toggleFilterWindow(!filterWindow)} />
            {filterWindow &&
              <div className="px-4 py-4 w-32 absolute bg-slate-200 rounded-lg right-0">
                <div className="flex flex-col gap-4">
                  {filters && filters.filters.map(filter => (
                    <div className="flex gap-3">
                      <label htmlFor="">{filter.filterName}</label>
                      <input type="checkbox" onChange={() => { console.log("CHANGED") }} checked={filter.checked ?? false}/>
                    </div>
                  ))}
                </div>
              </div>}
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav