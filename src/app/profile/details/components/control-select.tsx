import React, { HTMLAttributes } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import Link from 'next/link'

export interface OptionsProps {
  name: string;
  value: string;
}

interface ControlSelectProps extends HTMLAttributes<HTMLSelectElement> {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  message: string;
  options: OptionsProps[];
  errors: any;
}

const ControlSelect: React.FC<ControlSelectProps> = ({ 
  control, 
  name, 
  label, 
  placeholder, 
  message, 
  options,
  errors,
  ...rest 
}: ControlSelectProps ) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem className='flex-1 w-full'>
            <FormLabel className="">{ label }</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
                <FormControl>
                  <SelectTrigger className={`${errors && "border border-red-500"}`} >
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent 
                  className=""
                >
                  {options.map(({ name, value }, index) => {
                    return (
                      <SelectItem 
                        key={index} 
                        value={value}
                      >
                        { name }
                      </SelectItem>
                    )
                  })}
                </SelectContent>
            </Select>
              {/* <FormDescription>
                {message}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
            <FormMessage />
        </FormItem>
        )}
    />
  )
}

export default ControlSelect