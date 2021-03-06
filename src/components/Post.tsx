import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
   name: string;
   role: string;
   avatarUrl: string;
}

interface Content {
   type: string;
   content: string;
}

interface PostProps {
   author: Author;
   content: Content[];
   publisheAt: Date;
}


export function Post( {author, content, publisheAt}: PostProps ) {
   const [comments, setComments] = useState([
      'Post muito bancana em?!'
   ])
   const [newCommentText, setNewCommentText] = useState('')

   const publisheAtDateFormatted = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
   const publisheDateRelativeToNow = formatDistanceToNow(publisheAt, {
      locale: ptBR,
      addSuffix: true
   })

   function handleCreateNewComment(event: FormEvent) {
      event.preventDefault() // evita o reload da pagina
      setComments([...comments, newCommentText]);
      setNewCommentText('')
   }

   function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('')
      setNewCommentText(event.target.value)
   }

   function deleteComment(commentDelete: string) {
      //console.log(`Deletar comentário ${comment}`)
      const commentsWithoutDeleteOne = comments.filter( comment => {
         return comment !== commentDelete;
      })
      setComments(commentsWithoutDeleteOne)
   }

   function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
     event.target.setCustomValidity('Este campo é obrigatório')
   }

   const isNewCommentEmpyt = newCommentText.length === 0

   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <Avatar hasBorder src={author.avatarUrl}/>
               
               <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
               </div>
            </div>
            <time title={publisheAtDateFormatted} dateTime={publisheAt.toISOString()}>{publisheDateRelativeToNow}</time>
         </header>

         <div className={styles.content}>
            {content.map(line => {
               if(line.type === 'paragraph') {
                  return <p key={line.content}>{line.content}</p> // 
               } else if (line.type === 'link') {
                  return <p key={line.content}><a href='#'>{line.content}</a></p>
               }
            })}
         </div>

         <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
               placeholder="Deixe seu comentário"
               value={newCommentText}
               onChange={handleNewCommentChange}
               onInvalid={handleNewCommentInvalid} //run when invalid
               required //prevents submite if data
            />

            <footer>
               <button type="submit" disabled={isNewCommentEmpyt}>Publicar</button>
            </footer>
         </form>

         <div className={styles.commentList}>
            {comments.map(comment => {
               return (
                  <Comment 
                     key= {comment}
                     content = {comment}  
                     onDeleteComment={deleteComment}
                  />
               )
            })}
         </div>

      </article>
   )
}