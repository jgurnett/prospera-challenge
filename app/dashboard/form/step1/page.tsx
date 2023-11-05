import { DashboardRoutes } from '@/enums/routes';
import Link from 'next/link';

const Step1 = () => {
  return (
      <div>
      <h1>Step 1</h1>

      <Link href={DashboardRoutes.STEP2}>Next</Link>
    </div>
  );
};

export default Step1;