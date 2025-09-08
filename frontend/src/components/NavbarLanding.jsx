import { SignInButton, SignUpButton } from '@clerk/clerk-react';

export const NavbarLanding = () => {
    return (
        <header className="fixed top-0 w-full z-40">
            <div 
                className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between
                rounded-b-2xl backdrop-blur-xl
                bg-white/65 border border-white/60 shadow-[0_4px_24px_-4px_rgba(30,41,59,0.12)]
                supports-[backdrop-filter]:bg-white/55"
            >
                <div className="flex items-center gap-2">
                    <div className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-md">FS</div>
                    <span className="font-semibold text-slate-800 tracking-wide">Football Store</span>
                </div>

                <nav className="hidden md:flex gap-8 text-sm text-slate-600">
                    <a href="#featured" className="hover:text-slate-900">Featured</a>
                    <a href="#categories" className="hover:text-slate-900">Categories</a>
                    <a href="#best" className="hover:text-slate-900">Best Sellers</a>
                    <a href="#reviews" className="hover:text-slate-900">Reviews</a>
                </nav>

                <div className='space-x-2'>
                    <SignInButton mode="modal">
                        <button className="text-sm px-4 py-2 rounded-md text-slate-600 hover:text-slate-900  bg-zinc-300/20 hover:bg-zinc-200/70 font-semibold cursor-pointer">
                            Login
                        </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <button className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium hover:from-blue-500 hover:to-indigo-600 shadow-md cursor-pointer">
                            Sign Up
                        </button>
                    </SignUpButton>
                </div>
            </div>
        </header>
    );
};
    