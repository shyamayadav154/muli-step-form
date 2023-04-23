"use client"

import React from "react"

import Button from "./Button"
import { useRouter } from "next/navigation"

type ButtonGroupProps = {
  href1?: string
  href2?: string
}

function ButtonGroup({ href1, href2 }: ButtonGroupProps) {
  const router = useRouter()
  return (
    <div className="flex w-full justify-between">
      {href1 && (
        <button
          onClick={() => router.push(href1)}
          className="text-neutral-coolGray hover:text-primary-marineBlue"
        >
          Go Back
        </button>
      )}

      {href2 && <Button onClick={() => router.push(href2)}>Next Step</Button>}
    </div>
  )
}

export default ButtonGroup
