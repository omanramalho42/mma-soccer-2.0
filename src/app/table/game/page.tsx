"use client"
import React from 'react'
import { ReactFlowProvider } from 'reactflow'
import TableFlow from './components/table-flow'

export default function page() {
  return (
    <ReactFlowProvider>
        <TableFlow />
    </ReactFlowProvider>
  )
}