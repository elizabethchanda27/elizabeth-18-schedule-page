import Link from "next/link";

export function SecondaryButton({ children, href }) {
  return (
    <button className="font-sans font-bold text-white border-2 transition ease-in-out p-2 px-4 justify-center border-green uppercase items-center backdrop-blur hover:bg-transparent bg-green rounded-full">
      {href ? (
        <Link href={href} className="flex justify-center items-center">
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}
