import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="l-page">
    <Header />
    <main className="l-main">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;