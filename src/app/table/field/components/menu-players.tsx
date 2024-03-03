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

  return (
    <aside>
        <div className="description">Adicione jogadores na partida de hoje.</div>
        <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'omanzera')} draggable>
            Omanzera
        </div>
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'cabeção')} draggable>
            Cabeção
        </div>
        <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'cleiton')} draggable>
            Cleiton
        </div>
        <div className='flex flex-row jsutify-center items-center'>
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
