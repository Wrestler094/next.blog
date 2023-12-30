import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

import githubImg from "@/public/images/github.svg";

import styles from "./Header.module.scss";

type Props = {
    className?: string;
};

export default function Header({className}: Props) {
    return (
        <header className={cn(styles.header, className)}>
            <Link className={styles.title} href="/">
                .my_blog
            </Link>
            <Link href='https://github.com/Wrestler094' className={styles['github-link']}>
                <Image
                    src={githubImg}
                    className={styles['github-image']}
                    alt="Github link"
                    height={24}
                    width={24}
                />
            </Link>
        </header>
    );
}
