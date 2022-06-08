import { PencilLine } from 'phosphor-react'; // import library icons
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
   return (
      <aside className={styles.sidebar}>
         <img 
         className={styles.cover}
         src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
         />

      <div className={styles.profile}>
         <Avatar hasBorder src="https://github.com/DaniloCalegaro.png"/>

         <strong>Danilo Calegaro</strong> 
         <span>Web Developer</span>  
      </div>   

      <footer>
         <a href="#">
             <PencilLine size={20}/>  {/*icons from library icons. */}
            Editar ser perfil
         </a>
      </footer>
      </aside>
   )
}