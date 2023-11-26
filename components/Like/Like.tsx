import {HTMLAttributes} from "react";
import Image from "next/image";
import cn from "classnames";

import likeImg from "@/public/images/like.svg";

import styles from './Like.module.scss';

type Props = {
    numberOfLike: number;
} & HTMLAttributes<HTMLDivElement>;

export default function Like({numberOfLike, className, ...rest}: Props) {
    return (
        <div className={cn(styles.wrapper, className)} {...rest}>
            {numberOfLike}
            <Image
                src={likeImg}
                alt="Like"
                width={16}
                height={16}
            />
        </div>
    );
}
