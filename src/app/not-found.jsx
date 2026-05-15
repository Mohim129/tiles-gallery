import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-base-100 px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Icon / Illustration */}
        <div className="text-8xl mb-6">404</div>

        <h1 className="text-5xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-base-content mb-2">
          Oops! Tile Not Found
        </h2>
        <p className="text-base-content/70 mb-8">
          The page you&apos;re looking for seems to have cracked under pressure.
          It might have been moved, removed, or never existed.
        </p>

        <Link href="/" className="btn btn-primary btn-lg gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
