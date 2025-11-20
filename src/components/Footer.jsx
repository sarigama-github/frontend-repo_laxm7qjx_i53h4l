export default function Footer(){
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} John Doe • Hologram Labs</p>
          <div className="text-white/60 text-sm">Designed with motion • Built for the future</div>
        </div>
      </div>
    </footer>
  );
}
