"use client"

interface FailurePageProps {
  params: {
    lang: 'it' | 'en' | 'es'
  }
}

export default function Failure({ params }: FailurePageProps) {
  const { lang } = params;

  const messages = {
    it: {
      title: "Pagamento Fallito",
      subtitle: "Si è verificato un problema durante l'elaborazione del pagamento",
      description: "Il tuo pagamento non è stato completato. Nessun addebito è stato effettuato sul tuo conto. Puoi riprovare o contattare il nostro supporto per assistenza.",
      retryButton: "Riprova",
      supportButton: "Contatta Supporto"
    },
    en: {
      title: "Payment Failed",
      subtitle: "There was a problem processing your payment",
      description: "Your payment was not completed. No charge has been made to your account. You can try again or contact our support for assistance.",
      retryButton: "Try Again",
      supportButton: "Contact Support"
    },
    es: {
      title: "Pago Fallido",
      subtitle: "Hubo un problema al procesar tu pago",
      description: "Tu pago no se completó. No se ha realizado ningún cargo a tu cuenta. Puedes intentarlo de nuevo o contactar nuestro soporte para asistencia.",
      retryButton: "Intentar de Nuevo",
      supportButton: "Contactar Soporte"
    }
  };

  const content = messages[lang];

  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-8 max-w-md mx-auto">
        {/* Icona di errore */}
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>

        {/* Titolo */}
        <h1 className="text-3xl font-bold mb-4 red">
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

        {/* Pulsanti */}
        <div className="space-y-3">
          <button 
            onClick={() => window.history.back()}
            className="w-full bg-blue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            {content.retryButton}
          </button>
          
          <button 
            onClick={() => window.location.href = `/${lang}/azienda/contatti`}
            className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            {content.supportButton}
          </button>
        </div>
      </div>
    </main>
  );
}