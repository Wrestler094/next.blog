import {HTMLAttributes, PropsWithChildren} from "react";
import cn from "classnames";

import styles from './Tag.module.scss';

type Props = {
    isLight?: boolean
} & HTMLAttributes<HTMLSpanElement>;

export default function Tag({isLight = false, className, children, ...rest}: PropsWithChildren<Props>) {
    return (
        <span className={cn(styles.tag, {
            [styles.light]: isLight,
        }, className)} {...rest}>
            {children}
        </span>
    );
}
