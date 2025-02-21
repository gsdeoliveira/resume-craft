import Link from "next/link"
import Logo from "@/app/assets/logo.svg"
import { AIGenerationDropdown } from "./ai-generation-dropdown"
import { Separator } from "@/components/ui/separator"
import { BasicInfoSection } from "./sections/basic-info"

export const InfosSidebar = () => {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <div className="w-full flex items-center justify-between gap-4">
        <Link href="/dashboard/resumes">
          <Logo className="w-full max-w-[80px]" />
        </Link>

        <AIGenerationDropdown />
      </div>

      <Separator className="my-5" />

      <BasicInfoSection />
    </aside>
  )
}
