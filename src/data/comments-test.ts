interface Comments {
  comment_id: number;
  event_id: number;
  user_id: string;
  comment_body: string;
}

// check data types = user_id
const comments: Comments[] = [
  {
    comment_id: 1,
    event_id: 1,
    user_id: "1a",
    comment_body: "Are there any refreshments?",
  },
  {
    comment_id: 2,
    event_id: 1,
    user_id: "2a",
    comment_body: "Are there any refreshments?",
  },
  {
    comment_id: 3,
    event_id: 2,
    user_id: "3a",
    comment_body: "do we need shin pads?",
  },
  {
    comment_id: 4,
    event_id: 2,
    user_id: "4a",
    comment_body: "do we need shin pads?",
  },
  {
    comment_id: 4,
    event_id: 3,
    user_id: "3a",
    comment_body: "Are you using regular or olympic balls",
  },
  {
    comment_id: 5,
    event_id: 3,
    user_id: "5a",
    comment_body: "Are you using regular or olympic balls",
  },
  {
    comment_id: 6,
    event_id: 4,
    user_id: "4a",
    comment_body: "Are there any shirt colours we need to wear?",
  },
  {
    comment_id: 7,
    event_id: 4,
    user_id: "1a",
    comment_body: "Are there any shirt colours we need to wear?",
  },
  {
    comment_id: 8,
    event_id: 5,
    user_id: "2a",
    comment_body: "Do you have bibs or should i bring some?",
  },
  {
    comment_id: 1,
    event_id: 5,
    user_id: "5a",
    comment_body: "Do you have bibs or should i bring some?",
  },
  {
    comment_id: 9,
    event_id: 6,
    user_id: "1a",
    comment_body: "Will there be oranges and mars bars at half time?",
  },
  {
    comment_id: 10,
    event_id: 1,
    user_id: "6a",
    comment_body: "Will there be oranges and mars bars at half time?",
  },
  {
    comment_id: 11,
    event_id: 6,
    user_id: "2a",
    comment_body: "Can i video the game for my youtube channel?",
  },
  {
    comment_id: 12,
    event_id: 7,
    user_id: "13a",
    comment_body: "Can i video the game for my youtube channel?",
  },
  {
    comment_id: 13,
    event_id: 7,
    user_id: "11a",
    comment_body: "Are there any refreshments?",
  },
  {
    comment_id: 15,
    event_id: 8,
    user_id: "1a",
    comment_body: "Can i video the game for my youtube channel?",
  },
  {
    comment_id: 16,
    event_id: 8,
    user_id: "14a",
    comment_body: "How tall are the usual players?",
  },
  {
    comment_id: 17,
    event_id: 9,
    user_id: "10a",
    comment_body: "How tall are the usual players?",
  },
  {
    comment_id: 18,
    event_id: 9,
    user_id: "1a",
    comment_body: "Are there floodlights at the pitch?",
  },
  {
    comment_id: 19,
    event_id: 10,
    user_id: "9a",
    comment_body: "Are there floodlights at the pitch?",
  },
  {
    comment_id: 20,
    event_id: 10,
    user_id: "6a",
    comment_body: "What is the changin room situation at the venue",
  },
  {
    comment_id: 21,
    event_id: 11,
    user_id: "2a",
    comment_body: "What is the changin room situation at the venue",
  },
  {
    comment_id: 22,
    event_id: 11,
    user_id: "1a",
    comment_body: "Does the venue have vending machines for drinks?",
  },
  {
    comment_id: 23,
    event_id: 12,
    user_id: "3a",
    comment_body: "Does the venue have vending machines for drinks?",
  },
  {
    comment_id: 24,
    event_id: 12,
    user_id: "6a",
    comment_body: "Should i bring a whistle and cards for the ref?",
  },
  {
    comment_id: 25,
    event_id: 13,
    user_id: "7a",
    comment_body: "Should i bring a whistle and cards for the ref?",
  },
  {
    comment_id: 26,
    event_id: 13,
    user_id: "1a",
    comment_body: "Are there any refreshments?",
  },
  {
    comment_id: 27,
    event_id: 14,
    user_id: "3a",
    comment_body: "Are there any refreshments?",
  },
  {
    comment_id: 28,
    event_id: 14,
    user_id: "4a",
    comment_body: "Whats the parking situation at the venue?",
  },
  {
    comment_id: 29,
    event_id: 15,
    user_id: "1a",
    comment_body: "Whats the parking situation at the venue?",
  },
  {
    comment_id: 30,
    event_id: 15,
    user_id: "5a",
    comment_body: "I can come but can anyone lend me a spare pare of gloves?",
  },
  {
    comment_id: 31,
    event_id: 16,
    user_id: "1a",
    comment_body: "I can come but can anyone lend me a spare pare of gloves?",
  },
  {
    comment_id: 32,
    event_id: 16,
    user_id: "4a",
    comment_body: "Are there any refreshments?",
  },
  {
    comment_id: 33,
    event_id: 17,
    user_id: "3a",
    comment_body: "I need to leave half way through is this ok?",
  },
  {
    comment_id: 34,
    event_id: 17,
    user_id: "2a",
    comment_body: "Are we playing championship rules or cup rules?",
  },
  {
    comment_id: 35,
    event_id: 18,
    user_id: "1a",
    comment_body: "I need to leave half way through is this ok?",
  },
  {
    comment_id: 36,
    event_id: 18,
    user_id: "1a",
    comment_body: "Are we playing championship rules or cup rules?",
  },
  {
    comment_id: 37,
    event_id: 19,
    user_id: "5a",
    comment_body: "Is this a regular game?",
  },
  {
    comment_id: 38,
    event_id: 19,
    user_id: "1a",
    comment_body: "Are there any refreshments?",
  },
  {
    comment_id: 39,
    event_id: 20,
    user_id: "6a",
    comment_body: "Is this a regular game?",
  },
];

module.exports = comments;
