// SSG 

import Link from 'next/link'

export default function Home() {
  return (
    <div className="home-section m-5">
      <div className="home-card container grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
        <div className="card bg-iceBlue">
          <div className="card-body">
            <h1 className="font-medium mb-2">Why choose us?</h1>
            <p>Our solutions are battle-tested in real-world environments, giving you confidence from day one.</p>
            <Link href='/post'>
              <button className="mt-3 bg-black text-white py-2 px-4 rounded-lg cursor-pointer">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="card bg-iceBlue">
          <div className="card-body">
            <h1 className="font-semibold text-xl mb-4">
              Built by experts, trusted by thousands
            </h1>
            <p>Our platform has been carefully crafted by industry professionals who understand the challenges you face. We've helped thousands of businesses transform their operations and achieve their goals.</p>
          </div>
        </div>
      </div>
      <div className="home-card container grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
        <div className="card bg-iceBlue">
          <div className="card-body">
            <h1 className="font-medium mb-2">Seamless Integration</h1>
            <p>Connect our platform with your existing tools effortlessly. Enjoy smooth workflows without disrupting your current operations.</p>
            <button className="mt-3 bg-black text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
        </div>
        <div className="card bg-iceBlue">
          <div className="card-body">
            <h1 className="font-semibold text-xl mb-4">
              Data-Driven Insights
            </h1>
            <p>Make smarter decisions with actionable insights and detailed analytics. Turn data into strategies that drive results.</p>
          </div>
        </div>
      </div>
      <div className="home-card container grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card bg-iceBlue">
          <div className="card-body">
            <h1 className="font-medium mb-2">Reliable Support</h1>
            <p>Our dedicated support team is available 24/7 to help you overcome challenges and ensure smooth operations.</p>
            <button className="mt-3 bg-black text-white py-2 px-4 rounded-lg">Contact Us</button>
          </div>
        </div>
        <div className="card bg-iceBlue">
          <div className="card-body">
            <h1 className="font-semibold text-xl mb-4">
              Proven Results
            </h1>
            <p>We’ve helped countless businesses optimize processes, increase efficiency, and achieve measurable growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
