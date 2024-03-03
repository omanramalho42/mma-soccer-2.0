import React, { HTMLAttributes } from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import Link from 'next/link'
import { Input } from '@/components/ui/input';

export interface OptionsProps {
  name: string;
  value: string;
}

interface ControlInputProps extends HTMLAttributes<HTMLInputElement> {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  errors: any;
}

const ControlInput: React.FC<ControlInputProps> = ({ 
  control, 
  name, 
  label, 
  placeholder,
  errors,
  ...rest 
}: ControlInputProps ) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem className='flex-1 w-full'>
            <FormLabel className="text-black dark:text-white">{ label }</FormLabel>
            <Input 
              className={`text-black dark:text-white ${errors && "border border-red-500"}`} 
              onChange={field.onChange} 
              defaultValue={field.value} 
            />
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

export default ControlInput