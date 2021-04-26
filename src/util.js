import { v4 as uuidv4 } from "uuid";
import { FaGithub, FaDesktop, FaYoutube } from "react-icons/fa";
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
      LinkInfo: "Visit Site",
      LiveIcon: <FaDesktop color="#3BA2D7" />,
      GitIcon: <FaGithub color="#66DA97" />,
      id: uuidv4(),
    },
    {
      title: "Mr Carter Maths",
      img:
        "https://github.com/Jamesh66/new-portfolio/blob/main/src/img/maths.png?raw=true",
      text:
        "An updated landing page I created for a family member using The Materialize Front End Framework. The landing page isn’t yet live due to technical difficulties in deployment unrelated to my design work.",
      LiveLink: "https://youtu.be/iVETFjW9gqc",
      GitLink: "https://github.com/Jamesh66/mr-carter-maths/tree/main",
      LinkInfo: "Demo Video",
      LiveIcon: <FaDesktop color="#3BA2D7" />,
      GitIcon: <FaGithub color="#66DA97" />,
      id: uuidv4(),
    },
    {
      title: "Dev Ed Music Player",
      img:
        "https://raw.githubusercontent.com/Jamesh66/new-portfolio/main/src/img/music.png",
      text:
        "This music player was a project included in the Developed By Ed React course. The player takes content from chillhop.com and plays it through the UI using React Hooks. The UI is styled using SASS.",
      LiveLink: "https://youtu.be/PPjlXRqOr2k",
      GitLink: "https://github.com/Jamesh66/dev-ed-music-player",
      LinkInfo: "Demo Video",
      LiveIcon: <FaYoutube color="#ED462F" />,
      GitIcon: <FaGithub color="#66DA97" />,
      id: uuidv4(),
    },
    {
      title: "Bad Mouth Baking",
      img:
        "https://github.com/Jamesh66/new-portfolio/blob/main/src/img/badmouth.png?raw=true",
      text:
        "An e-commerce site I put together for a small baking company based in London. The site was constructed using the Bravada Wordpress theme and used the Woocomerce plugin to display products and handle payments",
      LiveLink: "https://badmouthbaking.com/",
      GitLink: "https://github.com/Jamesh66/bad-mouth-baking",
      LinkInfo: "Live Site",
      LiveIcon: <FaDesktop color="#3BA2D7" />,
      GitIcon: <FaGithub color="#66DA97" />,
      id: uuidv4(),
    },
  ];
}

export default cardInfo;
