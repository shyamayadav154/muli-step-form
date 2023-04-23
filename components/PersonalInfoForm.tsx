'use client'
import React from "react"
import { useRouter } from "next/navigation"
import { useMultiStepFormStore } from "@/store/form-store"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

import Button from "@/components/Button"
import FormInput from "@/components/FormInput"

const personalInfoSchema = z.object({
  name: z
    .string({
      required_error: "This field is required",
    })
    .min(3)
    .max(50),
  email: z
    .string({
      required_error: "This field is required",
    })
    .email(),
  phone: z
    .string({
      required_error: "This field is required",
    })
    .min(10)
    .max(15),
})

type PersonalFormData = {
  name: string
  email: string
  phone: string
}




function PersonalInfoForm() {
  const personaFormData = useMultiStepFormStore((state) => state.yourInfo)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PersonalFormData>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onTouched",
    defaultValues: personaFormData,
  })

  const router = useRouter()
  const setPersonalFormData = useMultiStepFormStore(
    (state) => state.setYourInfo
  )

  const onSubmitHandler: SubmitHandler<PersonalFormData> = (data) => {
    console.log({ data })
    setPersonalFormData(data)
    router.push("/select-plan")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="mt-5 flex flex-1 flex-col justify-between "
    >
      <div className="space-y-4">
        <FormInput
          error={errors.name?.message}
          name="name"
          label="Name"
          placeholder="e.g. Stephen King"
          register={register}
        />
        <FormInput
          error={errors.email?.message}
          label="Email address"
          name="email"
          placeholder="e.g. stephenking@lore.com"
          register={register}
        />

        <FormInput
          error={errors.phone?.message}
          name="phone"
          label="Pone number"
          placeholder="e.g. +1 234 345654"
          register={register}
        />
      </div>
      <div className="flex justify-end">
        <Button>Next</Button>
      </div>
    </form>
  )
}

export default PersonalInfoForm