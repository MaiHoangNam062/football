import { ShoppingBagIcon, ShoppingCart, User } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-row justify-between mx-5 my-5">

                <img src={logo} alt="Logo" className="h-10 w-auto" />

                <div className="flex flex-row space-x-10">
                    <a>Home</a>
                    <a>Shop</a>
                    <ShoppingBagIcon />
                    <User />
                </div>
            </nav>
        </div>
    );       
}