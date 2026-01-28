const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">Kontakt</h1>
      <p className="text-gray-700 mb-6">
        Schreibe mir eine Nachricht dann melde ich mich umgehend zurück.
      </p>

      <form className="space-y-6">
        <input
          className="w-full p-3 border border-pink-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Name"
        />
        <input
          className="w-full p-3 border border-pink-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="E-Mail"
        />
        <textarea
          className="w-full p-3 border border-pink-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          rows={5}
          placeholder="Nachricht"
        />

       
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-pink-600 text-white font-medium rounded hover:bg-pink-700 transition-colors"
          >
            Absenden
          </button>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-2.5 bg-gray-200 text-gray-800 font-medium rounded hover:bg-gray-300 transition-colors border border-gray-400"
          >
            Zurück
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;