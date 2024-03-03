"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Filter as FilterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"

import { toast } from "@/components/ui/use-toast"
import ControlSelect, { OptionsProps } from "./control-select"
import ControlInput from "./control-input"
import { 
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription 
} from "@/components/ui/card"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DataPicker } from "../components/control-calendar"
import DocumentoWord from "./document-word"
import { EventHandler, useState } from "react"
import { DialogModal } from "./dialog-modal"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

const FormSchema = z.object({
    language: z.string({
      required_error: "Por favor selecione uma linguagem.",
    }),
    currency: z.string({
        required_error: "Por favor selecione uma moeda"
    }),
    document_type: z.string({
        required_error: "Por favor selecione o tipo do documento"
    }),
    document_number: z.string({
        required_error: "Por favor insira o número do documento"
    }),
    creating_date: z.date({
        required_error: "Por favor selecione a data de criação"
    }),
    validate_date: z.date({
        required_error: "Por favor selecione a data de validade"
    }),
    customer: z.string({
        required_error: "Por favor selecione o cliente"
    }),
    tax_id: z.string({
        required_error: "Por favor insira o id do cliente"
    }),
})

const languageOptions: OptionsProps[] = [
    { name:  "Portugues", value: "Portugues" },
    { name:  "Espanhol", value: "Espanhol" },
    { name:  "Ingles", value: "Ingles" },
    { name:  "Frances", value: "Frances" },
    { name:  "Italiano", value: "Italiano" },
]

const currencyOptions: OptionsProps[] = [
    { name:  "USD", value: "USD" },
    { name:  "BRL", value: "BRL" },
    { name:  "USDT", value: "USDT" },
    { name:  "HIEN", value: "HIEN" },
    { name:  "UDX", value: "UDX" },
]

const documentTypeOptions: OptionsProps[] = [
    { name:  "Passaporte", value: "Passaporte" },
    { name:  "RG", value: "RG" },
    { name:  "CPF", value: "CPF" },
    { name:  "Titulo", value: "Titulo" },
    { name:  "CNPJ", value: "CNPJ" },
]

interface OptionsDayProps {
    text: string;
}

const optionsDay: OptionsDayProps[] = [
    { text: "3 dias" },
    { text: "7 dias" },
    { text: "14 dias" },
    { text: "21 dias" },
    { text: "+ Add customizado" },
]

export function FormView() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const { 
        control, 
        reset, 
        handleSubmit, 
        formState: { 
            errors 
        } 
    } = form;

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        })
    }

    const [selected, setSelected] = useState<keyof typeof optionsDay | null | string>(null);
    const [selectedPayment, setSelectedPayment] = useState<keyof typeof optionsDay | null | string>(null);

    const [modalShow, setModalShow] = useState<boolean>(false);

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex-1 flex xl:flex-row flex-col gap-6">
                    <div className="flex flex-col gap-4 w-full mt-5">
                        <div className="flex flex-row gap-4">
                            <ControlSelect 
                                options={languageOptions}
                                control={control} 
                                name="language" 
                                label="Linguagem" 
                                placeholder=""
                                message=""
                                errors={errors.language}
                            />
                            <ControlSelect 
                                options={currencyOptions}
                                control={control} 
                                name="currency" 
                                label="Moeda" 
                                placeholder=""
                                message=""
                                errors={errors.currency}
                            />
                        </div>
                        <Card className="">
                            <CardHeader className="flex flex-row w-full justify-between">
                                <CardTitle className=" font-normal">My details</CardTitle>
                                <div className="flex flex-row-reverse gap-1 items-center justify-center">
                                    <p className="">Edit</p>
                                    <FilterIcon size={24} className="dark:text-gray-400 text-gray-700 cursor-pointer" />
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3">
                                <div className="flex flex-row gap-2 justify-start items-center">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/omanramalho42.png" />
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <p className="dark:text-gray-400 text-gray-700">Oman Ramalho</p>
                                        <p className="texd-gray-500">Omanapple42@hotmail.com</p>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="dark:text-gray-400 text-gray-700">Endereço</p>
                                    <p className="texd-gray-500">Pedro gervásio Bernandes, 307</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="dark:text-gray-400 text-gray-700">Número de telefone</p>
                                    <p className="texd-gray-500">+55 85 98808-4345</p>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="flex flex-row gap-4">
                            <ControlSelect 
                                options={documentTypeOptions}
                                control={control} 
                                name="document_type" 
                                label="Tipo de documento" 
                                placeholder=""
                                message=""
                                errors={errors.document_type}
                            />
                            <ControlInput 
                                control={control} 
                                name="document_number" 
                                label="Número do documento" 
                                placeholder=""
                                errors={errors.document_number}
                            />
                        </div>
                        
                        <div className="h-[1px] bg-gray-300 w-full my-5" />
                        
                        <div className="flex flex-col gap-2 w-full">
                            <p className="dark:text-gray-400 text-gray-500">
                                Dates
                            </p>
                            <div className="flex xl:flex-row flex-col gap-3 justify-between">
                                <DataPicker 
                                    errors={errors.creating_date}
                                    control={control} 
                                    name="creating_date" 
                                    label="Data de criação" 
                                />
                                <DataPicker
                                    errors={errors.validate_date}
                                    control={control} 
                                    name="validate_date" 
                                    label="Prazo de validade" 
                                />
                            </div>
                        </div>
                        <p className="">Payament due date</p>
                        <div className="flex xl:flex-row flex-col gap-2 w-full">
                            {optionsDay.map(({ text }, idx) => {
                                if(text === "+ Add customizado") {
                                    return (
                                        <Dialog key={idx}>
                                            <DialogModal 
                                                button={
                                                    <Button
                                                        key={idx}
                                                        type="button" 
                                                        className={`w-full ${selected === text && "bg-gray-200 border border-blue-500"}`}
                                                        variant="outline"                                                    
                                                        name={text}
                                                        onClick={(event: any) => {
                                                            setModalShow(true);
                                                            if(selected === event.target.name) {
                                                                return setSelected(null);
                                                            }
                                                            setSelected(event.target.name)
                                                        }}
                                                    >
                                                        {text}
                                                    </Button>
                                                } 
                                            />
                                        </Dialog>
                                    )
                                } else {
                                    return (
                                        <Button
                                            key={idx}
                                            type="button" 
                                            className={`w-full ${selected === text && "bg-gray-200 border border-blue-500"}`}
                                            name={text}
                                            variant="outline"
                                            onClick={(event: any) => {
                                                if(event.target.name === "+ Add customizado") {
                                                    setModalShow(true);
                                                }
                                                if(selected === event.target.name) {
                                                    return setSelected(null);
                                                }
                                                setSelected(event.target.name)
                                            }}
                                        >
                                            {text}
                                        </Button>
                                    )
                                } 
                            } )}
                        </div>

                        <div className="h-[1px] bg-gray-300 w-full my-5" />

                        <div className="flex flex-col gap-2 w-full">
                            <p className="dark:text-gray-400 text-gray-500">
                                Detalhes do cliente
                            </p>
                            <div className="flex flex-row gap-4">
                                <ControlSelect 
                                    options={languageOptions}
                                    control={control} 
                                    name="customer" 
                                    label="Cliente" 
                                    placeholder=""
                                    message=""
                                    errors={errors.customer}
                                />
                                <ControlSelect 
                                    options={currencyOptions}
                                    control={control} 
                                    name="tax_id" 
                                    label="tax id" 
                                    placeholder=""
                                    message=""
                                    errors={errors.tax_id}
                                />
                            </div>
                        </div>

                        <p className="">Payament due date</p>
                        <div className="flex xl:flex-row flex-col gap-2 w-full">
                            {optionsDay.map(({ text }, idx) => {
                                if(text === "+ Add customizado") {
                                    return (
                                        <Dialog key={idx}>
                                            <DialogModal 
                                                button={
                                                    <Button
                                                        key={idx}
                                                        type="button" 
                                                        className={`w-full ${selectedPayment === text && "bg-gray-200 border border-blue-500"}`}
                                                        name={text}
                                                        variant="outline"
                                                        onClick={(event: any) => {
                                                            setModalShow(true);
                                                            if(selectedPayment === event.target.name) {
                                                                return setSelectedPayment(null);
                                                            }
                                                            setSelectedPayment(event.target.name)
                                                        }}
                                                    >
                                                        {text}
                                                    </Button>
                                                } 
                                            />
                                        </Dialog>
                                    )
                                } else {
                                    return (
                                        <Button
                                            key={idx}
                                            type="button" 
                                            className={`w-full ${selectedPayment === text && "bg-gray-200 border border-blue-500"}`}
                                            name={text}
                                            variant="outline"
                                            onClick={(event: any) => {
                                                if(event.target.name === "+ Add customizado") {
                                                    setModalShow(true);
                                                }
                                                if(selectedPayment === event.target.name) {
                                                    return setSelectedPayment(null);
                                                }
                                                setSelectedPayment(event.target.name)
                                            }}
                                        >
                                            {text}
                                        </Button>
                                    )
                                } 
                            } )}
                        </div>

                    </div>
                    
                    <DocumentoWord 
                        contactInfo="teste"
                        createdAt="12/06/2000"
                        eletronicAsg="Oman"
                        name="Omanzera"
                        profession="saude em tata"
                        invoice_id="#3232-3232-2323"
                        tax_id="23123-321312"
                    />
                </div>

                <CardFooter className="px-0">        
                    <Button
                        className="mt-6 bg-blue-600 hover:bg-blue-800" 
                        type="submit"
                    >
                        Enviar
                    </Button>    
                </CardFooter>
            </form>
        </Form>
    )
}
