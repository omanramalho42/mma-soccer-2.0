import React from 'react';

interface DocumentWordProps {
    name: string;
    profession: string;
    createdAt: string;
    contactInfo: string;
    eletronicAsg: string;
    invoice_id: string;
    tax_id: string;
}

const DocumentoWord = ({ contactInfo, createdAt, eletronicAsg, name, profession, invoice_id, tax_id }: DocumentWordProps) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dominik Tyka</h1>
      <p>Product Designer, Fortaleza, Brasil</p>
      <div className="mb-4 flex gap-2">
        <p className="font-semibold">invoice:</p>
        <p>{invoice_id}</p>
      </div>
      <div className="mb-4">
        <div className='flex justify-start items-start m-auto gap-2'>
            <p className="font-semibold">Cliente:</p>
            <p className='bg-gray-200 font-bold px-2'>{name}</p>
        </div>
        <div>
            <p className='text-gray-600 w-[8rem]'>Pedro gervásio Bernandes, Bom retiro, Joinville, Br</p>
            <div className='flex items-center justify-start flex-row gap-2'>
                <p className="font-semibold">TAX ID:</p>
                <p className='font-normal'>{tax_id}</p>
            </div>
        </div>
      </div>
      <div className="mb-4 flex gap-2">
        <p className="font-semibold">Data de Criação:</p>
        <p>{createdAt}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Informações de Contato:</p>
        <p>{contactInfo}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Assinatura Eletrônica:</p>
        <p>{eletronicAsg}</p>
      </div>
    </div>
  );
};

export default DocumentoWord;
