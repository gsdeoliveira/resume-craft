import { ReactNode } from "react"
import { Label } from "./label"

type FieldWrapperProps = {
  name: string
  label: string
  children: ReactNode
}

export const FieldWrapper = ({ name, label, children }: FieldWrapperProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      {children}
    </div>
  )
}
