import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        user: USERS[0].user,
        likes: 12,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: USERS[0].image,

        comments: [
            {
                user: 'rand',
                comment: 'nice'
            },
            {
                user: 'rand2',
                comment: 'cool'
            }
        ]


    },

    {
        imageUrl: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        user: USERS[1].user,
        likes: 23,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: USERS[1].image,

        comments: [
            {
                user: 'rand',
                comment: 'nice',
            },
            {
                user: 'rand2',
                comment: 'cool',
            }
        ]


    },
    
    {
        imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg',
        user: USERS[2].user,
        likes: 34,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: USERS[2].image,

        comments: [
            {
                user: 'rand',
                comment: 'nice'
            },
            {
                user: 'rand2',
                comment: 'cool'
            }
        ]

    }

]