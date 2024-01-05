import Comment from "../Comment/Comment";
import Heading from "@/components/Heading/Heading";

import {TComment} from "@/types/types";

import styles from "./Comments.module.scss";

type Props = {
    comments: TComment[];
    className?: string;
};

export default function Comments({comments, className}: Props) {
    return (
        <section className={className}>
            <Heading tag="h3" className={styles.title}>
                Комментарии
            </Heading>

            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}
                />
            ))}
        </section>
    );
}
