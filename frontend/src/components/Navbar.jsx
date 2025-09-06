import { ShoppingBagIcon, ShoppingCart, User } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { CurrentProfile } from "../../lib/current-profile";

export const Navbar = () => {
    const user = CurrentProfile();

    return (
        <div>
            <nav className="flex flex-row justify-between mx-5 my-5">

                <img src={logo} alt="Logo" className="h-10 w-auto" />

                <div className="flex flex-row space-x-10">
                    <a>Home</a>
                    <a>Shop</a>
                    <ShoppingBagIcon />
                    <UserButton />
                </div>
            </nav>
        </div>
    );       
}