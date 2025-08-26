export const revalidate = 30;

type Details = {
    image: string,
    birthDate: string,
    email: string,
    gender: string,
    age: number,
    bloodGroup: string
}

interface UserProps {
   params: Promise<{ id: string }>;
}

export default async function AboutDetail({ params }: UserProps) {
     const { id } = await params;
    const res = await fetch(`https://dummyjson.com/users/${id}`, {
        next: { revalidate: 30 },
    })
    if (!res.ok) {
        throw new Error("Failed to fetch users")
    }
    const details: Details = await res.json()

    return (
        <>
            <div className="about-detail-card container flex flex-col sm:flex-row gap-4 m-5">
                <div className="card">
                    <div className="card-body">
                        <img src={details.image} alt="user image" />
                        <p>{details.birthDate}</p>
                        <p>{details.email}</p>
                        <p>{details.gender}</p>
                        <p>{details.age}</p>
                        <p>{details.bloodGroup}</p>
                    </div>
                </div>
            </div>
        </>
    )
}