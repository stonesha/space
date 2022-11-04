import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiChevronLeft } from "react-icons/hi";

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, title } = props;
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>
      </Head>

      <nav className="flex flex-row m-auto px-6 pt-6 max-w-2xl items-center">
        {pathname !== "/" ? (
          <Link href="/">
            <HiChevronLeft className="w-6 h-6 cursor-pointer" />
          </Link>
        ) : (
          <></>
        )}
        <div className="bg-clip-text text-transparent from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-r text-4xl font-extrabold w-fit mx-auto">
          space
        </div>
      </nav>

      <main className="m-auto p-6 max-w-2xl md:max-w-4xl">{children}</main>

      <footer className="flex flex-row m-auto p-6 max-w-2xl items-center">
        <hr />
        <p className="text-center m-auto text-xs">
          Made with information from NASA. Made by someone who loves space.
        </p>
      </footer>
    </>
  );
};

export default Layout;
