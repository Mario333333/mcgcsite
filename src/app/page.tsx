import styles from "./page.module.css";
import { pageHome } from "../utils/homePagesConstants";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.information}>
        <h1 className="text-4xl font-extrabold mb-10">{pageHome.title}</h1>
        <h2 className="font-serif font-semibold mb-5">{pageHome.aim}</h2>
        <p className="font-light font-serif">{pageHome.resume}</p>
      </div>
    </main>
  );
}
