import { BsFire } from "react-icons/bs";
import { MdOutlineMusicNote } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { LuTrophy } from "react-icons/lu";

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
      icon: <BsFire />,
      title: "Youtube Studio",
      path: "/youtube-studio"
   },
   {
      icon: <BsFire />,
      title: "Youtube Musik",
      path: "/youtube-musik"
   },
   {
      icon: <BsFire />,
      title: "Youtube Kids",
      path: "/youtube-kids"
   },
]