import { v4 as uuidv4 } from "uuid";

function cardInfo() {
  return [
    {
      title: "Pomodoro Timer",
      img:
        "https://github.com/Jamesh66/new-portfolio/blob/main/src/img/pomodoro.png?raw=true",
      text:
        "A web app that provides a countdown timer to help the user increase their focus over a specified period. A bell sound is played once the timer is finished and a notification is displayed on the screen. Made with Vanilla JavaScript.",
      LiveLink: "https://pomodorobyjames.com/",
      GitLink: "https://github.com/Jamesh66/pomodoro.timer",
      id: uuidv4(),
    },
    {
      title: "Mr Carter Maths",
      img:
        "https://github.com/Jamesh66/new-portfolio/blob/main/src/img/maths.png?raw=true",
      text:
        "A landing page I created for a family member using Materialize, the design was based on an existing design but modernized to creae a more user firendly experiance while retaining brand identiy to keep conintity with other sites within the brand.",
      LiveLink: "https://mrcartermaths.com/",
      GitLink: "https://github.com/Jamesh66?tab=repositories",
      id: uuidv4(),
    },
  ];
}

export default cardInfo;
