import Image from "next/image";
import { FC } from "react";
import { IoHeartSharp } from "react-icons/io5";
import styles from "./styles.module.css";

type movieCard = {
  description: string;
  img: string;
  contentType: string;
};

export const MovieCard: FC<movieCard> = ({ description, img, contentType }) => {
  return (
    <article className={styles.movieCard}>
      <picture className={styles.movieCard__image}>
        <Image
          src={img}
          alt={description}
          layout={"fill"}
          style={{ borderRadius: "10px 10px 0 0 " }}
        />
      </picture>
      <section className={styles.movieCard__textContainer}>
        <p className={styles.movieCard__description}>{description}</p>
        <section className={styles.movieCard__iconsContainer}>
          <span className={styles.movieCard__showType}>{contentType}</span>
          <IoHeartSharp className={styles.movieCard__likeIcon} />
        </section>
      </section>
    </article>
  );
};
