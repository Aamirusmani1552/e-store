import React from 'react'
import { TypographyH2, TypographyH3, TypographyLarge, TypographyMutedH3 } from './Typography'
import { InstagramIcon } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Footer: React.FC<Props> = (props): React.ReactElement => {
    return (
        <footer className='py-10 flex justify-between flex-col md:flex-row'>
            <div className='flex gap-4 items-center'>
                <TypographyH3>OceanMart</TypographyH3>
                <TypographyMutedH3>|&nbsp;&nbsp;&nbsp;2023</TypographyMutedH3>
            </div>
            <div className='flex gap-4 items-center'>
                <TypographyLarge>Follow Us On | </TypographyLarge>
                <div>
                    <Link target={"_blank"} href={"https://instagram.com/oceanmart_acceseries?igshid=MzRIODBiNWFIZA=="}>
                        <InstagramIcon />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer