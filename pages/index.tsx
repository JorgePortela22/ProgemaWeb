import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
  <div className = "bg-gray-500" >
    

     <p> PAGINA DE INDEX </p>
     <Link href = "/admin/usuarios">     
     <a className = "cursor-pointer"> IR A USUARIOS</a>
     </Link>
     </div>
  );
};

export default Home;
