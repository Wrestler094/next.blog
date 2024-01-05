import {TComment, TPost} from "@/types/types";

export const getPosts = async (): Promise<TPost[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};

export const getPost = async (id: number | string): Promise<TPost> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
};

export const getComments = async (id: number | string): Promise<TComment[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return response.json();
};

export const setLikes = async (id: number | string, data: undefined) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};
