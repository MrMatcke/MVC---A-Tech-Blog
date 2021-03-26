const { Post } = require('../models');

const postData = [
    {
        title: "Cool Story",
        post_content: "Cool story of the year will show you what's cool and what to love.",
        user_id: 3
    },
    {
        title: "Influencer reaches 1 million subscribers!",
        post_content: "Another person young people made rich by following his content",
        user_id: 1
    },
    {
        title: "Trends in the tech place",
        post_content: "New trends will set you apart from all the basics",
        user_id: 2

    },
    {
        title: "Tech Blog are a thing of the past?",
        post_content: "Accordning to my homework, it's definitiely cutting edge!",
        user_id: 5
    },
    {
        title: "Tech News to scare you",
        post_content: "Tech News that might scare you, everything is now automated and Devs are no longer in demand!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;