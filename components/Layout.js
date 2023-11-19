import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children, title, description }) => {
  const defaultTitle = 'Edward Reed Designs';
  const defaultDescription = 'Portfolio for Edward Reed Designs';

  return (
    <div className="bg-slate-300/20">
      <Head>
        <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content={description || defaultDescription} />
      </Head>
      <div className="flex justify-between min-h-screen flex-col w-full ">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
