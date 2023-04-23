import { Checkbox } from "./ui/checkbox"

type AddOnsCheckboxProps = {
  onChange: (checked: boolean, id: number) => void
  title: string
  price: number
  desc: string
  id: number
  isChecked: boolean
}

export default function AddOnsCheckbox({
  onChange,
  id,
  isChecked,
  title,
  price,
  desc,
}: AddOnsCheckboxProps) {
  return (
    <article
      className={`items-top ${
        isChecked ? "border-primary-purplishBlue bg-neutral-magnolia" : ""
      } flex space-x-2 rounded-lg border p-5 justify-between items-center`}
    >
      <div className="flex item-center  space-x-2">
        <Checkbox
          onCheckedChange={(checked) => onChange(Boolean(checked), id)}
          checked={isChecked}
          id={String(id)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {title}
          </label>
          <p className="text-muted-foreground text-sm text-neutral-coolGray">
            {desc}
          </p>
        </div>
      </div>
      <div className="text-sm text-primary-pastelBlue">${price}/mo</div>
    </article>
  )
}
