import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="l-page">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;