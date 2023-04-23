import SelectPlanForm from "@/components/SelectPlanForm"

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

function SelectPlan() {
  return (
    <section className=" flex h-full flex-col">
      <h1 className="text-3xl font-medium text-primary-marineBlue">
        Select your plan
      </h1>
      <p className="mt-2 text-sm text-neutral-coolGray">
        You have the option of monthly or yearly billing.
      </p>
      <SelectPlanForm />
    </section>
  )
}

export default SelectPlan
