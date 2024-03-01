import Image from 'next/image';
export default function MenuItem() {
    return (
        <>
            <div>
                <Image src={'/pizza.png'} width={300} height={200} alt={'pizza'} />
                <h4>Pizza</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className="mt-4 bg-primary items-center text-white px-8 py-2 rounded-full">Add to cart $12</button>
            </div>
        </>
    );
}