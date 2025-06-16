export default function BookPDF() {
  return (
    <section className="card-section">
      <h2>My Book PDF</h2>
      <p>You can read or download my book in PDF format below:</p>
      <embed
        src="/book.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
        style={{ border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
      />
      <p>
        <a href="/book.pdf" download className="download-button">
          Download PDF
        </a>
      </p>
    </section>
  )
}
