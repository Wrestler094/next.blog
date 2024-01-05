'use client';

import {HTMLAttributes} from "react";
import cn from "classnames";

import LikeButton from "@/components/LikeBlock/components/LikeButton/LikeButton";

import styles from './LikeBlock.module.scss';
import {setLikes} from "@/api/jsonplaceholder";

type Props = {
    postId: number;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function LikeBlock({postId, className, ...rest}: Props) {
    const handleLikeClick = () => {
        void setLikes(postId);
    };

    return (
        <div className={cn(styles.wrapper, className)} {...rest}>
            <span className={styles.text}>Понравилось? Жми</span>
            <LikeButton handleClick={handleLikeClick}/>
        </div>
    );
}
