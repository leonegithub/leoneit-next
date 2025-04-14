export interface Corso {
  id: string;
  titolo: string;
  data: string;
  sede: string;
  stato: string;
  relatori: string;
  file?: string;
}

interface CourseCardProps {
  corso: Corso;
}

export default function CourseCard({ corso }: CourseCardProps) {
  const relatori = corso.relatori.split(",").map((r) => r.trim());

  return (
    <div className="corso-singolo d-flex flex-column flex-lg-row align-items-center align-items-lg-start text-center text-lg-start">
      {" "}
      {/* Use flex-column for mobile and flex-md-row for larger screens */}
      <div className="corso-immagine">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          }
          alt={corso.titolo}
        />
      </div>
      <div className="corso-desc">
        <div className="corso-top">
          <h2 className="titolo">{corso.titolo}</h2>
        </div>

        <div className="corso-bottom">
          <p>
            <strong>Data Inizio:</strong> {corso.data}
          </p>

          <p>
            <strong>Sede:</strong> {corso.sede}
          </p>

          <p>
            <strong>Stato:</strong>{" "}
            {corso.stato === "attivo" ? "Attivo" : "Non Attivo"}
          </p>

          {relatori.length > 0 && (
            <div className="corso-relatori">
              <h3>Relatori:</h3>
              {relatori.map((relatore, index) => (
                <div key={index}>{relatore}</div>
              ))}
            </div>
          )}

          {corso.file && (
            <div className="corso-file">
              <a href={corso.file} target="_blank" rel="noopener noreferrer">
                Scarica PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
