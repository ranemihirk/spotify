import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// import logo from "./assets/imgs/rmklogo.png";
import Sidebar from "./Sidebar";
import Playlist from "../Playlist";

export default function Layout(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex-col min-w-screen max-w-screen relative flex h-full max-h-screen min-h-screen w-full overflow-hidden">
      <div className="flex h-mainScreen">
        <Sidebar isLargeScreen={isLargeScreen} />
        <main className="grow bg-gradient-to-t from-stone-950 from-40% to-stone-800 text-new-white overflow-hidden overflow-y-scroll">
          {/* Top Nav */}
          <div className="flex justify-between items-center bg-stone-900 px-4 py-2">
            <div className="ml-6">
              <FontAwesomeIcon icon={faChevronLeft} size="lg" className="" />
              <FontAwesomeIcon
                icon={faChevronRight}
                size="lg"
                className="ml-8"
              />
            </div>
            <div>
              <button className="btn normal-case mr-4 bg-stone-900 border-none">
                Sign up
              </button>
              <button className="btn normal-case font-bold rounded-full bg-new-white text-new-black hover:scale-110">
                Log in
              </button>
            </div>
          </div>

          {/* Playlist */}
          <Playlist title={"Focus"} number={isLargeScreen ? 6 : 2} isLargeScreen={isLargeScreen} />
          <Playlist title={"Spotify Playlists"} number={isLargeScreen ? 6 : 2} isLargeScreen={isLargeScreen} />
          <Playlist title={"Sleep"} number={isLargeScreen ? 2 : 1} isLargeScreen={isLargeScreen} />
          <Playlist title={"Sound of India"} number={isLargeScreen ? 6 : 2} isLargeScreen={isLargeScreen} />
        </main>
      </div>
      <div className="flex justify-between items-center h-auto w-full px-4 py-2 bg-gradient-to-r from-fuchsia-500 from-10% to-blue-500 cursor-pointer">
        <div className="text-new-white">
          <p className="font-semibold text-xs tracking-widest uppercase">
            Preview of Spotify
          </p>
          <p className="font-bold m-0">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <div>
          <button className="btn normal-case font-bold rounded-full bg-new-white text-new-black hover:scale-110">
            Sign up free
          </button>
        </div>
      </div>
    </div>
  );
}
