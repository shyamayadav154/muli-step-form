"use client"

import { FormEventHandler } from "react"
import Image from "next/image"
import { useMultiStepFormStore } from "@/store/form-store"

import ButtonGroup from "./ButtonGroup"
import { Switch } from "./ui/switch"

const planCares = [
  {
    id: 1,
    title: "Arcade",
    price: 9.99,
    img: "images/icon-arcade.svg",
  },
  {
    id: 2,
    title: "Advanced",
    price: 19.99,
    img: "images/icon-advanced.svg",
  },
  {
    id: 3,
    title: "Pro",
    price: 29.99,
    img: "images/icon-pro.svg",
  },
]

function SelectPlanForm() {
  const selectPlanState = useMultiStepFormStore((state) => state.selectPlan)
  const setSelectPlanState = useMultiStepFormStore(
    (state) => state.setSelectPlan
  )
  const { plan:selectedPlan, isYearly } = selectPlanState

  const onSwitchChange = () => {
    setSelectPlanState({
      ...selectPlanState,
      isYearly: !isYearly,
    })
  }

  const onPlanCardClick = (plan: any) => {
    setSelectPlanState({
      ...selectPlanState,
      plan,
    })
  }

  return (
    <section className="flex flex-1 flex-col">
      <article className="mt-10 flex gap-5">
        {planCares.map((plan) => (
          <PlanCard plan={plan} key={plan.id} isSelected={plan.id === selectedPlan.id } onClick={onPlanCardClick} />
        ))}
      </article>
      <article className="item-center mt-5 flex justify-center gap-3 rounded bg-neutral-magnolia py-3">
        <div className="flex items-center gap-3">
          <span
            className={`text-sm font-medium ${
              !isYearly && "text-neutral-coolGray"
            }`}
          >
            Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={onSwitchChange} className=" " />
          <span
            className={`text-sm font-medium ${
              isYearly && "text-neutral-coolGray"
            }`}
          >
            Yearly
          </span>
        </div>
      </article>
      <article className="flex flex-1 items-end   ">
        <ButtonGroup href1="/" href2="/add-ons" />
      </article>
    </section>
  )
}

function PlanCard({
  plan,
  onClick,
  isSelected,
}: {
  plan: any
  onClick: FormEventHandler<HTMLDivElement>
  isSelected?: boolean
}) {
  return (
    <div
      onClick={()=>onClick(plan)}
      className={ `space-y-5 cursor-pointer hover:bg-gray-50 ${isSelected && 'bg-gray-50 border-primary-purplishBlue'} rounded-lg border py-3 pl-3 pr-8 text-sm` }
    >
      <div>
        <Image src={plan.img} alt="Arcade" width={35} height={35} />
      </div>
      <div>
        <h1 className="font-medium text-primary-marineBlue">{plan.title}</h1>
        <p className="text-neutral-coolGray">${plan.price}/mo</p>
      </div>
    </div>
  )
}

export default SelectPlanForm
