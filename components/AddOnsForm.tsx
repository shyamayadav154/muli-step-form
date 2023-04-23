"use client"

import React from "react"
import { useMultiStepFormStore } from "@/store/form-store"

import AddOnsCheckbox from "./AddOnsCheckbox"
import ButtonGroup from "./ButtonGroup"



function AddOnsForm() {
  const addOnsState = useMultiStepFormStore((state) => state.addOns)
  const setAddOnsState = useMultiStepFormStore((state) => state.setAddOns)
  const onCheckedChange = (checked: boolean, id: number) => {
    console.log({
        checked,
        id
    })
    const newAddOnsState = addOnsState.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: checked }
      }
      return item
    })

    setAddOnsState(newAddOnsState)
  }
  return (
    <section className="flex flex-1 flex-col">
      <article className="mt-10 w-full space-y-4">
        {addOnsState.map((item) => (
          <AddOnsCheckbox
            key={item.id}
            title={item.title}
            price={item.price}
            desc={item.desc}
            id={item.id}
            isChecked={item.isChecked}
            onChange={onCheckedChange}
          />
        ))}
      </article>
      <article className="flex flex-1 items-end ">
        <ButtonGroup href1="/select-plan" href2="/summary" />
      </article>
    </section>
  )
}

export default AddOnsForm
