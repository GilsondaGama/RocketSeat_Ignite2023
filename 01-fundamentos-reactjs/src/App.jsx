import { Header } from "./components/Header.jsx"
import { Post } from "./components/Post.jsx"
import { Sidebar } from "./components/Sidebar.jsx"

import styles from "./App.module.css"

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GilsondaGama.png",
      name: "Gilson da Gama",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'link', content: '#humano3d'},
    ],
    publishedAt: new Date("2023-02-20 08:14:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis accusantium soluta id corrupti, amet delectus eos error reiciendis harum iusto dolorem veniam deserunt. Autem, voluptate sequi. Enim, vero quos.'},
      {type: 'link', content: 'devonlane.design'},
    ],
    publishedAt: new Date("2023-02-19 08:13:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus illum velit quod quo similique. Similique quidem labore eius animi totam? Incidunt temporibus animi accusantium odit numquam quo laboriosam vero.'},
      {type: 'link', content: 'devonlane.design'},
    ],
    publishedAt: new Date("2023-02-21 08:19:00"),
  },  
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
    
        <main>
          {posts.map(post => { 
            return(
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </> 
  )
}