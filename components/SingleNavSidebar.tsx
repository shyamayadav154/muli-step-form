"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function SingleNavSidebar({ item, index }) {
  const pathname = usePathname()
  return (
    <li key={item.name} className="uppercase text-white">
      <Link href={item.href}>
        <div className="flex gap-2">
          <span
            className={` grid h-9 ${
              pathname === item.href
                ? "bg-primary-lightBlue text-primary-marineBlue"
                : "border"
            }  w-9 font-medium place-content-center rounded-full`}
          >
            {index + 1}
          </span>
          <div className="flex flex-col text-sm">
            <span className="text-xs font-medium text-neutral-lightGray">
              step {index + 1}
            </span>
            <span className="font-bold">{item.name}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SingleNavSidebar
