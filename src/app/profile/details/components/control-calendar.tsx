"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DataPickerProps {
    label: string;
    control: any;
    name: string;
    errors: any;    
}

export function DataPicker({ label, control, name, errors }: DataPickerProps) {
    const [date, setDate] = React.useState<Date>()
    console.log(errors,'errors');
    return (
        <div className="flex flex-col">
            <Popover>
                <PopoverTrigger 
                    asChild 
                    className={` ${errors && "border border-red-500"}`} 
                >
                    <Button
                        variant={"outline"}
                        className={cn(
                            "xl:w-[280px] w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>{label}</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <FormField 
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <FormItem>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(value) => {
                                        field.onChange(value);
                                        setDate(value)
                                    }}
                                    initialFocus
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </PopoverContent>
            </Popover>
            {errors && (
                <span className="text-red-500 text-sm relative top-2">
                    { errors.message }
                </span>
            )}
        </div>
    
    )
}
