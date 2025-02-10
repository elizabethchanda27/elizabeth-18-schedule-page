import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

interface NavbarProps {
  mode: "landing" | "generic"; // Assuming these two modes
}

export function Navbar({ mode }: NavbarProps) {
  const color = mode === "landing" ? "brown" : "pink";

  return (
    <>
      <div
        className={`w-full h-full text-${color} text-md flex flex-row items-center justify-between p-5`}
      >
        <Link className="z-30" href="/">
          <span
            className={`group font-bold font-sans ${
              mode == "landing"
                ? "hover:text-white"
                : "bg-white text-brown hover:text-pink"
            } transition ease-in-out pr-2 rounded-lg  flex flex-row items-center space-x-2`}
          >
            <img
              src="/images/PH2025Logo.svg"
              className="w-10 h-10 group-hover:opacity-50"
              alt="Pearl Hacks Logo"
            />
            <h1>Pearl Hacks</h1>
          </span>
        </Link>
        <span className="z-30 flex flex-wrap items-center">
          <span className="hidden sm:flex flex-row space-x-4">
            {["About", "FAQ", "Resources", "Schedule", "Live"].map((link) => (
              <div
                key={link}
                className={
                  link === "Tracks" ? "flex flex-row space-x-1" : undefined
                }
              >
                <p className={`transition ease-in-out hover:text-white`}>
                  <Link href={link.toLowerCase()}>{link}</Link>
                </p>
                {link === "Tracks" && (
                  <div className="p-1 text-center text-xs rounded-md bg-pink-accent text-white">
                    NEW!
                  </div>
                )}
              </div>
            ))}
          </span>
          <HamburgerMenu mode={mode} />
        </span>
      </div>
    </>
  );
}
