import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import PublicHeader from "../components/PublicHeader";
import SkipLink from "../components/SkipLink";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <SkipLink />
      <PublicHeader />
      <main id="contenido-principal" tabIndex={-1} className="w-full flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
