export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Flow Circle */}
      <path
        d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
        className="stroke-primary"
        strokeWidth="2"
        strokeDasharray="88"
        strokeDashoffset="88"
        style={{
          animation: 'dash 2s ease-out forwards'
        }}
      />

      {/* Inner Flow Wave */}
      <path
        d="M8 16C8 16 10 13 12 13C14 13 14 19 16 19C18 19 18 13 20 13C22 13 24 16 24 16"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="44"
        strokeDashoffset="44"
        style={{
          animation: 'dash 1.5s ease-out 0.5s forwards'
        }}
      />

      {/* Iron Bar */}
      <path
        d="M10 10L22 10"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="24"
        strokeDashoffset="24"
        style={{
          animation: 'dash 1s ease-out forwards'
        }}
      />

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  )
}
