"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const session = useSession();
  return (
    <nav className="flex justify-between">
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className={(pathName as string) == "/" ? "active-route" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/protected"
            className={
              (pathName as string) == "/protected" ? "active-route" : ""
            }
          >
            Protected
          </Link>
        </li>
      </ul>
      <div>
        {session.status == "authenticated" ? (
          <Link href="/api/auth/signout">Sign out</Link>
        ) : null}
        {session.status == "unauthenticated" ? (
          <Link href="/api/auth/signin">Sign in</Link>
        ) : null}
        {session.status == "loading" ? (
          <div className="w-20 h-full animate-pulse bg-slate-100 rounded-md" />
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
