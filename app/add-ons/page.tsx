import React from "react"

import AddOnsCheckbox from "@/components/AddOnsCheckbox"
import AddOnsForm from "@/components/AddOnsForm"

function AddOns() {
  return (
    <section className="flex h-full flex-col">
      <h1 className="text-3xl font-bold">Pick add-ons</h1>
      <p className="mt-1 text-sm text-neutral-coolGray">
        Add-ons help enhance your gaming experience.
      </p>
      <AddOnsForm />
    </section>
  )
}

export default AddOns
