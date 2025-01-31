import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiChevronDown, FiLogOut } from "react-icons/fi";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Get user data from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.length > 0 ? users[0] : {}; // Get the first object

  const navItems = [
    { title: "Bid", path: "/bids" },
    { title: "POD" },
    { title: "Vendor" },
    { title: "User" },
    { title: "Settings" },
  ];

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("users"); // Remove user data from localStorage
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/"; // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="text-xl font-bold">
            <i class="bi bi-bullseye text-3xl"></i> LOGO
          </span>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-4 ">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center text-lg font-normal px-5 py-3 text-gray-600 rounded-full hover:bg-sky-200"
            >
              <i className="bi bi-grid-fill"></i> &nbsp;
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-col md:pl-64">
        {/* Header */}
        <header className="flex h-16 items-center justify-end gap-[55vw] bg-sky-200 px-4 shadow-sm">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <FiMenu className="h-6 w-6" />
          </button>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center space-x-2 rounded-full bg-gray-100 p-2"
              >
                <FiUser className="h-5 w-10" />
                {user.username || "Guest"} {/* Display username or Guest */}
                <FiChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown for Logout */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FiLogOut className="mr-2 h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
