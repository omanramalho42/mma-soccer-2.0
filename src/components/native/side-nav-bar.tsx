/** @format */
"use client";

import { useState } from "react";
import { Nav } from "@/components/ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  Paperclip,
  User,
  Newspaper,
  Trophy,
  Handshake,
  VideoIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import SideBarMenu from "./side-bar-menu";

const SideNavbar = ({}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 bg-white pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Ordrs",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost"
          },
          {
            title: "News",
            href: "/blog/news",
            icon: Paperclip,
            variant: "ghost"
          },
          {
            title: "Register",
            href: "/signup",
            icon: Newspaper,
            variant: "ghost"
          },
          {
            title: "Champion",
            href: "table/game",
            icon: Trophy,
            variant: "ghost"
          },
          {
            title: "Welcome",
            href: "/welcome",
            icon: Handshake,
            variant: "ghost"
          },
          {
            title: "Profile",
            href: "/profile/details",
            icon: User,
            variant: "ghost"
          },
          {
            title: "Live",
            href: "/live",
            icon: VideoIcon,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
export default SideNavbar;