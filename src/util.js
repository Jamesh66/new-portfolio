import { v4 as uuidv4 } from "uuid";
//import images
import maths from "./img/maths.png";
import pomodoro from "./img/pomodoro.png";

function cardInfo() {
  return [
    {
      title: "Pomodoro Timer",
      image: { pomodoro },
      text:
        "A web app that provides a countdown timer to help the user increase their focus over a specified period. A bell sound is played once the timer is finished and a notification is displayed on the screen. Made with Vanilla JavaScript.",
      LiveLink: "https://pomodorobyjames.com/",
      GitLink: "https://github.com/Jamesh66/pomodoro.timer",
      id: uuidv4(),
    },
    {
      title: "Mr Carter Maths",
      image: { maths },
      text:
        "A web app that provides a countdown timer to help the user increase their focus over a specified period. A bell sound is played once the timer is finished and a notification is displayed on the screen. Made with Vanilla JavaScript.",
      LiveLink: "https://mrcartermaths.com/",
      GitLink: "https://github.com/Jamesh66?tab=repositories",
      id: uuidv4(),
    },
  ];
}

export default cardInfo;
