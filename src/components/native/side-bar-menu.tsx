import React from 'react'
import { Home, LayoutDashboard, User, Table, Newspaper, Smile, Signal } from "lucide-react"
import { Card } from '../ui/card';
import Link from 'next/link';
import { Avatar, AvatarImage } from '../ui/avatar';
import { AnimatedTooltipPreview } from './animated-tooltip-preview';

interface MenuProps {
    title: "Home",
    icon: React.ReactNode;
}

const menu = [
    { title: "Home", icon: <Home size={18} />, slug: "/" },
    { title: "Players", icon: <LayoutDashboard size={18} />, slug: "/management/players" },
    { title: "Campeonato", icon: <Table size={18} />, slug: "/table/game" },
    { title: "Perfil", icon: <User size={18} />, slug: "/profile/details" },
    { title: "Bem Vindo", icon: <Smile size={18} />, slug: "/welcome" },
    { title: "Noticias", icon: <Newspaper size={18} />, slug: "/blog/news" },
    { title: "Registrar", icon: <Signal size={18} />, slug: "/signup" },
    { title: "Usuários", icon: <Newspaper size={18} />, slug: "/users" },
    { title: "Configuraçoes", icon: <Signal size={18} />, slug: "/settings" },
    { title: "Dashboard", icon: <Smile size={18} />, slug: "/dashboard" },
]

const SideBarMenu:React.FC = () => {
  return (
    <div className='flex flex-col'>
        <Card className='flex flex-col gap-1 m-2 p-5 w-[15rem] xl:h-[90vh] h-full bg-white'>
            {menu.map(({ icon, slug, title }, idx: number) => {
                return (
                    <Link key={idx} href={`${slug}`}>
                        <div className='flex hover:bg-gray-200 transition-all p-2 flex-row items-center justify-start gap-2'>
                            { icon }
                            <p className=''>{title}</p>
                        </div>
                    </Link>
                )
            })}
        </Card>
        <Card className='flex w-full gap-3 items-center bg-white m-2 p-5 w-[15rem]'>
           <Avatar>
                <AvatarImage src="https://github.com/omanramalho42.png"/>
            </Avatar>
            <div>
                <p className='text-white font-bold'>Oman Ramalho</p>
                <p className='text-gray-600 font-medium text-sm'>Admin</p>
            </div>  
        </Card>
    </div>
  )
}

export default SideBarMenu