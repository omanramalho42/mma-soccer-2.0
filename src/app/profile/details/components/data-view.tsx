import React from "react"

import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { FormView } from "./form-view"

export default function DataView () {
    return (
        <Card className='mx-10 my-10'>
            <CardHeader>
                <div className="flex flex-row justify-between items-center">
                    <p className=''>+ Create new invoice</p>
                    <div className='flex flex-row-reverse gap-3'>
                        <Button className='bg-blue-500'>
                        + Create invoice
                        </Button>
                        <Button className='bg-gray-700'>
                            Cancel
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className='flex mx-2 my-2 rounded-lg'>
                <FormView />
            </CardContent>
        </Card>
    )
}