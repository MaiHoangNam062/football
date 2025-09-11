import { Search, ShoppingBagIcon, ShoppingCart, User } from "lucide-react";

export const NavbarShop = () => {
    return (
        <header className="fixed top-0 min-w-screen z-40">
            <div 
                className="mx-2 px-6 py-20 h-16 flex items-center justify-between
                rounded-b-2xl backdrop-blur-xl
                bg-white/65 border border-white/60 shadow-[0_4px_24px_-4px_rgba(30,41,59,0.12)]
                supports-[backdrop-filter]:bg-white/55"
            >
                <div className="flex items-center gap-2">
                    <div className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-md">FS</div>
                    <span className="font-semibold text-slate-800 tracking-wide">Football Store</span>
                </div>

                <nav className="hidden md:flex mx-8 flex-row items-center justify-center flex-wrap gap-8 text-sm text-slate-600">
                    <a href="#featured" className="hover:text-slate-900">Featured</a>
                    <a href="#categories" className="hover:text-slate-900">Categories</a>
                    <a href="#best" className="hover:text-slate-900">Best Sellers</a>
                    <a href="#reviews" className="hover:text-slate-900">Reviews</a>
                    <a href="#featured" className="hover:text-slate-900">Featured</a>
                    <a href="#categories" className="hover:text-slate-900">Categories</a>
                    <a href="#best" className="hover:text-slate-900">Best Sellers</a>
                    <a href="#reviews" className="hover:text-slate-900">Reviews</a>
                </nav>

                <div className="flex items-center gap-4">
                    <Search className="cursor-pointer" />
                    <ShoppingBagIcon className="cursor-pointer" />
                </div>
            </div>
        </header>
    );
};
    