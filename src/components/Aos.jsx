"use client"

import { useEffect } from 'react'
import AOS from "aos";


export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    once: false,
    });
  }, [])

  return null
}