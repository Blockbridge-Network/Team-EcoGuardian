'use client'
import React from 'react'
import WalletConnector from '../../components/WalletConnector'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <WalletConnector />
      {children}
    </div>
  )
}