import { InputHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarPros extends InputHTMLAttributes<HTMLImageElement>{
   hasBorder?: boolean;
}

export function Avatar({ hasBorder = false, src, alt }: AvatarPros) {
   return (
      <img 
         className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
         src={src}
         alt={alt}
      />
   );
}