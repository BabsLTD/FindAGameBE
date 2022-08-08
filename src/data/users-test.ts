interface User {
  user_id: string;
  name: string;
  username: string;
  email: string;
  age: number;
  gender: string;
  password: string;
  profile_icon: string;
  skill_level: string;
  rating: number;
  event_id: number;
}

//check skill level type and descriptions

const users: User[] = [
  {
    user_id: "1a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 5,
    event_id: 1,
  },
  {
    user_id: "2a",
    name: "Donna Curtis",
    username: "DonnaC",
    email: "donnaemail@shotmail.com",
    age: 31,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://thumbs.dreamstime.com/b/smiling-girl-happy-looking-high-39930075.jpg",
    skill_level: "amatuer",
    rating: 4,
    event_id: 1,
  },
  {
    user_id: "3a",
    name: "Stevie Curtis",
    username: "SteC",
    email: "steC@hotmail.com",
    age: 42,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EpW4XH9krenWzjk3krH6urJZGrfWbi3XW-NEkwavgW3ehW4nMq65PvDGUyNMtKwoVo8&usqp=CAU",
    skill_level: "pro",
    rating: 1,
    event_id: 1,
  },
  {
    user_id: "4a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 8,
    event_id: 1,
  },
  {
    user_id: "5a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 0,
    event_id: 1,
  },
  {
    user_id: "6a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 5,
    event_id: 1,
  },
  {
    user_id: "7a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 3,
    event_id: 1,
  },
  {
    user_id: "8a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 1,
    event_id: 1,
  },
  {
    user_id: "9a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 11,
    event_id: 1,
  },
  {
    user_id: "10a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 6,
    event_id: 1,
  },
  {
    user_id: "11a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 15,
    event_id: 1,
  },
  {
    user_id: "12a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 10,
    event_id: 1,
  },
  {
    user_id: "13a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 12,
    event_id: 1,
  },
  {
    user_id: "14a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 2,
    event_id: 1,
  },
  {
    user_id: "15a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 6,
    event_id: 1,
  },
  {
    user_id: "16a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 15,
    event_id: 1,
  },
  {
    user_id: "17a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 8,
    event_id: 1,
  },
  {
    user_id: "18a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 6,
    event_id: 1,
  },
  {
    user_id: "19a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 4,
    event_id: 1,
  },
  {
    user_id: "20a",
    name: "Barry Curtis",
    username: "BarryC",
    email: "barrytestemail@hotmail.com",
    age: 21,
    gender: "male",
    password: "randompassword",
    profile_icon:
      "https://media.istockphoto.com/photos/ordinary-man-smiling-picture-id182174089?k=20&m=182174089&s=612x612&w=0&h=foKfJKm1MC3-bxFksAGvW4OJGIUQibt6yqWnVTRXYEI=",
    skill_level: "amatuer",
    rating: 1,
    event_id: 1,
  },
];

module.exports = users;
