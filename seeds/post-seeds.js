const { Post } = require("../models");

const postdata = [
  {
    title: "Last baseline alignment",
    post_text: "All major browser engines now support last baseline alignment in CSS grid and flexbox.",
    user_id: 1
    },
  {
    title: "Container queries land in stable browsers",
    post_text: "This Valentine's day, we're celebrating size container queries and container query units landing in all stable browsers.",
    user_id: 2
},
  {
    title: "New to the web platform in January",
    post_text: "Discover some of the interesting features that landed in stable and beta web browsers during January 2023.",
    user_id: 3
},
  {
    title: "Optimize Time to First Byte",
    post_text: "Learn how to optimize for the Time to First Byte metric.",
    user_id: 4
},
  {
    title: "New to the web platform in December",
    post_text: "Discover some of the interesting features that landed in stable and beta web browsers during December 2022.",
    user_id: 5
},
  {
    title: "The large, small, and dynamic viewport units",
    post_text: "pNew CSS units that account for mobile viewports with dynamic toolbars.",
    user_id: 2
},
  {
    title: "GDE community highlight: Lars Knudsen",
    post_text: "Lars Knudsen is a Google Developer Expert, we talked to him about how a $10 device can make computers more accessible for people with disabilities.",
    user_id: 3
},
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;