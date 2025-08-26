"use client" //CSR page
import { useEffect, useState } from "react";

type Feature = {
    title: string;
    description: string;
};

const Features = () => {

    const [features, setFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        fetch("/api/features")
            .then((res) => res.json())
            .then((data) => setFeatures(data))
            .catch((err) => console.error(err));
    }, []);

    console.log(features)
    return (
        <>
            <div className="features-section m-5">
                <div className="text-center mb-5">
                    <h1 className="font-semibold text-xl mb-4">Everything you need to succeed</h1>
                    <p>Powerful features designed to help you build, grow, and scale your business with confidence.</p>
                </div>
                <div className="features-card container flex flex-col sm:flex-row gap-4">
                    {features.map((items) => (
                        <div className="card" key={items.title}>
                            <div className="card-body">
                                <h6>{items.title}</h6>
                                <p>{items.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Features