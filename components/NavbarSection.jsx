"use client";
import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { BoxIcon } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function NavbarSection() {
  // GETTING DATA IN THE CLIENT COMPONENT
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading..........</p>;
  }
  if (status === "authenticated") {
    console.log(session?.user);
  }
  // const isLoggedIn = false;
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <BoxIcon className="mr-3 h-6 sm:h-9 text-black" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
          Desishub
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {status === "authenticated" && (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Link
          href="/login"
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          Log in
        </Link>
        <Link
          href="/register"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get started
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
