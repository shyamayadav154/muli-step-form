
import React from "react"
import Link from "next/link"
import SingleNavSidebar from "./SingleNavSidebar"

const navigation = [
  {
    name: "Your Info",
    href: "/",
  },
  {
    name: "Select plan",
    href: "/select-plan",
  },
  {
    name: "Add-ons",
    href: "/add-ons",
  },
  {
    name: "Summary",
    href: "/summary",
  },
]

function Sidebar() {
  return (
    <nav className="sidebar-bg-img  rounded-xl p-5">
      <ul className="space-y-5">
        {navigation.map((item, index) => (
          <SingleNavSidebar item={item} index={index} />
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
