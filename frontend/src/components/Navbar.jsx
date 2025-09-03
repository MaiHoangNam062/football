import { ShoppingBagIcon, ShoppingCart } from "lucide-react";
import logo from "@/assets/images/logo.png";

export const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-row justify-between mx-5 my-5">

                <img src={logo} alt="Logo" className="h-10 w-auto" />

                <div className="flex flex-row space-x-10">
                    <a>Home</a>
                    <a>Shop</a>
                    <ShoppingBagIcon />
                </div>
            </nav>
        </div>
    );       
}