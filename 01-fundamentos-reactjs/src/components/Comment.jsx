import styles from "./Comment.module.css"

import { ThumbsUp, Trash } from "phosphor-react"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/GilsondaGama.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gilson da Gama</strong>
              <time title="11 de maio às 08:13h" dateTime="2023-05-11">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>

          </header>

          <p>Muito bom, parabéns!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}
