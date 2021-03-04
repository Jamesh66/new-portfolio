import { v4 as uuidv4 } from "uuid";

function cardInfo() {
  return [
    {
      title: "Pomodoro Timer",
      img:
        "https://github.com/Jamesh66/new-portfolio/blob/main/src/img/pomodoro.png?raw=true",
      text:
        "A Pomodoro Timer I created using Vanilla JavaScript and The Materialize Front End Framework. I've since hosted the app with Netlify and currently use it on a daily basis to maintain high productivity.",
      LiveLink: "https://pomodorobyjames.com/",
      GitLink: "https://github.com/Jamesh66/pomodoro.timer",
      id: uuidv4(),
    },
    {
      title: "Mr Carter Maths",
      img:
        "https://github.com/Jamesh66/new-portfolio/blob/main/src/img/maths.png?raw=true",
      text:
        "An updated landing page I created for a family member using The Materialize Front End Framework. The landing page isn’t yet live due to technical difficulties in deployment unrelated to my design work.",
      LiveLink: "https://mrcartermaths.com/",
      GitLink: "https://github.com/Jamesh66/mr-carter-maths/tree/main",
      id: uuidv4(),
    },
  ];
}

export default cardInfo;
