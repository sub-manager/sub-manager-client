import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Auth from "../Decode";
import Logo from "./Logo";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.clear();
    navigate('/auth/login')
  }
  const navigation = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Company", href: "#" },
  ];


  
  return (
    <>
      <header className="absolute  inset-x-0 top-0 z-40">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
         
            <Logo />
        
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
      
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
              
            ))}
            
            {
              Auth.decode() ? <NavLink to={"/calender"}>calender</NavLink> : ''
            }
            

          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
            {Auth.isLogged ? (
              <a
                href="/"
                className="text-sm font-semibold leading-6 text-gray-900 p-2 rounded-lg "
                style={{ background: "#5e9ba1" }}
              >
                      <button onClick={handleLogout}>logout</button>

              </a>
            ) : (
              <a
                href="/auth/login"
                className="text-sm font-semibold leading-6 text-gray-900 p-2 rounded-lg "
                style={{ background: "#5e9ba1" }}
              >
                login
              </a>
            )}

            {Auth.isLogged() ? (
              ""
            ) : (
              <a
                href="/auth/signup"
                className="text-sm font-semibold leading-6 text-gray-900 border p-2 rounded-lg"
                style={{ borderColor: "#5e9ba1" }}
              >
                Sign up
              </a>
            )}

            <div className="flex items-center">
              {/* <UserAvatar/> */}
              {Auth.decode()?.user?.username || ""}
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {/* logo */}
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* nav */}
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 " >
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {Auth.isLogged ? (
                    <a
                      href="/"
                      className="text-sm font-semibold leading-6 text-gray-900 p-2 rounded-lg "
                      style={{ background: "#5e9ba1" }}
                    >
                      <button onClick={handleLogout}>logout</button>
                    </a>
                  ) : (
                    <a
                      href="/auth/login"
                      className="text-sm font-semibold leading-6 text-gray-900 p-2 rounded-lg "
                      style={{ background: "#5e9ba1" }}
                    >
                      login
                    </a>
                  )}

                  {Auth.isLogged() ? (
                    ""
                  ) : (
                    <a
                      href="/auth/signup"
                      className="text-sm font-semibold leading-6 text-gray-900 border p-2 rounded-lg"
                      style={{ borderColor: "#5e9ba1" }}
                    >
                      Sign up
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
