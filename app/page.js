"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Flame, Leaf, Mountain, ShieldCheck, Truck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function VarkaMediumLanding() {

useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const lenis = new Lenis({
    duration: 1.6,
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.1,
    anchors: true,
  });

  window.history.replaceState(null, "", window.location.pathname);

  const forceTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    lenis.scrollTo(0, { immediate: true });
  };

  forceTop();
  setTimeout(forceTop, 0);
  setTimeout(forceTop, 100);
  setTimeout(forceTop, 300);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);

  return (
    <main className="min-h-screen bg-[#080604] text-stone-100 antialiased">
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[92svh] lg:min-h-screen overflow-hidden">
     
    <img
      src="/images/hero.webp"
      alt="Varka Hero"
      className="absolute inset-0 w-full h-full object-cover object-[84%_center] sm:object-[64%_center] md:object-[72%_center] lg:object-[78%_center] xl:object-center opacity-90"
    />
        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <div className="tracking-[0.42em] text-2xl md:text-3xl font-light">VARKA</div>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.22em] uppercase text-stone-300">
          <a href="#profile" className="hover:text-white transition">Profile</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#why" className="hover:text-white transition">Why Varka</a>
          <a href="#shop" className="text-[#c89055] hover:text-[#e0aa6e] transition">Shop Medium</a>
        </nav>
          <a
            href="https://shopvarka.com/products/smith-river-medium"
            className="border border-stone-500/70 px-5 py-3 text-xs tracking-[0.18em] uppercase hover:bg-stone-100 hover:text-black transition rounded-full"
          >
            Buy Now
        </a>
        </header>

        <div className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-start px-6 md:px-12 lg:px-20">

{/* LEFT CONTENT */}
<motion.div
  initial="hidden"
  animate="visible"
  transition={{ staggerChildren: 0.12 }}
  className="max-w-[280px] sm:max-w-[340px] md:max-w-2xl relative z-20"
>
  <motion.p variants={fadeUp} className="mb-5 text-xs md:text-sm tracking-[0.35em] uppercase text-amber-300/80">
    Medium Roast
  </motion.p>

  <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
    Everyday<br />clarity.
  </motion.h1>

  <motion.p
  variants={fadeUp}
  className="mt-8 max-w-[260px] md:max-w-md text-base md:text-lg leading-8 text-stone-300">
    Balanced depth. Smooth character. Crafted for your everyday ritual.
  </motion.p>

  <motion.a
    variants={fadeUp}
    href="#shop"
    className="mt-10 inline-flex items-center gap-3 bg-[#c89055] px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-black hover:bg-[#e0aa6e] transition rounded-full"
  >
    Shop Medium Roast
  </motion.a>
</motion.div>

   </div>
    </section>
     <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via-[#080604]/70 to-[#080604]" />

      {/* PROFILE */}
      <section id="profile" className="grid min-h-[760px] grid-cols-1 lg:grid-cols-2 border-t border-white/[0.04]">
        <div className="flex items-center px-6 py-20 md:px-12 lg:px-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ staggerChildren: 0.12 }}>
            <motion.p variants={fadeUp} className="mb-4 text-xs tracking-[0.32em] uppercase text-amber-300/70">The Profile</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl leading-tight text-stone-100">Built for everyday ritual.</motion.h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg leading-8 text-stone-300">
              Smooth and balanced with soft chocolate sweetness, roasted nut depth, and a clean finish made for everyday drinking.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12 grid grid-cols-3 gap-8 max-w-xl">
              <Feature icon={<Flame />}  title="Roast Profile" text="Medium" />
              <Feature icon={<Coffee />} title="Body" text="Smooth & Balanced" />
              <Feature icon={<Leaf />}   title="Notes" text={ <> Peanut <br /> Honey <br /> Milk Chocolate </> } />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden bg-[#120d09]">
          <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-[#080604]/60 z-20" />
          <div className="absolute inset-x-10 bottom-10 rounded-2xl border border-white/10 bg-black/35 p-8 backdrop-blur-md shadow-2xl">
            <p className="text-xs tracking-[0.28em] uppercase text-amber-300/70">Signature Profile</p>
            <h3 className="mt-3 font-serif text-3xl">Smith River — Medium Roast</h3>
            <p className="mt-3 text-sm leading-6 text-stone-300"></p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
<section id="experience" className="relative min-h-[760px] overflow-hidden border-t border-white/10">
  <div className="absolute inset-0 z-0 opacity-45 blur-[1px] bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />
  <div className="absolute inset-0 z-[1] bg-black/20" />
  <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/60 via-black/45 to-black/15" />
  <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/45 via-transparent to-transparent" />

  <div className="relative z-10 flex min-h-[760px] items-center px-6 md:px-12 lg:px-20">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ staggerChildren: 0.12 }}
      className="max-w-xl"
    >
      <motion.p variants={fadeUp} className="mb-4 text-xs tracking-[0.32em] uppercase text-amber-300/70">
        The Experience
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl leading-[0.95]">
        Slow mornings.<br />
        Clear focus.<br />
        Better coffee.
      </motion.h2>

      <motion.p variants={fadeUp} className="mt-8 max-w-lg text-lg leading-8 text-stone-200">
        Crafted for intentional mornings.
      </motion.p>
    </motion.div>
  </div>
</section>

{/* WHY VARKA */}
<section
  id="why"
  className="relative border-t border-white/[0.06] bg-[#050505] py-32 overflow-hidden hover:bg-white/[0.02] transition-all duration-500"
>
  <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

    <motion.p
      variants={fadeUp}
      className="mb-4 text-xs tracking-[0.32em] uppercase text-amber-300/70"
    >
      Why Varka
    </motion.p>

    <motion.h2
     variants={fadeUp}
     className="max-w-5xl font-serif text-5xl md:text-7xl leading-[1.02]"
    >
      Crafted for people who want more from their coffee.
    </motion.h2>

    <motion.p
      variants={fadeUp}
      className="mt-8 max-w-2xl text-lg leading-8 text-stone-300"
    >
      Varka was created around balance — bold flavor, clean design,
      and the kind of daily ritual that feels intentional.
    </motion.p>

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-4">
            <Why icon={<Mountain />} title="Specialty-Grade Beans" text="Selected for balance, aroma, and everyday smoothness." />
            <Why icon={<Flame />} title="Precision Roasted" text="Roasted to bring out depth without bitterness." />
            <Why icon={<Coffee />} title="Balanced & Smooth" text="A medium roast crafted for daily clarity." />
            <Why icon={<ShieldCheck />} title="Premium Experience" text="From visual design to the final sip." />
          </div>
        </div>
      </section>

  {/* FINAL CTA */}
      <section id="shop" className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-35 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
        <div className="relative z-10 grid min-h-[620px] grid-cols-1 items-center gap-12 px-6 py-20 md:px-12 lg:grid-cols-2 lg:px-20">
          <div>

          <motion.h2
  variants={fadeUp}
  className="max-w-[580px] font-serif text-5xl md:text-7xl leading-[1.02]"
>
  Made for the ritual
  <br />
  you come back to
  <br />
  every day.
</motion.h2>

<motion.p
  variants={fadeUp}
  className="mt-8 max-w-xl text-lg leading-8 text-stone-300"
>
  A smooth medium roast crafted for balance, comfort, and
  daily clarity.
</motion.p>

<motion.div
  variants={fadeUp}
  className="mt-10 flex items-center gap-4"
>
  <a
    href="https://shopvarka.com/products/smith-river-medium"
    className="inline-flex items-center justify-center rounded-full bg-[#c89055] px-9 py-4 text-[11px] font-medium tracking-[0.22em] uppercase text-black transition-all duration-500 hover:-translate-y-[2px] hover:bg-[#d49a61]"
  >
    Shop Medium Roast
  </a>
  <a
    href="https://shopvarka.com/collections/all"
    className="inline-flex items-center justify-center rounded-full border border-white/[0.08] hover:border-white/25 bg-white/[0.02] px-9 py-4 text-[11px] font-medium tracking-[0.22em] uppercase text-white transition-all duration-500 hover:border-white/40 hover:bg-white/[0.04]"
  >
    Explore Collection
  </a>

      </motion.div>

          </div>
          <div className="rounded-3xl border border-white/[0.08] bg-black/35 p-10 backdrop-blur-xl">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <Truck className="text-amber-300/80" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em]">Free Shipping</p>
                <p className="mt-1 text-sm text-stone-400 leading-6">
                  Small-batch roasted.<br />
                  Ready for your next ritual.</p>
              </div>
            </div>
            <div className="pt-6 text-sm leading-7 text-stone-300">
              Crafted fresh.
              <br />
              Packed with care.
              <br />
              Ready for your next ritual.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div>
      <div className="mb-4 text-amber-300/80 [&>svg]:h-7 [&>svg]:w-7">{icon}</div>
      <p className="text-xs uppercase tracking-[0.22em] text-stone-200">{title}</p>
      <p className="mt-2 text-sm leading-6 text-stone-400">{text}</p>
    </div>
  );
}

function Why({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 text-left transition hover:bg-white/[0.045]">
      <div className="mb-6 text-amber-300/80 [&>svg]:h-8 [&>svg]:w-8">{icon}</div>
      <h3 className="text-sm uppercase tracking-[0.22em] text-stone-100">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-stone-400">{text}</p>
    </div>
  );
}