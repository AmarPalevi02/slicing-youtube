import { BsFire } from "react-icons/bs";
import { MdOutlineMusicNote } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { LuTrophy } from "react-icons/lu";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { SiYoutubeshorts } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";

export const sidebarItems = [
   {
      icon: <BsFire />,
      title: "Trending",
      path: "/trending"
   },
   {
      icon: <MdOutlineMusicNote />,
      title: "Musik",
      path: "/musik"
   },
   {
      icon: <FaGamepad />,
      title: "Game",
      path: "/game"
   },
   {
      icon: <LuNewspaper />,
      title: "Berita",
      path: "/berita"
   },
   {
      icon: <LuTrophy />,
      title: "Olahraga",
      path: "/olahraga"
   },
]

export const studioItems = [
   {
      icon: <PiYoutubeLogoLight />,
      title: "Youtube Studio",
      path: "/youtube-studio"
   },
   {
      icon: <SiYoutubeshorts />,
      title: "Youtube Musik",
      path: "/youtube-musik"
   },
   {
      icon: <TbBrandYoutubeKids />,
      title: "Youtube Kids",
      path: "/youtube-kids"
   },
]