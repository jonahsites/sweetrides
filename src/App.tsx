import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Phone, ArrowUpRight, Zap, Star, Shield, MapPin, Clock } from "lucide-react";
import Showcase from "./components/Showcase";
import Inventory from "./components/Inventory";
import { useState } from "react";

const LOGO_URL =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/RxQjt5OLEt2Qw8I4c4px/media/69da8e22b30bc52371f3f404.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Fleet", type: "page" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const faqItems = [
  { q: "What are the requirements to book?", a: "You must be at least 21 years old (25 for certain elite models), have a valid driver's license, and provide proof of full coverage insurance." },
  { q: "What if I don't have full coverage insurance?", a: "We offer various rental car damage protection options. Please contact our team for details on opting in." },
  { q: "Do I still need personal car insurance if I opt in for protection?", a: "Rental damage protection is not a substitute for personal liability insurance. Requirements vary, so please confirm with your agent." },
  { q: "Can I add an additional driver to my rental?", a: "Yes, additional drivers can be added for a fee, provided they meet all age and insurance requirements." },
  { q: "What if my insurance deductible is over $2,500?", a: "We may require an additional security deposit or supplemental coverage in certain high-deductible cases." },
  { q: "Do you have any extra hidden fees?", a: "Transparency is key. We detail all costs upfront, including delivery, fuel, and security deposits." },
  { q: "Do you offer delivery service?", a: "Yes! We offer delivery across the Inland Empire and surrounding areas. Contact us to confirm your location." },
  { q: "How many miles are included with my rental?", a: "Standard rentals include 100–150 miles per day. Excess mileage fees apply thereafter." },
  { q: "What is your security deposit policy?", a: "A refundable security deposit is required for all rentals. The amount varies based on the vehicle selected." },
  { q: "What is your cancellation policy?", a: "Cancellations made 72+ hours in advance are eligible for a credit. Late cancellations may incur fees." },
  { q: "Do you offer pick-up or drop-off outside business hours?", a: "Yes! Please coordinate with our team in advance for after-hours service." },
  { q: "Do you offer roadside assistance?", a: "Every rental includes 24/7 roadside assistance for your peace of mind." },
  { q: "Less than 72-hour reservation?", a: "We can often accommodate last-minute requests. Check availability directly for same-day rentals." },
  { q: "Do you offer a military discount?", a: "We're proud to support our service members. Ask about our military discount program when booking." },
];

const specs = [
  { val: "$199+", label: "Starting / Day" },
  { val: "24+", label: "Fleet Vehicles" },
  { val: "909", label: "Call Us" },
  { val: "24/7", label: "Support" },
];

export default function App() {
  const [showInventory, setShowInventory] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div className="relative bg-luxury-black font-sans selection:bg-accent selection:text-black overflow-x-hidden" id="home">
      {/* Background pattern */}
      <div className="fixed inset-0 z-0 bg-grid-scan pointer-events-none" />
      <div className="fixed inset-0 z-0 retro-stripe opacity-100 pointer-events-none" />

      {/* Floating Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 px-2 py-2 bg-black/60 backdrop-blur-xl border border-accent/25 rounded-full pointer-events-auto">
        <div className="flex items-center gap-3 px-4 py-1.5 border-r border-accent/20">
          <img
            src={LOGO_URL}
            alt="Sweet EV Rides"
            className="h-9 w-9 rounded-full object-cover border border-accent/40"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-sm text-white hidden md:block tracking-wide">Sweet EV Rides</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2 px-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.type === "page") {
                  e.preventDefault();
                  setShowInventory(true);
                }
              }}
              className="px-3 py-2 text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-accent transition-colors cursor-pointer rounded-full hover:bg-accent/5"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        <button
          onClick={() => setShowInventory(true)}
          className="ml-2 bg-accent text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-accent/80 transition-colors retro-glow"
        >
          Book Now
        </button>
      </nav>

      {/* HERO */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-8 md:px-24 pt-32"
      >
        <div className="w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* Left: Big retro heading */}
          <div className="relative z-20">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-1 bg-accent rounded-full" />
                <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent font-sans">
                  Car Rental Company
                </span>
              </div>

              <h1 className="font-display text-7xl md:text-9xl lg:text-[130px] leading-[0.88] mb-10 bubble-text">
                RIDE
                <br />
                <span className="text-accent">SWEET.</span>
              </h1>

              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mb-10 font-sans">
                Premium EV & luxury vehicle rentals delivered to your door.
                Explore the Inland Empire in style — starting at $199/day.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowInventory(true)}
                  className="bg-accent text-black px-8 py-4 rounded-full font-display text-xl hover:bg-accent/80 transition-colors retro-glow flex items-center gap-2"
                >
                  <Zap size={18} />
                  Browse Fleet
                </button>
                <a
                  href="tel:9095062321"
                  className="flex items-center gap-3 border-2 border-accent/60 text-accent px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent hover:text-black hover:border-accent transition-colors"
                >
                  <Phone size={14} />
                  909-506-2321
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Circular badge */}
          <motion.div
            initial={{ scale: 0.75, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-125" />
              <div className="absolute inset-[-28px] rounded-full border-2 border-dashed border-accent/25 animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-[-16px] rounded-full border border-accent/15" />
              <img
                src={LOGO_URL}
                alt="Sweet EV Rides"
                className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full object-cover border-4 border-accent retro-glow"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="w-full max-w-[1500px] mt-20 grid grid-cols-2 lg:grid-cols-4 border border-accent/20 rounded-2xl overflow-hidden">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="px-8 py-10 flex flex-col gap-2 group cursor-pointer hover:bg-accent/8 transition-colors border-r border-accent/10 last:border-r-0"
            >
              <span className="text-[10px] font-black text-white/30 uppercase tracking-widest font-sans">
                {spec.label}
              </span>
              <span className="text-4xl font-display text-accent group-hover:scale-105 transition-transform origin-left">
                {spec.val}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Checkerboard divider */}
      <div className="relative z-10 w-full h-5 bg-checker opacity-70" />

      {/* SHOWCASE SECTION */}
      <div id="fleet" className="relative z-10">
        <Showcase />
      </div>

      {/* Checkerboard divider */}
      <div className="relative z-10 w-full h-5 bg-checker opacity-70" />

      {/* SERVICES */}
      <section
        id="services"
        className="relative z-20 py-40 bg-luxury-grey px-8 md:px-16"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl">
              <span className="text-[11px] font-black uppercase tracking-[0.7em] text-accent mb-6 block font-sans">
                What We Offer
              </span>
              <h2 className="font-display text-6xl md:text-8xl leading-[0.85]">
                SWEET
                <br />
                <span className="text-green-outline">PERKS.</span>
              </h2>
            </div>
            <div className="flex flex-col items-end text-right">
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8 uppercase tracking-widest font-sans">
                Door delivery / 24-7 support / Flexible rentals
              </p>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-3 h-3 bg-accent rounded-full" />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[380px]">
            {/* Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-luxury-black rounded-2xl overflow-hidden border border-accent/10 corner-bracket"
            >
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad42243c2d?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-70 transition-editorial"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent h-full" />
              <div className="absolute bottom-10 left-10">
                <span className="text-[11px] font-black text-accent mb-4 block uppercase tracking-widest font-sans">
                  Premium Fleet
                </span>
                <h3 className="font-display text-4xl mb-3">Electric &amp; Luxury</h3>
                <p className="text-white/50 text-sm max-w-xs font-sans leading-relaxed">
                  Hand-picked EVs and performance cars for every occasion.
                </p>
              </div>
              <div className="absolute top-10 right-10 font-display text-5xl text-white/8 group-hover:text-accent/30 transition-colors">
                01
              </div>
            </motion.div>

            {/* Green CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-4 group bg-accent p-10 rounded-2xl flex flex-col justify-between hover:bg-accent/85 transition-colors cursor-pointer"
            >
              <div className="text-black">
                <span className="text-[10px] font-black text-black/50 mb-4 block uppercase tracking-widest font-sans">
                  Sweet Deal
                </span>
                <h3 className="font-display text-4xl mb-4 leading-tight">Green Ride Package</h3>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-black/70 text-xs uppercase tracking-[0.18em] leading-relaxed font-sans">
                  Full EV experience with free charging coordination and door-to-door delivery.
                </p>
                <ArrowUpRight
                  size={44}
                  className="text-black/25 group-hover:text-black transition-all transform group-hover:translate-x-2 group-hover:-translate-y-2"
                />
              </div>
            </motion.div>

            {/* Small card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-4 bg-luxury-black p-10 border border-accent/10 hover:border-accent/40 transition-colors rounded-2xl"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-xl">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-display text-2xl mb-3">24/7 Support</h4>
                  <p className="text-white/35 text-[11px] uppercase tracking-widest leading-relaxed font-sans">
                    Round-the-clock technical and logistical support for all clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Wide card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-luxury-black rounded-2xl overflow-hidden border border-accent/10 flex items-center p-10"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center w-full">
                <div className="w-20 h-20 border-2 border-accent/50 flex items-center justify-center rounded-full retro-glow shrink-0">
                  <MapPin size={28} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl mb-3">Door-to-Door Delivery</h3>
                  <p className="text-white/40 text-sm uppercase tracking-widest leading-loose font-sans">
                    We bring the car to you — anywhere in the Inland Empire and surrounding areas.
                  </p>
                </div>
                <a
                  href="tel:9095062321"
                  className="px-8 py-4 bg-accent/10 border border-accent/30 text-accent text-[11px] font-black uppercase tracking-widest hover:bg-accent hover:text-black transition-colors rounded-xl shrink-0 font-sans"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-20 py-48 bg-luxury-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-1 bg-accent rounded-full" />
                <span className="text-[11px] font-black uppercase tracking-[0.7em] text-accent font-sans">
                  Our Story
                </span>
              </div>
              <h2 className="font-display text-7xl md:text-8xl leading-[0.85] mb-12">
                WHY
                <br />
                <span className="text-green-outline">SWEET?</span>
              </h2>
              <div className="space-y-6 text-white/55 text-lg leading-relaxed font-sans">
                <p>
                  Sweet EV Rides is the Inland Empire's go-to destination for premium
                  EV and luxury car rentals. We believe everyone deserves to ride in
                  something extraordinary.
                </p>
                <p className="text-base text-white/35 leading-loose">
                  Our carefully curated fleet spans the latest electric vehicles and
                  head-turning luxury rides — all maintained to the highest standards
                  and delivered with genuine hospitality.
                </p>
              </div>
              <div className="mt-14 grid grid-cols-2 gap-10 border-t border-accent/15 pt-14">
                <div>
                  <p className="font-display text-5xl text-accent mb-2">24+</p>
                  <p className="text-[10px] uppercase tracking-[0.45em] text-accent font-black font-sans">
                    Fleet Vehicles
                  </p>
                </div>
                <div>
                  <p className="font-display text-5xl text-accent mb-2">5★</p>
                  <p className="text-[10px] uppercase tracking-[0.45em] text-accent font-black font-sans">
                    Rated Service
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative aspect-square bg-white/[0.02] border border-accent/15 flex items-center justify-center p-10 rounded-2xl corner-bracket overflow-hidden">
              <div className="absolute inset-0 opacity-15 blur-3xl bg-accent/30" />
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad42243c2d?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover rounded-xl opacity-70 hover:opacity-100 transition-editorial"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-px h-full bg-accent/15 absolute left-1/2" />
                <div className="h-px w-full bg-accent/15 absolute top-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkerboard divider */}
      <div className="relative z-10 w-full h-5 bg-checker opacity-70" />

      {/* FAQ */}
      <section className="relative z-20 py-40 bg-luxury-grey px-8 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.7em] text-accent mb-6 block font-sans">
              Got Questions?
            </span>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.85]">
              WE GOT
              <br />
              <span className="text-green-outline">ANSWERS.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="border border-accent/15 rounded-2xl overflow-hidden hover:border-accent/35 transition-colors"
              >
                <button
                  className="w-full flex justify-between items-center px-8 py-6 text-left group"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-display text-lg text-white group-hover:text-accent transition-colors pr-6">
                    {item.q}
                  </span>
                  <span
                    className={`font-display text-2xl text-accent shrink-0 transition-transform duration-300 ${
                      activeFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-8 pb-7 text-white/50 text-sm leading-relaxed font-sans">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="relative z-20 bg-luxury-black border-t border-accent/15 px-8 pt-32 pb-16 md:px-16"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Big phone CTA */}
          <div className="text-center mb-24 pb-24 border-b border-accent/10">
            <span className="text-[11px] font-black uppercase tracking-[0.7em] text-accent mb-6 block font-sans">
              Ready to Ride?
            </span>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[100px] leading-[0.85] mb-10">
              CALL US<br />
              <a
                href="tel:9095062321"
                className="text-accent hover:text-white transition-colors retro-glow inline-block"
              >
                909-506-2321
              </a>
            </h2>
            <button
              onClick={() => setShowInventory(true)}
              className="bg-accent text-black px-10 py-5 rounded-full font-display text-2xl hover:bg-accent/80 transition-colors retro-glow"
            >
              Browse the Fleet
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-4 mb-10">
                <img
                  src={LOGO_URL}
                  alt="Sweet EV Rides"
                  className="h-14 w-14 rounded-full object-cover border-2 border-accent/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-display text-xl text-white block leading-tight">
                    Sweet EV Rides
                  </span>
                  <span className="text-[10px] tracking-[0.4em] text-accent font-black uppercase mt-1 font-sans">
                    Car Rental Co.
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/25 font-sans">
                <p>Region: Inland Empire, CA</p>
                <p>Status: Taking Bookings</p>
                <p>Phone: 909-506-2321</p>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.6em] mb-10 text-accent font-sans">
                Fleet
              </h4>
              <div className="flex flex-col gap-6 text-[12px] font-bold uppercase tracking-[0.25em] text-white/45 font-sans">
                {["Electric Vehicles", "Luxury SUVs", "Sports Cars", "Full Inventory"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setShowInventory(true); }}
                    className="hover:text-accent transition-colors w-fit"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.6em] mb-10 text-accent font-sans">
                Info
              </h4>
              <div className="flex flex-col gap-6 text-[12px] font-bold uppercase tracking-[0.25em] text-white/45 font-sans">
                {["About Us", "Services", "FAQ", "Contact"].map((label) => (
                  <a key={label} href={`#${label.toLowerCase().replace(" us", "")}`} className="hover:text-accent transition-colors w-fit">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative p-10 bg-accent/5 border border-accent/15 rounded-2xl overflow-hidden group corner-bracket">
              <div className="absolute inset-0 bg-accent/8 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <h4 className="relative font-display text-xl mb-4 text-white">Book a Ride</h4>
              <p className="relative text-white/40 text-xs mb-8 font-sans leading-relaxed uppercase tracking-widest">
                Ready for something sweet? Call or browse our fleet.
              </p>
              <a
                href="tel:9095062321"
                className="relative flex items-center justify-center gap-2 w-full py-4 bg-accent text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all retro-glow rounded-xl font-sans"
              >
                <Phone size={14} />
                909-506-2321
              </a>
            </div>
          </div>

          <div className="border-t border-accent/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-black tracking-[0.4em] text-white/15 uppercase font-sans">
              © 2026 Sweet EV Rides · All Rights Reserved
            </p>
            <div className="flex gap-8">
              {["Terms", "Privacy", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[10px] font-black tracking-[0.4em] text-white/15 hover:text-accent transition-colors uppercase font-sans"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Side border guides */}
      <div className="fixed inset-0 z-10 pointer-events-none border-x border-accent opacity-[0.02] mx-auto max-w-[1400px]" />

      <AnimatePresence>
        {showInventory && <Inventory onClose={() => setShowInventory(false)} />}
      </AnimatePresence>
    </div>
  );
}
