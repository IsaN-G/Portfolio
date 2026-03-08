import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs.sendForm(
      'service_owhweoa', 
      'template_mxb0dpq', 
      form.current, 
      'Qtk4rZ3qY7aw-1Otg'
    )
    .then(() => {
        setIsSuccess(true);
        setIsSending(false);
        form.current?.reset();
      
        setTimeout(() => setIsSuccess(false), 5000);
    }, (error) => {
        console.error("Fehler beim Senden:", error.text);
        alert("Fehler beim Senden. Bitte versuche es später erneut.");
        setIsSending(false);
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-60 pb-20 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-10">
          <div className="space-y-4">
          
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 opacity-90 text-white dark:text-violet-400 text-s font-black uppercase tracking-widest shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-95"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400"></span>
              </span>
              Verfügbar für Praktika (Teilzeit)
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9]">
              Lass uns <br />
              <span className="text-pink-600 italic font-serif">connecten.</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-100 max-w-md leading-relaxed">
              Vom erstklassigen Service zum erstklassigen Code im Browser: Organisationstalent trifft auf modernes Webdesign.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-5 p-6 bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm group hover:border-pink-500/50 transition-all">
              <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <FaLinkedin size={26} />
              </div>
              <div>
                <p className="text-[13px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1">Netzwerk</p>
                <a href="https://www.linkedin.com/in/isabelle-nauber-gelhaar-2644b4347" 
                  target="_blank" 
                  rel="noopener noreferrer" className="font-bold text-lg dark:text-white hover:text-pink-600 transition-colors">Isabelle auf LinkedIn</a>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm group hover:border-pink-500/50 transition-all">
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <FaMapMarkerAlt size={26} />
              </div>
              <div>
                <p className="text-[13px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1">Standort</p>
                <span className="font-bold text-lg dark:text-white leading-tight">Toppenstedt / Hamburg / Lüneburg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
         
          <div className="absolute -inset-2 bg-gradient-to-tr from-pink-500/20 to-rose-500/20 rounded-[3rem] blur-2xl -z-10" />
          
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="relative bg-white dark:bg-slate-950 p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 space-y-10 min-h-[400px] flex flex-col justify-between"
          >
            {isSuccess && (
              <div className="flex items-center gap-4 p-5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-2xl border border-green-200 dark:border-green-800 animate-in fade-in slide-in-from-top-4">
                <FaCheckCircle className="text-xl shrink-0" />
                <p className="font-bold text-sm">E-Mail angekommen! Ich melde mich so schnell wie möglich bei dir.</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[13px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Name</label>
                <input
                  name="from_name" 
                  required
                  defaultValue=""
                  placeholder=" " 
                  aria-label="Name"
                  className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-pink-500 focus:bg-white dark:focus:bg-slate-700 outline-none transition-all text-slate-900 dark:text-white font-medium"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[13px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">E-Mail Adresse</label>
                <input
                  name="user_email" 
                  type="email"
                  required
                  defaultValue=""
                  placeholder=" " 
                  aria-label="E-Mail Adresse"
                  className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-pink-500 focus:bg-white dark:focus:bg-slate-700 outline-none transition-all text-slate-900 dark:text-white font-medium"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[13px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Deine Nachricht</label>
              <textarea
                name="message" 
                required
                defaultValue=""
                placeholder=" " 
                aria-label="Deine Nachricht"
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-pink-500 focus:bg-white dark:focus:bg-slate-700 outline-none transition-all text-slate-900 dark:text-white font-medium min-h-[180px] resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSending}
                className="flex-1 flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-black uppercase tracking-widest text-sm py-5 rounded-2xl transition-all shadow-xl shadow-pink-600/30 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                {isSending ? "Wird gesendet..." : (
                  <>
                    <FaPaperPlane size={16} />
                    Nachricht senden
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-8 py-5 border-2 border-slate-100 dark:border-slate-600 text-slate-400 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all uppercase text-xs tracking-widest"
              >
                Zurück
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;