import {HTMLAttributes} from "react";
import Image from "next/image";
import cn from "classnames";

import likeImg from "@/public/images/like.svg";

import styles from './Like.module.scss';

type Props = {
    numberOfLikes: number;
} & HTMLAttributes<HTMLDivElement>;

export default function Like({numberOfLikes, className, ...rest}: Props) {
    return (
        <div className={cn(styles.wrapper, className)} {...rest}>
            {numberOfLikes}
            <Image
                src={likeImg}
                alt="Like"
                width={16}
                height={16}
                priority={false}
            />
        </div>
    );
}
