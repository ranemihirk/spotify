import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "./assets/imgs/rmklogo.png";
import "./css/default.css";

export default function Default() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [sideDrawerType, setSideDrawerType] = useState(false);
  const [chatDrawerType, setChatDrawerType] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  return (
    <div></div>
  );
}
