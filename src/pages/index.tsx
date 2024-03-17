import MainCardNavigation from "../components/mainCardNavigation/MainCardNavigation";
import MainCard from "../components/mainCard/MainCard";
import NavBar from "../components/navBar/NavBar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <MainCard />
        </section>
        <section>
          <MainCardNavigation/>
        </section>
      </main>
    </>
  );
}
