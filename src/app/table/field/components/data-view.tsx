"use client"
import React, { useCallback, useRef, useState } from 'react';
import { MenuPlayers } from "./menu-players"
import Image from 'next/image';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  MarkerType,
  ReactFlowProvider,
} from 'reactflow';

import CustomNode from './custom-node';

import 'reactflow/dist/style.css';
import './overview.css';

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

const initialNodes = [
  {
    id: '1',
    type: 'default',
    className: 'circle',
    data: {
      label: (
        <>
          <Image src="https://github.com/omanramalho42.png" alt='avatar' width={36} height={36} className='w-full h-full rounded-full' />
        </>
      ),
    },
    draggable: true,
    selectable: false,
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    type: 'default',
    className: 'circle',
    data: {
      label: (
        <>
          <Image src="https://github.com/omanramalho42.png" alt='avatar' width={36} height={36} className='w-full h-full rounded-full' />
        </>
      ),
    },
    draggable: true,
    selectable: false,
    position: { x: 100, y: 100 },
  },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
];

const DataView = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  let id = 0;
  const getId = () => `dndnode_${id++}`;

  const reactFlowWrapper = useRef<any>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type: 'default',
        className: 'circle',
        position,
        data: {
          label: (
            <>
              <Image src="https://github.com/omanramalho42.png" alt='avatar' width={36} height={36} className='w-full h-full rounded-full' />
            </>
          ),
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );
  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onInit = (reactFlowInstance: any) => console.log('flow loaded:', reactFlowInstance);

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className='flex xl:flex-row flex-column w-full h-full'>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              nodeTypes={nodeTypes}
            >
              <MiniMap 
                style={minimapStyle} 
                zoomable 
                pannable 
              />
              <Controls />
              <Background className='bg-field-game bg-no-repeat bg-contain w-full' color="#aaa" gap={16} />
            </ReactFlow>
          </div>
          <div className=''>
            <MenuPlayers />
          </div>
        </div>

      </ReactFlowProvider>
    </div>

  );
};

export default DataView;