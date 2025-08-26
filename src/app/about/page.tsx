// SSR page with ISR (revalidate)

import Link from 'next/link'

export const revalidate = 30;

type User = {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: number,
        coordinates: {
            lat: number,
            lng: number
        },
        country: string
    },
};


const About = async () => {
    const res = await fetch('https://dummyjson.com/users', {
        next: { revalidate: 30 },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    const data = await res.json();


    return (
        <>
            <div className="about-section m-5">
                <div className="text-center mb-5">
                    <h1 className="font-semibold text-xl mb-4">Our customers</h1>
                    <p>Meet the people who trust us — real stories, real results.</p>
                </div>
                <div className="features-card container grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.users.map((user: User) => (
                        <div className="card" key={user.id}>
                            <div className="card-body">
                                <h6>{user.firstName} {user.lastName} {user.maidenName}</h6>
                                <p>{user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}</p>
                                <Link href={`/about/${user.id}`} className='cursor-pointer text-blue-600'>Read More...</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default About