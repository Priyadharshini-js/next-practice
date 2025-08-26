import { NextResponse } from "next/server";

export async function GET() {
  const features = [
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing workflow and tools in minutes, not hours.",
    },
    {
      title: "Advanced Analytics",
      description: "Get detailed insights and analytics to make data-driven decisions for your business.",
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is here to help you succeed, whenever you need us.",
    },
  ];

  return NextResponse.json(features);
}
