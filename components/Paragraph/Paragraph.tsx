import {HTMLAttributes, PropsWithChildren} from "react";
import cn from 'classnames';

import styles from './Paragraph.module.scss';

type Props = {
    size: 'xs' | 's' | 'm' | 'l';
    isBold?: boolean;
} & HTMLAttributes<HTMLParagraphElement>;

export default function Paragraph({
    size,
    isBold = false,
    className,
    children,
}: PropsWithChildren<Props>) {
    return (
        <p className={cn(styles[size], {
            [styles.bold]: isBold,
        }, className)}>
            {children}
        </p>
    );
}
