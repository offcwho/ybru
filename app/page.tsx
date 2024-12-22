import styles from "./page.module.css";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Position from "./components/Position/Position";
import Feedback from "./components/Feedback/Feedback";
import FAQ from "./components/FAQ/FAQ";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Reviews />
      <Services/>
      <Position/>
      <Feedback/>
      <FAQ/>
    </>
  );
}