import { ReactNode } from "react"
import { Label } from "./label"
import { cn } from "@/lib/utils"

type FieldWrapperProps = {
  name: string
  label: string
  className?: string
  children: ReactNode
}

export const FieldWrapper = ({
  name,
  label,
  className,
  children,
}: FieldWrapperProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={name}>{label}</Label>
      {children}
    </div>
  )
}
