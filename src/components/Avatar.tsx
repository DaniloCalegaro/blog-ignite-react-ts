import styles from './Avatar.module.css'

interface AvatarPros {
   hasBorder?: boolean;
   src: string;
   alt?: string;
}

export function Avatar({ src, hasBorder = false, alt }: AvatarPros) {
   return (
      <img 
         className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
         src={src}
         alt={alt}
      />
   );
}