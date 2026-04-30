"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/components/logo.png";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSIgnOut = async () => {
    await authClient.signOut()
  }

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center gap-4   text-sm">
              <li>
                <Button variant="outline" className={"mr-4"}>
                  <Link href={"/signup"}>SignUp</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link href={"/signin"}>SignIn</Link>
                </Button>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-4">
              <Avatar size="sm" >
                <Avatar.Image src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSIgnOut} size="sm" variant="danger" className={"mr-4"}>
                  <Link href={"/"}>Sign Out</Link>
                </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
