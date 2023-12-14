'use client';

import {HTMLAttributes, useState} from "react";
import Image from "next/image";
import cn from "classnames";

import likeImg from "@/public/images/like.svg";

import styles from './LikeButton.module.scss';

type Props = {
    postId: number;
} & HTMLAttributes<HTMLButtonElement>;

export default function LikeButton({postId, ...rest}: Props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLikeClick = async () => {
        setIsLoading(true);
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId);

            if (result.status === 200) {
                console.log(result);
                setIsLiked((prevState) => !prevState);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button className={cn(styles.wrapper, {
            [styles.liked]: isLiked,
        })} onClick={handleLikeClick} disabled={isLoading} {...rest}>
            <Image
                src={likeImg}
                alt="Like"
                width={16}
                height={16}
                priority={false}
            />
        </button>
    );
}
