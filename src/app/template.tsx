/** Remounts on every navigation, so each page eases in once as it arrives. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
