import { motion } from "framer-motion";
import { ShieldCheck, Download, Mail, Phone, Globe, MapPin } from "lucide-react";
import Spline from "@splinetool/react-spline";

const Badge = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs border border-white/20 backdrop-blur"
  >
    <ShieldCheck className="w-4 h-4 text-sky-300" />
    {children}
  </motion.span>
);

export default function Hero() {
  const handleDownloadVCard = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Doe;John;;;",
      "FN:John Doe",
      "TITLE:Senior Product Designer",
      "ORG:Hologram Labs",
      "EMAIL;TYPE=INTERNET:john@hologramlabs.io",
      "TEL;TYPE=CELL:+1 555 123 4567",
      "URL:https://johndoe.me",
      "ADR;TYPE=WORK:;;100 Market St;San Francisco;CA;94103;USA",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "john-doe.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-20%] top-[-10%] h-[60vh] w-[60vh] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-[-10%] h-[50vh] w-[50vh] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur mb-5">
              <span className="size-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs text-white/80">Available for freelance</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              John Doe
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300">
                Product Designer & Creative Technologist
              </span>
            </motion.h1>

            <p className="mt-5 text-sky-100/80 max-w-xl leading-relaxed">
              I craft delightful, accessible digital products with a focus on motion, clarity, and systems thinking. Let’s build something futuristic and human.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge>Verified identity</Badge>
              <Badge>10+ yrs experience</Badge>
              <Badge>Remote friendly</Badge>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={handleDownloadVCard}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500/90 hover:bg-sky-400 text-slate-900 font-semibold px-4 py-2 transition-colors"
              >
                <Download className="w-4 h-4" /> Save contact
              </button>
              <a href="mailto:john@hologramlabs.io" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/15">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="tel:+15551234567" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/15">
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-white/80 text-sm">
              <div className="inline-flex items-center gap-2"><Globe className="w-4 h-4 text-sky-300" /> johndoe.me</div>
              <div className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-300" /> San Francisco, CA</div>
            </div>
          </div>

          {/* Right profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.25)]">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                  alt="Profile"
                  className="h-20 w-20 rounded-2xl object-cover ring-2 ring-white/20"
                />
                <div>
                  <h3 className="text-white font-semibold text-xl">John Doe</h3>
                  <p className="text-sky-100/80">Senior Product Designer</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Design", "Motion", "Systems"].map((k) => (
                  <div key={k} className="rounded-xl bg-white/10 border border-white/10 text-center py-3 text-white/80 text-sm">
                    {k}
                  </div>
                ))}
              </div>

              <div className="mt-6 text-sky-100/80 text-sm leading-relaxed">
                Open to roles that value craft, prototyping, and product thinking.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
