export default function Section({ children, className = "" }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}
