```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function MyComponent({children}) {
  const session = await unstable_getServerSession(req, res, authOptions);
  console.log(session);
  return (
    <div>
      {children}
    </div>
  );
}
```