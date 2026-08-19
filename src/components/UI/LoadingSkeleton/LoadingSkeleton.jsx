import "./LoadingSkeleton.css";

export default function LoadingSkeleton() {
  return (
    <section className="skeleton-container">
      <div className="skeleton-card skeleton-title">
        <h4>Getting latest weather forecast...</h4>
      </div>

      {Array.from({ length: 4 }).map((_, index) => (
        <div className="skeleton-card" key={index}></div>
      ))}
    </section>
  );
}
