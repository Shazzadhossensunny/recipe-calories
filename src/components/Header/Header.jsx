import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
export default function Header() {
  return (
    <div>
      <div className="navbar py-5 px-0">
        <div className="navbar-start w-full lg:w-1/2">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-base font-normal text-[#150B2BB2]">
                <a>Home</a>
              </li>
              <li className="text-base font-normal text-[#150B2BB2]">
                <a>Recipes</a>
              </li>
              <li className="text-base font-normal text-[#150B2BB2]">
                <a>About</a>
              </li>
              <li className="text-base font-normal text-[#150B2BB2]">
                <a>Search</a>
              </li>
              <div className="form-control relative">
            <input
              type="text"
              placeholder="Search"
              className="input rounded-full w-[80%] bg-[#150b2b0d] px-9 py-3 ml-5"
            />
            <button className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl text-[#150B2BB2]">
              <IoIosSearch></IoIosSearch>
            </button>
          </div>
            </ul>

          </div>
          <a className="text-xl lg:text-3xl font-bold text-[#150B2B] cursor-pointer">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-12">
            <li className="text-base font-normal text-[#150B2BB2]">
              <a>Home</a>
            </li>
            <li className="text-base font-normal text-[#150B2BB2]">
              <a>Recipes</a>
            </li>
            <li className="text-base font-normal text-[#150B2BB2]">
              <a>About</a>
            </li>
            <li className="text-base font-normal text-[#150B2BB2]">
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <div className="form-control relative hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="input rounded-full w-24 md:w-auto bg-[#150b2b0d] px-9 py-3 ml-5"
            />
            <button className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl text-[#150B2BB2]">
              <IoIosSearch></IoIosSearch>
            </button>
          </div>
          <a className="text-3xl bg-[#0BE58A] p-2 rounded-full cursor-pointer">
            <FaRegUserCircle />
          </a>
        </div>
      </div>
    </div>
  );
}
