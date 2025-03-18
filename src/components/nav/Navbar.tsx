import TopBar from "./TopBar";
import NewsTicker from "./NewsTicker";
import MainNavbar from "./MainNavbar";

export default function Navbar() {
  return (
    <>
    <header className="relative w-full">
      <NewsTicker />
      <TopBar />
      <MainNavbar />
    </header>
    </>
  );
}
