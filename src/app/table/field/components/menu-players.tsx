import { ThreeDCard } from '@/components/native/card-effect-3d';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import Avatar from "@/assets/images/cards/avatar.svg";
import Avatar2 from "@/assets/images/cards/avatar2.svg";
import Avatar3 from "@/assets/images/cards/avatar3.svg";
import Avatar4 from "@/assets/images/cards/avatar4.svg";
import Avatar5 from "@/assets/images/cards/avatar5.svg";

import React from 'react';
import { CardPerspective } from '@/components/native/card-perspective';

export const MenuPlayers = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const players = [
    { name: "Oman" },
    { name: "Fernando" },
    { name: "Ricardo" },
    { name: "Cleiton" },
    { name: "Carioca" },
  ]

  return (
    <aside>
        <div className="description">Adicione jogadores na partida de hoje.</div>
        {players.map(({ name }) => {
            return (
                <div 
                    key={name} 
                    className="dndnode" 
                    onDragStart={(event) => onDragStart(event, name)} 
                    draggable
                >
                    { name }
                </div>
            )
        })}
        <div className='flex flex-row jsutify-center mt-6 items-center'>
            <AnimatedTooltip 
                items={[
                    {
                        id: 1, 
                        name: "Oman",
                        designation: "Atacante", 
                        image: Avatar
                    },
                    {
                        id: 2, 
                        name: "Cabeção",
                        designation: "Atacante", 
                        image: Avatar2
                    },
                    {
                        id: 3, 
                        name: "Cleiton",
                        designation: "Atacante", 
                        image: Avatar3
                    },
                    {
                        id: 4, 
                        name: "Carioca",
                        designation: "Atacante", 
                        image: Avatar4
                    },
                    {
                        id: 5, 
                        name: "Ricardo",
                        designation: "Atacante", 
                        image: Avatar5
                    }
                ]} 
            />
        </div>
      {/* <ThreeDCard /> */}
      <CardPerspective />
    </aside>
  );
};
