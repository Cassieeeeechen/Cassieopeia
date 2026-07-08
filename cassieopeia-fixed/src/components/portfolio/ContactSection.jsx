import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error('Form submission failed');
      setSent(true);
      toast.success("Message sent! I'll be in touch soon.");
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-10" style={{ background: 'transparent' }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <p className="text-[12px] font-medium tracking-[0.45em] uppercase mb-4" style={{ color: 'rgba(130,100,220,0.7)' }}>Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 leading-tight" style={{ color: '#1a1535' }}>
            Let's create <span className="iridescent-text font-light">something beautiful</span>
          </h2>
          <p className="text-gray-400 font-light mb-12 text-[15px]">
            Have a project in mind? I'd love to hear about it.
          </p>

          <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] font-medium tracking-[0.15em] uppercase text-gray-400 mb-2 block">Name</label>
                <Input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-white/50 border-gray-200/60 rounded-2xl h-12 text-[14px]" />
              </div>
              <div>
                <label className="text-[11px] font-medium tracking-[0.15em] uppercase text-gray-400 mb-2 block">Email</label>
                <Input required type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-white/50 border-gray-200/60 rounded-2xl h-12 text-[14px]" />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium tracking-[0.15em] uppercase text-gray-400 mb-2 block">Message</label>
              <Textarea required placeholder="Tell me about your project..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-white/50 border-gray-200/60 rounded-xl resize-none text-[14px]" />
            </div>

            <button
              type="submit"
              disabled={sending || sent}
              className="w-full h-12 rounded-2xl bg-[#8073f2] text-white font-medium text-[12px] uppercase tracking-[0.18em] flex items-center justify-center gap-2 hover:bg-black transition-all duration-300 disabled:opacity-50">
              {sent
                ? <><CheckCircle size={15} /> Sent!</>
                : sending
                ? <Loader2 size={15} className="animate-spin" />
                : <><Send size={13} /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}