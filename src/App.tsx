import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import './global.css';

const posts = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://github.com/DaniloCalegaro.png',
         name: 'Danilo Calegaro',
         role: 'Web Developer'
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋'},
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
         { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publisheAt: new Date('2022-06-07 11:00:00')
   },

   {
      id: 2,
      author: {
         avatarUrl: 'https://github.com/maykbrito.png',
         name: 'Mayke Bryto',
         role: 'Educator'
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋'},
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
         { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publisheAt: new Date('2022-06-01 12:05:10')
   },
];

export function App() {

  return (
     <div>
        <Header/>

        <div className={styles.wrapper}>
           <Sidebar/>
            <main>
               {posts.map(post => {
                  return (
                     <Post 
                        key={post.id}
                        author= {post.author}
                        content={post.content}
                        publisheAt= {post.publisheAt}
                     />
                  )   
               })}
            </main>

        </div>
     </div>

  )
}
