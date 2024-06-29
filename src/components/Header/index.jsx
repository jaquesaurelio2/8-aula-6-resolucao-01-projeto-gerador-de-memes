import styles from "./index.module.css";
import TrollImage from "../../../public/images/troll-face.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.image} src={TrollImage} alt="troll face" />
      <h2 className={styles.title}>Gerador de memes</h2>
      <h4 className={styles.project}>FAST - Projeto 3</h4>
    </div>
  );
}
