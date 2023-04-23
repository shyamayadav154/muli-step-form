"use client"

import React, { useRef } from "react"
import { useMultiStepFormStore } from "@/store/form-store"

function StoreInitializer({ yourInfo, addOns, selectPlan }) {
  const initialized = useRef(false)
  if (!initialized.current) {
    useMultiStepFormStore.setState({
        yourInfo,
        addOns,
        selectPlan,
    })
  }

  return null
}

export default StoreInitializer
