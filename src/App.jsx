import { useEffect, useMemo, useRef, useState } from 'react';
import { MoonStar, SunMedium, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';

function OrbitalModel() {
  const meshRef = useRef(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <torusKnotGeometry args={[1, 0.28, 160, 24]} />
          <meshStandardMaterial color="#2563eb" emissive="#1d4ed8" emissiveIntensity={0.6} />
        </mesh>
      </Float>
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#2563eb" />
      <pointLight position={[-4, -3, -2]} intensity={0.8} color="#dc2626" />
    </group>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const sections = useMemo(() => [
    { title: 'Services', href: 'services.html', description: 'Design, TypeScript, and SEO solutions.' },
    { title: 'Blog', href: 'blog.html', description: 'Modern web insights and Node.js strategy.' },
    { title: 'Contact', href: 'app.html', description: 'Let’s build something bold together.' }
  ], []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.3),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(220,38,38,0.22),_transparent_35%)]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="portfolio.html" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-red-600 p-1 shadow-lg shadow-blue-500/30">
              <img src="images/Build Ready logo 2.png" alt="Build Ready Digital logo" className="h-full w-full rounded-full object-cover" />
            </div>
            <span className="font-[Syne] text-lg font-semibold tracking-[0.2em] text-white">BUILD READY DIGITAL</span>
          </a>
          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode((prev) => !prev)} className="rounded-full border border-white/10 bg-white/10 p-2.5 text-slate-100 transition hover:border-blue-500 hover:text-blue-300">
              {darkMode ? <MoonStar size={18} /> : <SunMedium size={18} />}
            </button>
            <a href="services.html" target="_blank" rel="noreferrer" className="rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-600/30">Explore Services</a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-16 lg:px-8 lg:py-24">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-300">
              <Sparkles size={16} className="text-blue-400" />
              Lucid React • Tailwind • Three.js
            </div>
            <h1 className="font-[Syne] text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Bold digital experiences for modern brands.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              I build immersive frontends, TypeScript systems, and SEO-driven websites with a striking visual language.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="portfolio.html" target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-blue-600 to-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]">View Portfolio</a>
              <a href="blog.html" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:border-red-500/50">Read the Blog</a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-blue-950/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(37,99,235,0.26),_transparent_45%)]" />
            <div className="relative h-[420px] rounded-[24px] border border-white/10 bg-slate-950/80">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[3, 3, 3]} intensity={1.3} />
                <OrbitalModel />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.9} />
              </Canvas>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {sections.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10">
              <h3 className="mb-2 font-[Syne] text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
