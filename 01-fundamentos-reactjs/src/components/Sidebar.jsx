import styles from "./Sidebar.module.css"

import { PencilLine} from 'phosphor-react'
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/GilsondaGama.png"/>

        <strong>Gilson da Gama</strong>
        <span>Web Developre</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar ser perfil
        </a>
      </footer>
    </aside>
  )
}
