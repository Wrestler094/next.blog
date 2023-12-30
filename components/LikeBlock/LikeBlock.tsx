'use client';

import {HTMLAttributes} from "react";
import cn from "classnames";

import LikeButton from "@/components/LikeBlock/components/LikeButton/LikeButton";

import styles from './LikeBlock.module.scss';

type Props = {
    postId: number;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function LikeBlock({postId, className, ...rest}: Props) {
    const handleLikeClick = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
            method: 'PATCH',
            body: JSON.stringify({
                someData: 'data',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    };

    return (
        <div className={cn(styles.wrapper, className)} {...rest}>
            <span className={styles.text}>Понравилось? Жми</span>
            <LikeButton handleClick={handleLikeClick}/>
        </div>
    );
}
