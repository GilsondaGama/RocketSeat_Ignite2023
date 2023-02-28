import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface PostProps {
  author: Author
  publishedAt: Date
  content: Content[]
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export function Post({author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([ 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  ]) 

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
 
  const publishedDaterelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('') // reset the error message
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {  
    event.target.setCustomValidity('O comentário não pode ficar vazio') 
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => { 
      return comment !== commentToDelete
    })
    
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime = {publishedAt.toISOString()}>
          {publishedDaterelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Escreva o seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
      
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            key={comment}
            content={comment} 
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}