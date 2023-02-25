import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/GilsondaGama.png" />
          <div className={styles.authorinfo}>
            <strong>Gilson da Gama</strong>
            <span>Web Developre</span>
          </div>
        </div>

        <time title="11 de maio às 08:13h" dateTime="2023-05-11">Publicado há 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>
        <p>Acesse e deixe seu feedback 👉 devonlane.design</p>
        <p><a href="">#uiux #userexperience</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea 
          placeholder="Escreva o seu comentário">
        </textarea>
      
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}