import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

// import logo from "./assets/imgs/rmklogo.png";
import MainBody from "./MainBody";
import Sidebar from "./Sidebar";


export default function Layout(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex-col min-w-screen max-w-screen relative flex h-full max-h-screen min-h-screen w-full overflow-hidden">
      <div className="flex h-mainScreen">
        <Sidebar isLargeScreen={isLargeScreen} />
        <MainBody isLargeScreen={isLargeScreen} />
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
