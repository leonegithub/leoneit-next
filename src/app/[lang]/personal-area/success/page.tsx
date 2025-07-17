"use client"

interface SuccessPageProps {
  params: {
    lang: 'it' | 'en' | 'es'
  }
}

export default function Success({ params }: SuccessPageProps) {
  const { lang } = params;

  const messages = {
    it: {
      title: "Pagamento Completato!",
      subtitle: "Il tuo acquisto è stato elaborato con successo",
      description: "Riceverai una email di conferma a breve. Puoi trovare i tuoi acquisti nella sezione 'Acquistati' della tua area personale.",
      button: "Vai all'Area Personale"
    },
    en: {
      title: "Payment Completed!",
      subtitle: "Your purchase has been processed successfully",
      description: "You will receive a confirmation email shortly. You can find your purchases in the 'Purchased' section of your personal area.",
      button: "Go to Personal Area"
    },
    es: {
      title: "¡Pago Completado!",
      subtitle: "Tu compra ha sido procesada exitosamente",
      description: "Recibirás un email de confirmación en breve. Puedes encontrar tus compras en la sección 'Comprados' de tu área personal.",
      button: "Ir al Área Personal"
    }
  };

  const content = messages[lang];

  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-8 max-w-md mx-auto">
        {/* Icona di successo */}
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--verde)' }}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        {/* Titolo */}
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--verde)' }}>
          {content.title}
        </h1>

        {/* Sottotitolo */}
        <h2 className="text-xl mb-4 blue">
          {content.subtitle}
        </h2>

        {/* Descrizione */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {content.description}
        </p>

        {/* Pulsante */}
        <button 
          onClick={() => window.location.href = `/${lang}/personal-area`}
          className="bg-blue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          {content.button}
        </button>
      </div>
    </main>
  );
}