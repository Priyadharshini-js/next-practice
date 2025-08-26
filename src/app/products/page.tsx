
type Products = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
}

export default async function Products() {
    const res = await fetch("https://dummyjson.com/products",
        { next: { revalidate: 30 } }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch products")
    }

    const data = await res.json();
    return (
        <>
            <div className="about-section m-5">
                <div className="text-center mb-5">
                    <h1 className="font-semibold text-xl mb-4">Our products</h1>
                </div>
                <div className="features-card container grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.products.map((item: Products) => (
                        <div className="card" key={item.id}>
                                <div className="card-body">
                                    <h6>{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}