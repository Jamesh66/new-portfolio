import { v4 as uuidv4 } from "uuid";

function cardInfo() {
  return [
    {
      title: "Pomodoro Timer",
      img:
        "https://github.com/Jamesh66/new-portfolio/blob/main/src/img/pomodoro.png?raw=true",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis maiores saepe repellat perspiciatis neque. Mollitia, tempora ea ut quibusdam non porro nulla accusantium, nisi odio dignissimos, quod quae itaque cupiditate!",
      LiveLink: "https://pomodorobyjames.com/",
      GitLink: "https://github.com/Jamesh66/pomodoro.timer",
      id: uuidv4(),
    },
    {
      title: "Mr Carter Maths",
      img:
        "https://github.com/Jamesh66/new-portfolio/blob/main/src/img/maths.png?raw=true",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi fuga modi possimus eligendi repudiandae eaque mollitia, consectetur aut quos quod ab, dolores, ipsa inventore beatae doloribus. Expedita, fugiat dolor!",
      LiveLink: "https://mrcartermaths.com/",
      GitLink: "https://github.com/Jamesh66/mr-carter-maths/tree/main",
      id: uuidv4(),
    },
  ];
}

export default cardInfo;
