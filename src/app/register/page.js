import Image from 'next/image';
import Link from 'next/link';
export default function RegisterPage(){
    return (
        <section>
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            <form>
                <input type="email" placeholder="Email" value=""/>
                <input type="password" placeholder="Password" value=""/>
                <button type='submit'></button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={''} width={24} height={24} />
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?{' '}
                <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div>
            </form>
        </section>
    );
}