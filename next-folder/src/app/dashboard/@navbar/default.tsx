"use client"
import useUser from '@/hooks/authentication/use-user';
import React from 'react'
import Avatar from './components/avatar';
import HeaderMenu from './components/menu';

export default function Navbar() {
    const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-b-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-between gap-x-4 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <Avatar />
        <HeaderMenu />
      </div>
    </div>
  )
}
