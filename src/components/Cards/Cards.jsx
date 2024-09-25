import {Card, CardHeader} from "@nextui-org/react";
import { Leaf } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { Bitcoin } from 'lucide-react';



export default function Cards() {
  return (
    <div className=" gap-6 flex px-8 mx-auto max-sm:flex-col items-center justify-center mb-24">
    <Card className="col-span-12 sm:col-span-4 h-[300px] w-[380px] bg-[#1C1C1C] border border-gray-700">
      <CardHeader className="z-10 top-1 flex-col !items-start mx-2 my-4">
      <Leaf color="#3F39E8" size={46} />
        <p className="text-large text-white/60 uppercase font-bold mx-2 my-2">Missão</p>
        <h4 className="text-white font-thin mx-2 tracking-wider">Promover a sustentabilidade ambiental através da utilização de tecnologia blockchain para financiar projetos ecológicos e iniciativas verdes.</h4>
      </CardHeader>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] w-[380px] bg-[#1C1C1C] border border-gray-700">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start mx-2 my-4">
      <Wallet color="#3F39E8" size={46} />
        <p className="text-large text-white/60 uppercase font-bold mx-2 my-2">Visão</p>
        <h4 className="text-white font-thin mx-2 tracking-wider">Buscamos financiamento de iniciativas ecológicas, uma comunidade na proteção do meio ambiente e combate às mudanças climáticas.</h4>
      </CardHeader>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] w-[380px] bg-[#1C1C1C] border border-gray-700">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start mx-2 my-4">
      <Bitcoin color="#3F39E8" size={46} />
        <p className="text-large text-white/60 uppercase font-bold mx-2 my-2">Financiamento</p>
        <h4 className="text-white font-thin mx-2 tracking-wider"> Arrecadar fundos para financiar projetos ecológicos por doações e venda de tokens. As transações serão registradas em uma blockchain pública.</h4>
      </CardHeader>
    </Card>

  </div>
  );
}