const data = {
  replies: [
    {
      id: "1",
      replies: [
        { id: "1.1", author: "Charlie", content: "It's sunny here as well.", replies: [] },
        {
          id: "1.2",
          author: "David",
          content: "Wish I was outside!",
          replies: [{ id: "1.2.1", author: "Eve", content: "Let's plan a picnic.", replies: [] }],
        },
        { id: "1.3", author: "Frank", content: "Love this weather!", replies: [] },
      ],
    },
    { id: "2", replies: [{ id: "2.1", author: "Grace", content: "What book was it, Bob?", replies: [] }] },
    {
      id: "3",
      replies: [{ id: "3.1", author: "Hannah", content: "Can't wait for the weekend too, Charlie!", replies: [] }],
    },
    { id: "4", replies: [{ id: "4.1", author: "Isaac", content: "Hope it turns out delicious, David!", replies: [] }] },
    { id: "5", replies: [{ id: "5.1", author: "Jane", content: "Which movie, Eve?", replies: [] }] },
    { id: "6", replies: [{ id: "6.1", author: "Alice", content: "Nature is healing, isn't it?", replies: [] }] },
    {
      id: "7",

      replies: [
        { id: "7.1", author: "Bob", content: "I love music too, Grace.", replies: [] },

        {
          id: "7.2",
          author: "David",
          content: "Which song are you listening to, Grace?",
          replies: [{ id: "7.2.1", author: "Eve", content: "I hope it's a jazz song.", replies: [] }],
        },
        { id: "7.3", author: "Charlie", content: "Music is life.", replies: [] },
      ],
    },
    { id: "8", replies: [{ id: "8.1", author: "Frank", content: "Friends are treasures, Hannah.", replies: [] }] },
    { id: "9", replies: [{ id: "9.1", author: "Grace", content: "Hard work always pays off!", replies: [] }] },
    { id: "10", replies: [{ id: "10.1", author: "Hannah", content: "Tea is so refreshing!", replies: [] }] },
  ],

  comments: [
    { id: "1", userName: "Alice", comment: "What a beautiful day!" },
    { id: "2", userName: "Bob", comment: "Just finished reading a great book." },
    { id: "3", userName: "Charlie", comment: "Looking forward to the weekend." },
    { id: "4", userName: "David", comment: "Trying out a new recipe today." },
    { id: "5", userName: "Eve", comment: "Has anyone seen the latest movie?" },
    { id: "6", userName: "Frank", comment: "Enjoying a walk in the park." },
    { id: "7", userName: "Grace", comment: "Listening to my favorite song." },
    { id: "8", userName: "Hannah", comment: "Feeling grateful for my friends." },
    { id: "9", userName: "Isaac", comment: "Just had a productive day at work." },
    { id: "10", userName: "Jane", comment: "Relaxing with a cup of tea." },
  ],
};

export default data;
