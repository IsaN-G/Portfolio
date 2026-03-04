import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
  
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-12 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4 text-slate-900 dark:text-white">Kontakt</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Schreibe mir eine Nachricht, dann melde ich mich umgehend zurück.
      </p>

      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200">
          Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1 opacity-70">Name</label>
          <input
            name="from_name" 
            required
            className="w-full p-3 border border-pink-600 rounded bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-slate-900 dark:text-white"
            placeholder="Dein Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 opacity-70">E-Mail</label>
          <input
            name="user_email" 
            type="email"
            required
            className="w-full p-3 border border-pink-600 rounded bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-slate-900 dark:text-white"
            placeholder="deine@email.de"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 opacity-70">Nachricht</label>
          <textarea
            name="message" 
            required
            className="w-full p-3 border border-pink-600 rounded bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-slate-900 dark:text-white"
            rows={5}
            placeholder="Wie kann ich dir helfen?"
          />
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            type="submit"
            disabled={isSending}
            className={`px-8 py-3 bg-pink-600 text-white font-medium rounded-lg shadow-md hover:bg-pink-700 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSending ? "Wird gesendet..." : "Absenden"}
          </button>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all"
          >
            Abbrechen
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;