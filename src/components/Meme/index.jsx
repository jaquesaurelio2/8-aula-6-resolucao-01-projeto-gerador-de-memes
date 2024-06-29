import styles from "./index.module.css";
import memesData from "../../memesData";

export default function Meme() {
  let url;
  const getNewMeme = () => {
    const memes = memesData.data.memes;

    const randomIndex = Math.floor(Math.random() * memes.length);

    url = memes[randomIndex].url;

    console.log("getNewMeme", url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Texto superior"
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Texto inferior"
        />
        <button onClick={getNewMeme} className={styles.button}>
          Obter novo meme 🖼
        </button>
      </div>
      <div className={styles.meme}>
        <img src={url} alt="meme" />
        <h2 className={styles.topText}></h2>
        <h2 className={styles.bottomText}></h2>
      </div>
    </div>
  );
}
