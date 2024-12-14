import { retrieveData, retrieveDataById } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Iphone 15",
    price: 18000000,
    image:
      "https://www.hellostore.id/cdn/shop/files/iPhone15-Blue_01.jpg?v=1697071979&width=1946",
  },
  {
    id: 2,
    title: "Google pixel 6 pro",
    price: 5000000,
    image:
      "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FGoogle_Pixel_6_Pro_2d995cebfd.jpg&w=3840&q=75",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    price: 2000000,
    image:
      "https://images.samsung.com/id/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg?imbypass=true",
  },
  {
    id: 4,
    title: "Google pixel 6 pro",
    price: 5000000,
    image:
      "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FGoogle_Pixel_6_Pro_2d995cebfd.jpg&w=3840&q=75",
  },
  {
    id: 5,
    title: "Iphone 15",
    price: 18000000,
    image:
      "https://www.hellostore.id/cdn/shop/files/iPhone15-Blue_01.jpg?v=1697071979&width=1946",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }

    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }
  const products = await retrieveData("products");
  return NextResponse.json({ status: 200, message: "Success", data: products });
}
