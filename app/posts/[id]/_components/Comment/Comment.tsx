import cn from "classnames";
import Paragraph from "@/components/Paragraph/Paragraph";
import {getNameFromEmail} from "@/helpers/getNameFromEmail";

import styles from "./Comment.module.scss";

type Props = {
    name: string;
    email: string;
    body: string;
    className?: string;
};

export default function Comment({email, body, className}: Props) {
    const name = getNameFromEmail(email);

    return (
        <article className={cn(styles.comment, className)}>
            <header className={styles['user-info']}>
                <span className={styles.name}>{name}</span> · <span>{email}</span>
            </header>

            <Paragraph size="m">
                {body}
            </Paragraph>
        </article>
    );
}
