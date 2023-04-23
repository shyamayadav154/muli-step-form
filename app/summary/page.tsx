import ButtonGroup from "@/components/ButtonGroup"
import SummaryInfo from "@/components/SummaryInfo"

function Summary() {
  return (
    <section className="h-full flex flex-col ">
      <h1 className="text-3xl font-bold text-primary-marineBlue">
        Finishing up
      </h1>
      <p className="mt-1 text-sm text-neutral-coolGray">
        Double check everything looks OK before confirming
      </p>
      <SummaryInfo />

      <article className="flex flex-1 items-end ">
        <ButtonGroup href1="/"  />
      </article>
    </section>
  )
}

export default Summary
