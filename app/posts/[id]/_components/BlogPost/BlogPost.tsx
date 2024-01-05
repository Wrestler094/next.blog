import Image from "next/image";
import Tag from "@/components/Tag/Tag";
import Like from "@/components/Like/Like";
import Heading from "@/components/Heading/Heading";
import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";
import {getFakeCategory, getFakePublicationDate, getFakeReadEstimation} from "@/helpers/getFakeData";
import {getRandomNumber} from "@/helpers/getRandomNumber";

import postCard from "@/public/images/post-image.png";

import styles from "./BlogPost.module.scss";
import Paragraph from "@/components/Paragraph/Paragraph";

type Props = {
    title: string;
    content: string;
    className?: string;
};

export default function BlogPost({title, content, className}: Props) {
    const postTitle = capitalizeFirstLetter(title);
    const category = getFakeCategory();
    const publicationDate = getFakePublicationDate();
    const estimationDate = getFakeReadEstimation();
    const numberOfLikes = getRandomNumber(1, 8);
    const postContent = capitalizeFirstLetter(content);

    return (
        <article className={className}>
            <Heading tag="h2" className={styles.title}>
                {postTitle}
            </Heading>

            <header className={styles['post-info']}>
                <Tag>{category}</Tag> · <Tag isLight={true}>{publicationDate}</Tag> · <Tag
                isLight={true}>{estimationDate}</Tag> · <Like numberOfLikes={numberOfLikes}/>
            </header>

            <Image
                src={postCard}
                alt="Post image"
                className={styles.image}
                priority={false}
            />

            <Paragraph size="l" dangerouslySetInnerHTML={{__html: postContent}}/>
        </article>
    );
}
