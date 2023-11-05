"use client"
import { DashboardRoutes } from '@/enums/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Form() {
  return (
      <div>
          Lets start the form!
          <br/>
          <Link href={DashboardRoutes.STEP1}>Next</Link>
    </div>
  );
};