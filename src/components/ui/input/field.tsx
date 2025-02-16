import { ComponentProps } from "react"
import { Input } from "."
import { Controller, useFormContext } from "react-hook-form"
import { FieldWrapper } from "../field-wrapper"

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string
  name: string
  containerClassName?: string
}

export const InputField = ({
  label,
  name,
  containerClassName,
  required,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      rules={{ required: required && "Campo obrigatório" }}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper name={name} label={label} className={containerClassName}>
          <Input
            {...props}
            {...field}
            id={name}
            className={fieldState.error ? "border-destructive/50" : ""}
          />
          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  )
}
