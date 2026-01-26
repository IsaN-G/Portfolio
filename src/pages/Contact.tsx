
const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">Kontakt</h1>
      <p className="text-gray-700 mb-6">
        Schreibe mir eine Nachricht dann melde ich mich umgehend zurück.
      </p>
      <form className="space-y-4">
        <input className="w-full p-3 border-pink-600 border rounded" placeholder="Name" />
        <input className="w-full p-3 border-pink-600 border rounded" placeholder="E-Mail" />
        <textarea
          className="w-full p-3 border-pink-600 border rounded"
          rows={4}
          placeholder="Nachricht"
        />
        <button
          type="submit"
          className="text-black hover:text-gray-300 border-2 border-pink-600 px-2 py-1"
        >
          Absenden
        </button>
      </form>
    </div>
  );
};

export default Contact;
