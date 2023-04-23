"use client"

import { useMultiStepFormStore } from "@/store/form-store"

function SummaryInfo() {
  const selectPlanState = useMultiStepFormStore((state) => state.selectPlan)
  const addOnsState = useMultiStepFormStore((state) => state.addOns)
  const isYearly = selectPlanState.isYearly
  const selectedAddOns = addOnsState.filter((item) => item.isChecked)
  const addOnsPrice = selectedAddOns.reduce((acc, item) => acc + item.price, 0)
  console.log({ addOnsPrice })
  const planPrice = selectPlanState.plan.price
  const totalPrice = addOnsPrice + planPrice
  return (
    <section className="">
      <article className="mt-10 divide-y rounded-lg bg-neutral-alabaster p-5 font-bold text-primary-marineBlue">
        <div className="flex justify-between pb-5">
          <div>
            <span className="">{selectPlanState.plan.title}&nbsp;</span>
            <span>{isYearly ? "(Yearly)" : "(Monthly)"}</span>
          </div>
          <div>${planPrice}/mo</div>
        </div>
        <div className="space-y-1 pt-2">
          {selectedAddOns.map((item) => (
            <div className="flex justify-between text-sm font-normal  text-neutral-coolGray">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      </article>
      <div className="mt-5 flex items-center justify-between px-5">
        <span className="text-sm text-neutral-coolGray">Total (per month)</span>
        <span className="text-sm font-bold text-primary-purplishBlue">
          ${totalPrice.toFixed(2)}/mo
        </span>
      </div>
    </section>
  )
}

export default SummaryInfo
