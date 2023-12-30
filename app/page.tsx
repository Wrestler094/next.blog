import PostCard from "@/components/PostCard/PostCard";

import styles from './page.module.scss';

const postCard = {
    id: 1,
    title: 'Как работать с CSS Grid',
    body: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
    category: 'Front-end',
    publicationDate: '1 месяц назад',
    readEstimation: '3 минуты',
};

export default function HomePage() {
    const posts = Array.from({ length: 10 }).map((_, index) => (
        <PostCard
            key={index}
            title={postCard.title}
            introText={postCard.body}
            category={postCard.category}
            publicationDate={postCard.publicationDate}
            readEstimation={postCard.readEstimation}
        />
    ));

    return (
        <main className={styles.grid}>
            {posts}
        </main>
    );
}
