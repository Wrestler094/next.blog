import {HTMLAttributes} from "react";
import Image from 'next/image';
import cn from 'classnames';

import Anchor from "@/components/Anchor/Anchor";
import Heading from "@/components/Heading/Heading";
import Paragraph from "@/components/Paragraph/Paragraph";
import Tag from "@/components/Tag/Tag";
import Like from "@/components/Like/Like";

import postCard from '../../public/images/post-image.png';

import styles from './PostCard.module.scss';

type Props = {
    title: string;
    introText: string;
    category: string;
    publicationDate: string;
    readEstimation: string;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function PostCard({
    title,
    introText,
    category,
    publicationDate,
    readEstimation,
    className,
}: Props) {
    return (
        <div className={cn(styles['wrapper'], className)}>
            <div className={styles['post-image-wrapper']}>
                <Image
                    src={postCard}
                    alt="Post image"
                    height={192}
                    width={300}
                    priority={false}
                />
            </div>

            <div className={styles['top-content']}>
                <Tag>{category}</Tag> · <Tag isLight={true}>{publicationDate}</Tag>
                <Like numberOfLike={5}/>
            </div>

            <Heading tag="h3">{title}</Heading>
            <Paragraph className={styles['intro-text']} size="s">{introText}</Paragraph>

            <div className={styles['bottom-content']}>
                <Tag isLight={true}>{readEstimation}</Tag>
                <Anchor icon="arrow-right" href="#">Читать</Anchor>
            </div>
        </div>
    );
}
