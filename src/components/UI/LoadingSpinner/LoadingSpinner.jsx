import "./LoadingSpinner.css";

export default function LoadingSpinner({ size = "25px" }) {
  return (
    <div
      className={`loading-spinner`}
      style={{ "--loading-spinner-size": size }}
    ></div>
  );
}
