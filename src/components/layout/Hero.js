import Image from 'next/image';
import Right from '../icons/Right';

export default function Hero() {
    return (
        <section className="hero">
            <div>
                <h1 className="text-4xl font-semibold">
                    Everything <br/>
                    is better <br/> 
                    with a&nbsp; 
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Pizza is the missing piece that makes every day complete, a simply yet delicious joy in life
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
                        Order now 
                        <Right/> 
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 font-semibold">
                        Learn more 
                        <Right/> 
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image 
                    src={'/pizza.png'} 
                    layout= {'fill'}
                    objectFit={'contain'}
                    alt={'pizza'} /> 
            </div>
        </section>
    );
}