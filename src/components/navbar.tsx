import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export interface NavOption {
  availableOnPath: string;
  text: string;
  link: string;
  isPrivate: boolean;
}

export default function Navbar({
  currentPath,
  navOptions,
}: {
  currentPath: string;
  navOptions: Array<NavOption>;
}) {
  const { user, error } = useUser();

  return (
    <>
      <div className="navBar">
        <div className="title">GRAPHY</div>

        <div className="navOptions">
          {navOptions
            .filter((navOption) => {
              return new RegExp(navOption.availableOnPath).test(currentPath);
            })
            .map(({ text, link, isPrivate }, id) => {
              if (((isPrivate && user) || !isPrivate) && !error) {
                return (
                  <div className="navOption" key={id}>
                    <Link href={link}>{text}</Link>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}
