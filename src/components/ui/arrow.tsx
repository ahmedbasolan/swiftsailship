/** The site's one arrow. Used on the main action and on linked rows and cards. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow shrink-0 ${className}`}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
