/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Users, Award, CreditCard } from 'lucide-react';

const SERVICES = [
  {
    id: 'facial',
    title: 'Facial',
    description: 'Deep cleansing and rejuvenating treatments for a radiant complexion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-zph9gk_Rrc2yuFm1VzTFmT8kIW_j5cSh7HfFWxOL2hZsnS-R_KaQ4BsjbgX8R5OABvDkyQRJudWNI67CH1wYe3j3BcEv8Zq_oS9c8_t_5PYRnC_9AOLLYtNRfC7ImXoM5GFOwPypVeq3W2jOuZoRU1IijqpuPI3_BOd6CWHGS6B69bygwXT4NSQAyqgQrsLIR6MIeI7OW7_91VP-9Ut2BslUL6Dy_da7n_5WcOVrk3sg5vLoCfwZlVNo4oTdmuv-oUjG-V0qgeo'
  },
  {
    id: 'hair',
    title: 'Hair',
    description: 'Expert styling, coloring, and treatments for healthy, beautiful hair.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdJ7pFgQHySlT3EP2XpbhHIV2hKzO7_UOYU3PvJPUDvJl2A8xIIEP6-V4jpHzfuSQ0cgwnGKsr0yAwn3EinSFLF8U74At8A6FkECx8ne_31tO0V03ah871knAgFm13O5TIdDFtCF7JvWrETzP2dR4Oew05sORO4xuUZwsRNch0j9xykVmdrYtk5dS4KyocvhuaH0ZzWpJmv4pnNa8aVNw9rP4YK_CzLZjP9ETPUXKvzEiizU4VcsvxT0JkOUwf-QHbkGKQJylaoGc'
  },
  {
    id: 'makeup',
    title: 'Makeup',
    description: 'Flawless makeup application for special events or everyday elegance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPJ0ntKSR9d5-hsKISDwzoDjCX-yPSDmKVXlv8hkb9sc2PuH9N2Dfa4GbDhlFg41xFEArolhLly82IpFRMqw3vRdktJr5iJR7a6AQl5YJMKKLVlz33arlKcofYgfhRgSTE4xmQvPOWCMAiyuDjIX8j13aRUczVoFovDGvEuC8hmneJV6WznwSKb6Y1E0xZp0XS-kJ9BWOtd7_CjAvkiFh65iqDafj_367xH6aKOo51iw6Jai5Vxfxnbjylwd3qeM3X_bntzejAPmo'
  },
  {
    id: 'skincare',
    title: 'Skincare',
    description: "Personalized regimens and products to maintain your skin's health.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALizvUX4sSRnqw55BymtURh1gIOfpNgKX5FIcN5-zaWfyoVYIoJl_Y3XepG-jFxckjox8yf9zYPwYJ4GfwOAVQiM2dn1QXvfEpRPLs1cEwLuNJ9AjGGjAkDDirh34_HSMVfutxtY3bR1TPoqn1tFnldGETWaYpn7QPqJhcoP1XbHh_LUGtxaslbK6HyMT8rD1JhzgYLiapm4n5orddBiQMiNs5jjb1EB74d2-GmUdmKuSgxhsG3-N5-lI_tMU1rSb223XG2A51JLA'
  }
];

const REVIEWS = [
  {
    name: 'Sarah Jenkins',
    rating: 5,
    text: "The facial treatment completely transformed my skin. The ambiance is so relaxing, and the staff is incredibly professional. I won't go anywhere else.",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdph5e2Vkc1PwkmSDqUy68vp2VwPfvWMtY60Pk5rMSdQYhyt2ZHgC9pVVlwTXo6273BiLAz6DDz4jQoj7OYEFNz6QFwT6ktLvkMDBVi2z6bDpvFBTRuFyZKnsMyEVuT8hocYLzcvlMy6aycbF1F3cS6O3YmgpJGVFxRaX_rW8zTUfXXeRPTx3f3uKM82544CWFd-0VSTFHv6XXIewK1N1L-EDtSXENn4xT8U6zT0Du1j2BQo8jxn6b7YeXPi31Gm8HLWTzzTGYPNg'
  },
  {
    name: 'Elena Rodriguez',
    rating: 5,
    text: "Booked them for my wedding makeup and hair. They listened exactly to what I wanted and executed it perfectly. Truly a luxury experience.",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAka1-OarRAxagUL0PwpOqzCKCCyL71KFtutwszHMSSxK_LapYWwBwbTsjjGHT17_aWr1gt3lOH2Rq8Y_GWkZz9Za4cwms4dgoEH4MsMhH5m950hC_-bcPi3fHcFDmZwJGVt1RzzjcFSo58uISrt35jbElCNhOZDrE5UjsgHbm0uBqfhSU8GfEynx5r9cFN8x7uwaWpEzV3RmvUHfSocFusF2ugMkLYqaMeiZ4yjSKod7tuCzy5uOIjPk1z7Gv8zL8amC9oenNyJ2U'
  },
  {
    name: 'Mia Chen',
    rating: 5,
    text: "The attention to detail here is unmatched. I love the premium products they use. My hair has never felt healthier.",
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXIl3ggmm_GpCOAPmhkwhUVEt_T-rSRqnI3ay6oBo3wy8b4khoCO-0BZf4eONTKcRi5eqeNgD-47MWY-uZ-J1JHAlYMMH9fUtoXTUZ7TrdES2x83ZtubQ-KearRBUKN7o1-3D5qkRYEhUQETmRSAvBNX4OqTW_NVOs0DRdw32N2LzVczsu-EP9nuKS8QZurowkcmXSshiipUo_ypfs3SFaZsftj40fdSSlYqY-Pim1puHxA3UIohXjk_EbKN4ofClZTToaRCfUTUU'
  }
];

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a className="text-2xl font-headline font-bold text-white tracking-tighter" href="#">PRISHA CARE</a>
        <div className="hidden md:flex space-x-8 items-center">
          <a className="text-white border-b-2 border-primary pb-1 font-medium font-label" href="#">Home</a>
          <a className="text-slate-400 hover:text-white transition-colors font-label" href="#">Services</a>
          <a className="text-slate-400 hover:text-white transition-colors font-label" href="#">Booking</a>
          <a className="text-slate-400 hover:text-white transition-colors font-label" href="#">Contact</a>
        </div>
        <button className="primary-gradient text-white px-6 py-2 rounded-xl font-label font-medium hover:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/20">
          Book Appointment
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-5 space-y-8 z-10 relative"
        >
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight">
            Enhance Your <span className="font-bold">Natural Beauty</span>
          </h1>
          <p className="font-body text-lg text-slate-400 leading-relaxed">
            Professional beauty services at your doorstep. Experience luxury skincare and styling tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="primary-gradient text-white px-8 py-4 rounded-xl font-label font-medium hover:scale-95 transition-transform duration-200 shadow-xl shadow-indigo-600/20">
              Book Now
            </button>
            <button className="px-8 py-4 rounded-xl font-label font-medium text-white bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-200">
              Explore Services
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-7 relative"
        >
          <div className="rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/2] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <img 
              alt="Model receiving treatment" 
              className="w-full h-full object-cover" 
              src="/src/assets/images/regenerated_image_1777559467429.png" 
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function Services() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="font-body text-slate-400">Curated treatments designed to rejuvenate and elevate your natural glow.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <img alt={service.title} className="h-48 w-full object-cover" src={service.image} />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="font-body text-sm text-slate-400 mb-4">{service.description}</p>
                </div>
                <a className="font-label text-sm uppercase tracking-widest text-primary font-bold hover:text-white transition-colors inline-block w-max" href="#">Learn More</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">Why Choose Prisha</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-6 text-indigo-400 shadow-2xl">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Experienced Staff</h3>
            <p className="font-body text-slate-400 text-center max-w-xs">Our team consists of highly trained professionals dedicated to their craft.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-6 text-purple-400 shadow-2xl">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Premium Products</h3>
            <p className="font-body text-slate-400 text-center max-w-xs">We use only the finest, carefully selected products for all our treatments.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-6 text-emerald-400 shadow-2xl">
              <CreditCard className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Affordable Pricing</h3>
            <p className="font-body text-slate-400 text-center max-w-xs">Luxury experiences offered at accessible rates without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Client Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[40px] shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <img alt={review.name} className="w-12 h-12 rounded-full border border-white/20 object-cover mr-4" src={review.avatar} />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <div className="text-indigo-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-body text-slate-300 italic leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-600/40 to-purple-600/40 backdrop-blur-2xl rounded-[40px] p-12 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">Book Your Appointment Today</h2>
        <p className="font-body text-lg text-slate-300 mb-10 relative z-10">Reserve your time for ultimate relaxation and rejuvenation.</p>
        <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-95 transition-transform duration-200 shadow-xl relative z-10">
          Book Now
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-12 px-8 text-white max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <a className="text-xl font-bold text-white mb-4 block tracking-tighter" href="#">PRISHA CARE</a>
          <p className="font-body text-sm text-slate-400 tracking-wide leading-relaxed mb-4">
            Elevating your natural beauty through curated, luxury experiences.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Legal</h4>
          <ul className="space-y-2">
            <li><a className="font-body text-sm text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="font-body text-sm text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Company</h4>
          <ul className="space-y-2">
            <li><a className="font-body text-sm text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
            <li><a className="font-body text-sm text-slate-400 hover:text-white transition-colors" href="#">Sustainability</a></li>
          </ul>
        </div>
        <div className="md:col-span-1 flex items-end md:justify-end">
          <p className="font-body text-xs text-slate-400">© 2024 Prisha Care Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface relative overflow-x-hidden">
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] mesh-gradient-purple blur-[120px]"></div>
        <div className="absolute bottom-[-50px] right-[100px] w-[700px] h-[700px] mesh-gradient-blue blur-[150px]"></div>
        <div className="absolute top-[200px] right-[-100px] w-[500px] h-[500px] mesh-gradient-orange blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
