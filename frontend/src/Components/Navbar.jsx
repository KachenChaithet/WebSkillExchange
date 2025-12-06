import { UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const menuItems = [
        { to: "/", label: "Home" },
        { to: "/skill", label: "Skill hub" },
        { to: "/connect", label: "Connect" },
        { to: "/message", label: "Message" },
    ];

    return (
        <div className="bg-white max-h-[80] p-6 flex justify-between items-center shadow-sm">
            <h1 className="text-3xl">Logo</h1>
            <ul className="flex text-xl font-semibold text-neutral-400 gap-8">
                {menuItems.map(item => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `hover:text-neutral-500 cursor-pointer ${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </ul>

            <div>
                <UserButton afterSignOutUrl="/login" />
            </div>
        </div>
    );
};

export default Navbar;
