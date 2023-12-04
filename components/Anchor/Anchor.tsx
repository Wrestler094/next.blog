import {PropsWithChildren} from "react";
import Image from "next/image";
import Link, {LinkProps} from "next/link";
import cn from "classnames";

import arrowImg from "@/public/images/arrow.svg";

import styles from './Anchor.module.scss';

type Props = {
    className?: string;
    icon?: 'arrow-right';
} & LinkProps;

export default function Anchor({className, icon, children, ...rest}: PropsWithChildren<Props>) {
    return (
        <Link className={cn(styles.anchor, {
            [styles['with-icon']]: icon
        }, className)} {...rest}>
            {children}
            {icon && icon === 'arrow-right' && (
                <Image
                    src={arrowImg}
                    alt="link"
                    height={20}
                    width={20}
                />
            )}
        </Link>
    );
}
