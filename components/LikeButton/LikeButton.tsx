import {HTMLAttributes, useState} from "react";
import Image from "next/image";
import cn from "classnames";

import likeImg from "@/public/images/like.svg";

import styles from './LikeButton.module.scss';

type Props = {
    handleClick: () => Promise<Response>;
} & HTMLAttributes<HTMLButtonElement>;

export default function LikeButton({handleClick, ...rest}: Props) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = async () => {
        try {
            await handleClick();
            setIsLiked((prevState) => !prevState);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <button className={cn(styles.wrapper, {
            [styles.liked]: isLiked,
        })} onClick={handleLikeClick} {...rest}>
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
