import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, type DayPickerProps } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        /* ... tes classNames inchangés ... */
        ...classNames,
      }}
      components={
        {
          IconLeft: ({
            className,
            ...iconProps
          }: {
            className?: string
          } & React.SVGProps<SVGSVGElement>) => (
            <ChevronLeft className={cn("h-4 w-4", className)} {...iconProps} />
          ),
          IconRight: ({
            className,
            ...iconProps
          }: {
            className?: string
          } & React.SVGProps<SVGSVGElement>) => (
            <ChevronRight className={cn("h-4 w-4", className)} {...iconProps} />
          ),
        } as unknown as Partial<DayPickerProps["components"]>
      }
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
