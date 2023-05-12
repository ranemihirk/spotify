import * as React from "react";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faHistory,
  faSquarePlus,
  faShieldHeart,
  faChevronLeft,
  faChevronRight,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

type SideBarProps = {
  isLargeScreen: boolean;
};

const mainMenu = [
  {
    title: "Home",
    url: "/",
    icon: <FontAwesomeIcon icon={faHouse} size="lg" />,
  },
  {
    title: "Search",
    url: "search",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />,
  },
  {
    title: "Your Library",
    url: "library",
    icon: <FontAwesomeIcon icon={faHistory} size="lg" />,
  },
];

const secondaryMainMenu = [
  {
    title: "Create Playlist",
    url: "create-playlist",
    icon: <FontAwesomeIcon icon={faSquarePlus} size="lg" />,
  },
  {
    title: "Liked Songs",
    url: "liked-songs",
    icon: <FontAwesomeIcon icon={faShieldHeart} size="lg" />,
  },
];

const tertiaryMainMenu = [
  {
    title: "Legal",
    url: "legal",
    icon: <FontAwesomeIcon icon={faSquarePlus} size="lg" />,
  },
  {
    title: "Privacy Center",
    url: "privacy-center",
    icon: <FontAwesomeIcon icon={faShieldHeart} size="lg" />,
  },
  {
    title: "Privacy Policy",
    url: "privacy-policy",
    icon: <FontAwesomeIcon icon={faShieldHeart} size="lg" />,
  },
  {
    title: "Cookies",
    url: "cookies",
    icon: <FontAwesomeIcon icon={faShieldHeart} size="lg" />,
  },
  {
    title: "About Ads",
    url: "about-ads",
    icon: <FontAwesomeIcon icon={faShieldHeart} size="lg" />,
  },
  {
    title: "Cookies",
    url: "cookies",
    icon: <FontAwesomeIcon icon={faShieldHeart} size="lg" />,
  },
];

export default function Sidebar({ isLargeScreen }: SideBarProps): JSX.Element {
  return (
    <div
      className={`sidebar flex flex-col items-stretch bg-stone-950 text-new-white shadow-2xl ${
        isLargeScreen ? "w-[20%] max-w-[20%] px-6 py-6" : "w-min px-2 py-2"
      }`}
    >
      <div>
        <div className="font-bold mb-6 flex items-center">
          <FontAwesomeIcon icon={faSpotify} className="text-[2.5rem]" />{" "}
          <span className={`${isLargeScreen ? "ml-2" : "hidden"} text-2xl`}>
            Spotify
          </span>
        </div>
        {mainMenu.map((item, i) => (
          <NavLink
            to={item.url}
            key={i}
            className={`flex items-center py-1 my-2 cursor-pointer ${
              isLargeScreen ? "" : "justify-center"
            }`}
          >
            {item.icon}
            <h4 className={`${isLargeScreen ? "ml-4 " : "hidden"}`}>
              {item.title}
            </h4>
          </NavLink>
        ))}
        <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />
        {secondaryMainMenu.map((item, i) => (
          <NavLink
            to={item.url}
            key={i}
            className={`flex items-center py-1 my-2 cursor-pointer ${
              isLargeScreen ? "" : "justify-center"
            }`}
          >
            {item.icon}
            <h4 className={`${isLargeScreen ? "ml-4 " : "hidden"}`}>
              {item.title}
            </h4>
          </NavLink>
        ))}
      </div>
      <div className="self-end flex flex-wrap">
        {tertiaryMainMenu.map((item, i) => (
          <NavLink
            to={item.url}
            className="flex items-center py-1 mx-4 my-2 cursor-pointer"
            key={i}
          >
            <h4 className={`${isLargeScreen ? "" : "hidden"} text-xs`}>
              {item.title}
            </h4>
          </NavLink>
        ))}
        <br />
        <button
          className={`btn border border-new-white h-1 min-h-1 capitalize leading-3 bg-stone-950 py-1 mt-2 rounded-full ${
            isLargeScreen ? "" : "hidden"
          }`}
        >
          <FontAwesomeIcon icon={faGlobe} className="mr-2" /> English
        </button>
      </div>
    </div>
  );
}
