import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Section = ({ title, children }) => (
  <section className="relative py-12">
    <div className="mx-auto max-w-6xl px-6">
      <h2 className="text-white/90 text-xl font-semibold mb-6 flex items-center gap-2">
        <span className="h-5 w-1 rounded bg-sky-400" /> {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  </section>
);

export default function Sections() {
  return (
    <div className="relative">
      {/* Work Experience */}
      <Section title="Experience">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-sky-500/20 text-sky-300">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Lead Product Designer</h3>
                <p className="text-xs text-white/60">Hologram Labs • 2021 – Present</p>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  <li>Drove a redesign that increased conversion by 28%.</li>
                  <li>Prototyped complex interactions with motion and 3D.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </Section>

      {/* Education and Certifications */}
      <Section title="Education & Certifications">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-sky-500/20 text-sky-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold">B.Sc. Human-Computer Interaction</h3>
              <p className="text-xs text-white/60">Carnegie Mellon University</p>
              <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                <li>Certified in UX Research and Accessibility</li>
                <li>Design systems and prototyping specialization</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-sky-500/20 text-sky-300">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Speaking & Publications</h3>
              <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                <li>Design Matters 2024 – Motion for Meaningful UX</li>
                <li>Smashing Magazine – Systems Thinking in Product Design</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Socials */}
      <section className="relative py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/90">
              <h3 className="font-semibold">Let’s connect</h3>
              <p className="text-white/60 text-sm">I share work-in-progress, ideas, and threads.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="https://github.com" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-3 py-2 border border-white/10 text-sm"><Github className="w-4 h-4"/> GitHub</a>
              <a href="https://twitter.com" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-3 py-2 border border-white/10 text-sm"><Twitter className="w-4 h-4"/> Twitter</a>
              <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-3 py-2 border border-white/10 text-sm"><Linkedin className="w-4 h-4"/> LinkedIn</a>
              <a href="mailto:john@hologramlabs.io" className="inline-flex items-center gap-2 rounded-xl bg-sky-500/90 hover:bg-sky-400 text-slate-900 font-semibold px-3 py-2 text-sm"><Mail className="w-4 h-4"/> Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
