import React from "react"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error: undefined | string
  register: any 
}

function FormInput({ label, error,register, ...props }: FormInputProps) {
  return (
    <div className="relative">
      {error && (
        <span className="absolute right-2 text-xs font-medium text-primary-strawberryRed">
          {error}
        </span>
      )}
      <label
        htmlFor={label}
        className="block text-sm font-medium text-primary-marineBlue"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          className={`block w-full ${
            error ? " border-primary-strawberryRed" : ""
          } rounded-md  border px-2 py-1.5 font-medium ring-0    ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          {...props}
          {...register(props.name)}
        />
      </div>
    </div>
  )
}

export default FormInput
