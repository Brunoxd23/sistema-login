import Link from 'next/link';
import { SignOutButton } from './sign-out-button';
import { getServerSession } from 'next-auth';

const Header = async () => {
  const session = await getServerSession();

  return (
    <header className="fixed w-full h-20 flex items-center bg-sky-600 text-slate-50">
      <nav className="w-full flex items-center justify-between m-auto max-w-screen-xl">
        <Link href="/" className='ml-32'>Logo</Link>
        <ul className="flex items-center mr-20 gap-9">
          <li><Link href="/">inicio</Link></li>
          <li><Link href="/public">publica</Link></li>
          <li><Link href="/private">privado</Link></li>
          {session &&
            <li><SignOutButton>sair</SignOutButton></li>
          }
        </ul>
      </nav>
    </header>
  );
};

export { Header };
