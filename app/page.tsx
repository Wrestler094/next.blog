import PostCard from "@/components/PostCard/PostCard";
import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";
import {getFakeCategory, getFakePublicationDate, getFakeReadEstimation} from "@/helpers/getFakeData";
import {getPosts} from "@/api/jsonplaceholder";

import styles from './page.module.scss';
import {getRandomNumber} from "@/helpers/getRandomNumber";

const NEWS_ON_PAGE = 9;

export default async function HomePage() {
    const posts = await getPosts();

    return (
        <main className={styles.grid}>
            {posts
                .slice(0, NEWS_ON_PAGE)
                .map(post => (
                    <PostCard
                        key={post.id}
                        title={capitalizeFirstLetter(post.title)}
                        introText={capitalizeFirstLetter(post.body)}
                        category={getFakeCategory()}
                        publicationDate={getFakePublicationDate()}
                        readEstimation={getFakeReadEstimation()}
                        numberOfLikes={getRandomNumber(1, 8)}
                    />
                ))
            }
        </main>
    );
}
