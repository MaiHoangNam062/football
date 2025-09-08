export const NavbarLanding = () => {
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

        </div>
    </header>
};