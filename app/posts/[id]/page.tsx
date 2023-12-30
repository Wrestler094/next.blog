import LikeBlock from "@/components/LikeBlock/LikeBlock";

const postCard = {
    id: 1,
    title: 'Как работать с CSS Grid',
    body: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
    category: 'Front-end',
    publicationDate: '1 месяц назад',
    readEstimation: '3 минуты',
};

export default function PostsPage() {
    return (
        <main>
            <LikeBlock postId={postCard.id} />
        </main>
    );
}
