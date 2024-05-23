import { Metadata } from 'next';
import  { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "Pontis - Mint",
  };
const MintPageLayout = ({children}:{children:ReactNode}) => {
  return (
    <>
    {children}
    </>
  )
}

export default MintPageLayout