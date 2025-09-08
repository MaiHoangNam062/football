// ...existing code...
import { useState } from 'react';

const categories = [
  { name: 'Kits', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&w=600' },
  { name: 'Boots', img: 'https://images.unsplash.com/photo-1605296867424-35fc25c9214e?auto=format&w=600' },
  { name: 'Balls', img: 'https://images.unsplash.com/photo-1599050751795-5c22dce8142d?auto=format&w=600' },
  { name: 'Accessories', img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&w=600' },
];

const featuredProducts = [
  { id: 1, name: '2024 Home Kit', price: 129, tag: 'New', img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&w=800' },
  { id: 2, name: 'Elite Match Ball', price: 179, tag: 'Pro', img: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&w=800' },
  { id: 3, name: 'Speed Pro Boots', price: 249, tag: 'Hot', img: 'https://images.unsplash.com/photo-1580752300992-559f8e0734fd?auto=format&w=800' },
  { id: 4, name: 'Goalkeeper Gloves', price: 89, tag: 'Best', img: 'https://images.unsplash.com/photo-1600555371865-2e96830d89a9?auto=format&w=800' },
];

const bestSellers = [
  { id: 5, name: 'Retro 1998 Jersey', price: 149, rating: 4.9, img: 'https://images.unsplash.com/photo-1543322748-33df6d3afb61?auto=format&w=800' },
  { id: 6, name: 'Stadium Scarf', price: 35, rating: 4.7, img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&w=800' },
  { id: 7, name: 'Captain Armband', price: 19, rating: 4.8, img: 'https://images.unsplash.com/photo-1530925486846-84b05a0b3129?auto=format&w=800' },
  { id: 8, name: 'Performance Socks (3pk)', price: 24, rating: 4.6, img: 'https://images.unsplash.com/photo-1624555130581-1d9d7d6b4d9b?auto=format&w=800' },
];

const testimonials = [
  { id: 1, name: 'Alex M.', quote: 'Quality is unmatched. The kits and boots arrived fast and packaged perfectly.', role: 'Amateur Striker' },
  { id: 2, name: 'Jordan R.', quote: 'My go-to store for official gear. Loyalty rewards are a bonus.', role: 'Club Supporter' },
  { id: 3, name: 'Chris L.', quote: 'The pro match ball feels incredible. Totally worth the price.', role: 'Youth Coach' },
];

const Hero = ({ onPrimary }) => (
  <section className="pt-32 pb-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.15),transparent_65%)]" />
    <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center relative">
      <div className="space-y-7">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" /> New 2024 Collection
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Premium Football Gear for Every Level
        </h1>
        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
          Shop authentic kits, pro-level boots, and performance essentials. Curated quality. Fast worldwide shipping.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onPrimary}
            className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium text-sm hover:from-blue-500 hover:to-indigo-600 shadow-lg shadow-indigo-300/40"
          >
            Shop Featured
          </button>
          <button className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 text-sm hover:bg-slate-100">
            View Collections
          </button>
        </div>
        <div className="flex items-center gap-8 pt-4">
          <div>
            <p className="text-xl font-semibold text-slate-900">2–4d</p>
            <p className="text-xs uppercase tracking-wide text-slate-500">Avg Shipping</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-900">4.8★</p>
            <p className="text-xs uppercase tracking-wide text-slate-500">Store Rating</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-900">25k+</p>
            <p className="text-xs uppercase tracking-wide text-slate-500">Orders</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-transparent to-indigo-700/10 blur-2xl rounded-3xl" />
        <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1605184861769-2c5dda9616e5?auto=format&w=1200"
            alt="Football gear"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-white/70 backdrop-blur border border-slate-200 px-5 py-4 shadow-lg">
          <p className="text-xs text-slate-600">Today’s Orders</p>
          <p className="text-lg font-semibold text-slate-900">312</p>
          <span className="text-xs text-blue-600 font-medium">+12% vs yesterday</span>
        </div>
      </div>
    </div>
  </section>
);

const Categories = () => (
  <section id="categories" className="py-16 border-t border-neutral-850">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white">Shop by Category</h2>
          <p className="text-neutral-400 text-sm mt-1">Find what fits your style and performance needs.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(c => (
          <a key={c.name} href="#" className="group relative rounded-2xl overflow-hidden border border-neutral-800 hover:border-emerald-600/50 transition">
            <img src={c.img} alt={c.name} className="h-48 w-full object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <p className="text-white font-medium">{c.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const ProductCard = ({ p, onAdd }) => (
  <div className="group rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-600/50 overflow-hidden transition flex flex-col">
    <div className="relative">
      <img src={p.img} alt={p.name} className="h-48 w-full object-cover group-hover:scale-105 transition" />
      {p.tag && (
        <span className="absolute top-2 left-2 text-[10px] uppercase tracking-wide bg-emerald-600 text-neutral-900 font-semibold px-2 py-1 rounded">
          {p.tag}
        </span>
      )}
    </div>
    <div className="p-4 flex flex-col gap-2 flex-1">
      <p className="text-sm font-medium text-white">{p.name}</p>
      <p className="text-green-400 text-sm font-semibold">${p.price}</p>
      <button
        onClick={() => onAdd(p)}
        className="mt-auto text-xs px-3 py-2 rounded-md bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
);

const FeaturedProducts = ({ onAdd }) => (
  <section id="featured" className="py-20">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Featured Products</h2>
          <p className="text-neutral-400 text-sm mt-1">Hand-picked performance drops & new arrivals.</p>
        </div>
        <button className="hidden sm:inline-flex text-sm px-4 py-2 rounded-md border border-neutral-700 text-neutral-300 hover:bg-neutral-800">View All</button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map(p => <ProductCard key={p.id} p={p} onAdd={onAdd} />)}
      </div>
    </div>
  </section>
);

const PromoBanner = () => (
  <section className="py-14">
    <div className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="relative px-10 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-white mb-4">Mid-Season Sale</h3>
            <p className="text-neutral-300 max-w-lg">Save up to 30% on select boots and training essentials. Limited stock while supplies last.</p>
            <button className="mt-7 px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium hover:from-green-400 hover:to-emerald-500">
              Shop Discounts
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[5/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&w=1200"
                alt="Boots promo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BestSellers = ({ onAdd }) => (
  <section id="best" className="py-20 border-t border-neutral-850">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Best Sellers</h2>
          <p className="text-neutral-400 text-sm mt-1">Fan favorites and consistently top-rated gear.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellers.map(p => (
          <div key={p.id} className="group rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-600/50 overflow-hidden transition flex flex-col">
            <div className="relative">
              <img src={p.img} alt={p.name} className="h-48 w-full object-cover group-hover:scale-105 transition" />
              <span className="absolute top-2 left-2 text-[10px] uppercase tracking-wide bg-neutral-900/80 px-2 py-1 rounded text-neutral-200">
                {p.rating}★
              </span>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="text-sm font-medium text-white">{p.name}</p>
              <p className="text-green-400 text-sm font-semibold">${p.price}</p>
              <button
                onClick={() => onAdd(p)}
                className="mt-auto text-xs px-3 py-2 rounded-md bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="reviews" className="py-20">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="text-3xl font-bold text-white mb-4">What Customers Say</h2>
      <p className="text-neutral-400 text-sm mb-10 max-w-2xl">Real feedback from real players & supporters who rely on our quality.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <div key={t.id} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <p className="text-neutral-300 text-sm leading-relaxed">“{t.quote}”</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-white">{t.name}</p>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wide">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24">
    <div className="mx-auto max-w-5xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(16,185,129,0.12),transparent_65%)]" />
        <div className="relative px-10 py-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-white mb-4">Join & Earn Rewards</h3>
            <p className="text-neutral-300 max-w-lg">
              Create a free account to track orders, earn loyalty points, and get early access to limited releases.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2"><span className="text-green-400">•</span>Loyalty points on every purchase</li>
              <li className="flex gap-2"><span className="text-green-400">•</span>Exclusive member-only drops</li>
              <li className="flex gap-2"><span className="text-green-400">•</span>Faster checkout experience</li>
            </ul>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-md bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium text-sm hover:from-green-400 hover:to-emerald-500">
                Create Account
              </button>
              <button className="px-6 py-3 rounded-md border border-neutral-700 text-neutral-200 text-sm hover:bg-neutral-800">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-2xl bg-neutral-950/70 border border-neutral-800 p-6 backdrop-blur space-y-4">
              <p className="text-neutral-200 font-medium">Sign Up & Get 10% Off</p>
              <form
                onSubmit={(e)=>{e.preventDefault();}}
                className="space-y-3"
              >
                <input required type="email" placeholder="Email" className="w-full px-3 py-2 text-sm rounded bg-neutral-900 border border-neutral-700 focus:border-emerald-500 outline-none text-neutral-200" />
                <input required type="password" placeholder="Password" className="w-full px-3 py-2 text-sm rounded bg-neutral-900 border border-neutral-700 focus:border-emerald-500 outline-none text-neutral-200" />
                <button type="submit" className="w-full py-2.5 text-sm font-medium rounded bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500">
                  Sign Up
                </button>
                <p className="text-[10px] text-neutral-500 text-center">
                  By signing up you agree to our Terms & Privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-neutral-800 py-12 bg-neutral-950">
    <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-4 gap-10">
      <div className="sm:col-span-2">
        <p className="text-white font-semibold mb-3">Football Store</p>
        <p className="text-sm text-neutral-400 leading-relaxed">Premium football equipment, apparel, and accessories. We focus on authenticity, quality, and performance.</p>
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-300 mb-3">Shop</p>
        <ul className="space-y-2 text-sm text-neutral-400">
          <li><a href="#featured" className="hover:text-white">Featured</a></li>
          <li><a href="#categories" className="hover:text-white">Categories</a></li>
          <li><a href="#best" className="hover:text-white">Best Sellers</a></li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-300 mb-3">Support</p>
        <ul className="space-y-2 text-sm text-neutral-400">
          <li>Shipping</li>
          <li>Returns</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="mt-10 text-center text-xs text-neutral-600">
      © {new Date().getFullYear()} Football Store. All rights reserved.
    </div>
  </footer>
);

export const LandingPage = () => {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    setToast(`${product.name} added to cart`);
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <main>
        <Hero onPrimary={() => { document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' }); }} />
        <Categories />
        <FeaturedProducts onAdd={addToCart} />
        <PromoBanner />
        <BestSellers onAdd={addToCart} />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      {toast && (
        <div className="fixed bottom-6 right-6 px-4 py-3 rounded-lg bg-white/80 backdrop-blur border border-slate-200 shadow-lg text-sm flex items-center gap-3 animate-fade-in text-slate-800">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
            <p>{toast}</p>
        </div>
      )}
    </div>
  );
};
// ...existing code...