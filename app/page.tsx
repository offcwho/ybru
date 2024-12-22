import styles from "./page.module.css";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Reviews />
    </>
  );
}