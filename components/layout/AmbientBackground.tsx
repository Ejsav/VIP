// Cinematic ambient background: soft blurred light orbs + faint vignette.
// Sits behind page content. Pure CSS, no GPU-heavy animations.
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -top-32 -right-32 w-[44rem] h-[44rem] rounded-full bg-champagne/[0.06] blur-[140px] animate-spotlight" />
      <div
        className="absolute top-1/3 -left-40 w-[36rem] h-[36rem] rounded-full bg-velvet/[0.05] blur-[140px] animate-spotlight"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-champagne/[0.04] blur-[120px] animate-spotlight"
        style={{ animationDelay: "-5s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,7,0.6)_85%)]" />
    </div>
  );
}
