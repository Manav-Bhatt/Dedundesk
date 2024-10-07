import { CurrencyComboBox } from '@/components/CurrencyComboBox';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
    const user= await currentUser();
    if(!user){
        redirect("/sign-in");
    }

  return (
    <div className="flex max-w-2xl flex-col items-center justify-between gap-4 p-8 text-lg" style={{ width: '150%' }}>
        <div>
        <CardTitle className="text-center" style={{ fontSize: '3rem' }}>
    Welcome, <span className="m1-2 font-bold">{user.firstName}</span>
</CardTitle>
        <h2 className="mt-4 text-center text-base text-muted-foreground" style={{ fontSize: '1.5rem' }}>
        Let&apos;s get started by setting up your currency
        </h2>

        <h3 className="mt-2 text-center text-sm text-muted-foreground" style={{ fontSize: '1rem' }}>
            You can change these settings at any time
        </h3>
        </div>
        <Separator />
        <Card className="w-full">
        <CardHeader>
        <CardTitle>
        Currency</CardTitle>
        <CardDescription style={{ fontSize: '1rem' }}>
            Set your default currency for transactions</CardDescription></CardHeader>
            <CardContent>
                <CurrencyComboBox/>

            </CardContent>
        </Card>
        <Separator/>
        <Button className="w-full" asChild>
            <Link href={"/"} style={{ fontSize: '1rem' }}> I&apos;m done! Take me to the dashboard</Link>
        </Button>
        <div >
        <Logo/>
        </div>
    </div>
  );
}

export default page