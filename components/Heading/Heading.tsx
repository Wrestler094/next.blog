import {HTMLAttributes, PropsWithChildren} from "react";
import cn from "classnames";
import styles from './Heading.module.scss';

type Props = {
    tag: 'h1' | 'h2' | 'h3';
} & HTMLAttributes<HTMLHeadingElement>;

export default function Heading({tag: Tag, children, className, ...rest}: PropsWithChildren<Props>) {
    return (
        <Tag className={cn(styles.heading, styles[Tag], className)} {...rest}>
            {children}
        </Tag>
    );
}
