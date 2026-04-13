import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

 const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json().catch(() => ({}));

    if (res.ok) {
      alert('Demande envoyée avec succès ✅');
      form.reset();
    } else {
      alert(result.error || 'Erreur lors de l’envoi ❌');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    alert('Erreur réseau - Vérifiez votre connexion internet ❌');
  }

  setLoading(false);
};
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Demander un devis
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Réponse sous 24h
        </p>

        <form onSubmit={sendEmail} className="space-y-6">

          <input
            name="name"
            placeholder="Nom / Entreprise"
            required
            className="w-full p-4 bg-white/10 rounded-xl"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-4 bg-white/10 rounded-xl"
          />

          <input
            name="phone"
            placeholder="Téléphone"
            required
            className="w-full p-4 bg-white/10 rounded-xl"
          />

          <select
            name="product"
            required
            className="w-full p-4 bg-white/10 rounded-xl"
          >
            <option value="">Type de sac</option>
            <option>Sac en polypropylène</option>
            <option>Sac personnalisé</option>
            <option>Autre</option>
          </select>

          <input
            name="quantity"
            type="number"
            placeholder="Quantité (ex: 5000)"
            required
            className="w-full p-4 bg-white/10 rounded-xl"
          />

          <input
            name="custom"
            placeholder="Personnalisation"
            className="w-full p-4 bg-white/10 rounded-xl"
          />

          <textarea
            name="message"
            placeholder="Détails supplémentaires"
            className="w-full p-4 bg-white/10 rounded-xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-xl hover:bg-gray-200 transition"
          >
            {loading ? 'Envoi...' : 'Envoyer la demande →'}
          </button>

        </form>

        <a
          href="https://wa.me/213XXXXXXXXX"
          className="block text-center mt-6 text-green-400 hover:underline"
        >
          Ou contactez-nous sur WhatsApp
        </a>

      </div>
    </section>
  );
}
