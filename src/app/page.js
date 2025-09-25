"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Data from "./mockdata.json";
import { Page_logo, gemstonesValues, imageslist, metalmoney, gemquality, productslist } from "@/utils/constants";
import Carousel from "./components/slider";
import RelatedProducts from "./components/RelatedProducts";
import Head from 'next/head';

export default function Home() {
  const [selectedRingstyle, setSelectedRingstyle] = useState({
    gemstone: Data?.variations?.gemstone?.[0],
    metal: Data?.variations?.metal?.[0],
    carrot_weight: Data?.variations?.carat_weight?.[0],
    quality: Data?.variations?.quality?.[0],
    ring_size: ""
  });

  const priceBreakdown = useMemo(() => {
    const metalRate = metalmoney[selectedRingstyle.metal] || 0;
    const metalWeight = Data.price_breakdown.metal.weight;
    const metalValue = metalRate * metalWeight;

    const gemstonePricePerCarat = gemstonesValues[selectedRingstyle.gemstone] || 0;

    const qualityRate = gemquality[selectedRingstyle.quality] || 0;
    const gemstoneValue = (gemstonePricePerCarat + qualityRate) * selectedRingstyle.carrot_weight;

    const makingCharges = Data.price_breakdown.making_charges;

    const subtotal = metalValue + gemstoneValue + makingCharges;
    const gst = subtotal * 0.03;
    const grandTotal = subtotal + gst;

    return {
      metalRate,
      metalWeight,
      metalValue,
      qualityRate,
      gemstoneValue,
      makingCharges,
      subtotal,
      gst,
      grandTotal,
    };
  }, [selectedRingstyle]);

  const updatedImages = [
    { src: imageslist[selectedRingstyle.gemstone], alt: selectedRingstyle.gemstone },
    { src: imageslist[selectedRingstyle.metal], alt: selectedRingstyle.metal },
    {src: '/images/Frame7.png', alt: 'img7'},
    {src: '/images/Frame8.png', alt: 'img8'},
    {src: '/images/Frame9.png', alt: 'img9'},
  ];

  return (
    <section className="font-sans min-h-screen gap-16">
      <Head>
        <title>Classic Aquamarine and Diamond Ring - Elegant Jewelry</title>
        <meta name="description" content="Buy Classic Aquamarine and Diamond Three Stone Engagement Ring. Customize with gemstone, metal, carat, and size options." />
        <meta name="keywords" content="aquamarine ring, engagement ring, diamond ring, sapphire ring, gold jewelry, customizable ring" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "Classic Aquamarine and Diamond Three Stone Engagement Ring",
          image: [
            '/images/Frame1.png',
            "/images/Frame2.png",
            "/images/Frame3.png",
            "/images/Frame4.png"
          ],
          description: "Elegant three-stone engagement ring with customizable Aquamarine and Diamond gemstones, gold metal, and carat weight.",
          sku: "SR0160AQ",
          brand: {
            "@type": "Brand",
            name: "Angara (Clone)"
          },
          offers: {
            "@type": "Offer",
            url: "https://angaraproject.netlify.app/",
            priceCurrency: "INR",
            price: "237589",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition"
          }
        })
      }} />
      </Head>

      <nav className="flex justify-between items-center w-full p-5 shadow-neutral-200">
        <div style={{ width: "130px", height: "39px", position: "relative" }}>
          <Image
           src={ Page_logo } alt="logo"
           fill style={{ objectFit: "contain" }} />
        </div>
        <div>
          <a href="tel:+91-900-100-1313">&#9742; +91-900-100-1313 </a>
          <span>&#128722;</span>
        </div>
      </nav>
      <main className="flex flex-col gap-8 pt-10 px-5 md:flex-row">
        <section className="md:w-1/2">
          <Carousel images={updatedImages} />
          <div className="mt-4 text-center">
            <span className="font-medium">Selected:</span> {selectedRingstyle.quality} | {selectedRingstyle.gemstone} | {selectedRingstyle.metal} |{" "}
            {selectedRingstyle.carrot_weight} Ct.tw
          </div>
        </section>

        <section className="md:w-1/2 space-y-6">
          <div key={Data?.id}>
            <h2 className="font-medium text-lg">{Data?.title}</h2>
            <div className="flex gap-3"> 
              <span className="flex">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 2l-3.09 8.34L0 12l7.98 6.16L6.8 24 12 19.08 17.2 24l-1.18-5.84L24 12l-8.91-1.66z"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 2l-3.09 8.34L0 12l7.98 6.16L6.8 24 12 19.08 17.2 24l-1.18-5.84L24 12l-8.91-1.66z"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 2l-3.09 8.34L0 12l7.98 6.16L6.8 24 12 19.08 17.2 24l-1.18-5.84L24 12l-8.91-1.66z"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 2l-3.09 8.34L0 12l7.98 6.16L6.8 24 12 19.08 17.2 24l-1.18-5.84L24 12l-8.91-1.66z"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 2l-3.09 8.34L0 12l7.98 6.16L6.8 24 12 19.08 17.2 24l-1.18-5.84L24 12l-8.91-1.66z"/>
              </svg>
              </span>
              <span>({Data?.reviews} Reviews)</span>
            </div>
            
            <h3>
              <span className="text-2xl font-semibold">₹{priceBreakdown.grandTotal.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>{" "}
              <span className="font-light">(MRP incl. of all taxes)</span>
            </h3>
            <span className="text-success">Exclusive Offer: {Data?.exclusive_offer} </span>
          </div>
          <div className="border border-gray-300 p-4">
            <div className="pb-2 font-semibold">Gemstone: {selectedRingstyle.gemstone}</div>
            <div className="flex gap-4 flex-wrap">
              {Data?.variations?.gemstone?.map((g) => (
                <button
                  key={g}
                  className={`text-sm border px-3 py-1 ${
                    selectedRingstyle.gemstone === g ? "border-black font-semibold" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedRingstyle({ ...selectedRingstyle, gemstone: g })}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="border border-gray-300 p-4">
            <div className="pb-2 font-semibold">Total Carrot Weight: {selectedRingstyle.carat_weight} carat</div>
            <div className="flex gap-4 flex-wrap">
              {Data?.variations?.carat_weight?.map((c) => (
                <button
                  key={c}
                  className={`text-sm border px-3 py-1 ${
                    selectedRingstyle.carrot_weight === c ? "border-black font-semibold" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedRingstyle({ ...selectedRingstyle, carrot_weight: c })}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 p-4">
            <div className="pb-2 font-semibold">Metal: {selectedRingstyle.metal}</div>
            <div className="flex gap-4 flex-wrap">
              {Data?.variations?.metal?.map((m) => (
                <button
                  key={m}
                  className={`text-sm border px-3 py-1 ${
                    selectedRingstyle.metal === m ? "border-black font-semibold" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedRingstyle({ ...selectedRingstyle, metal: m })}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 p-4">
            <div className="pb-2 font-semibold">Quality: {selectedRingstyle.quality}</div>
            <div className="flex gap-4 flex-wrap">
              {Data?.variations?.quality?.map((q) => (
                <button
                  key={q}
                  className={`text-sm border px-3 py-1 ${selectedRingstyle.quality === q ? "border-black font-semibold" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedRingstyle({ ...selectedRingstyle, quality: q })}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 p-4">
            <div className="pb-2 flex justify-between items-center font-semibold">
              Select Size: {selectedRingstyle.ring_size || "Not selected"}{" "}
              <a href="#" className="text-blue-600 underline text-sm">
                Size Guide
              </a>
            </div>
            <div className="flex gap-4 flex-wrap">
              {Data?.variations?.ring_size?.map((s) => (
                <button
                  key={s}
                  className={`text-sm border px-3 py-1 ${
                    selectedRingstyle.ring_size === s ? "border-black font-semibold" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedRingstyle({ ...selectedRingstyle, ring_size: s })}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={!selectedRingstyle.ring_size}
            className={`w-full px-4 py-3 text-white ${
              !selectedRingstyle.ring_size ? "bg-gray-400 cursor-not-allowed" : "bg-black"
            }`}
        >
            <span className="font-semibold">
              ₹{priceBreakdown.grandTotal.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </span>{" "}
            <span className="ml-2">ADD TO BAG</span>
          </button>

          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2">Price Breakdown:</h3>
            <table className="w-full text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2">Component</th>
                  <th className="text-center p-2">Rate</th>
                  <th className="text-center p-2">Weight</th>
                  <th className="text-right p-2">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Metal ({selectedRingstyle.metal})</td>
                  <td className="text-center p-2">₹{priceBreakdown.metalRate}</td>
                  <td className="text-center p-2">{priceBreakdown.metalWeight} g</td>
                  <td className="text-right p-2">₹{priceBreakdown.metalValue.toLocaleString("en-IN")}</td>
                </tr>

                <tr>
                  <td className="p-2">Gemstone ({selectedRingstyle.gemstone})</td>
                  <td className="text-center p-2">₹{gemstonesValues[selectedRingstyle.gemstone]}</td>
                  <td className="text-center p-2">{selectedRingstyle.carrot_weight} ct</td>
                  <td className="text-right p-2">₹{priceBreakdown.gemstoneValue.toLocaleString("en-IN")}</td>
                </tr>

                <tr>
                  <td className="p-2">Quality ({selectedRingstyle.quality})</td>
                  <td className="text-center p-2">₹{priceBreakdown.qualityRate}</td>
                  <td className="text-center p-2">{selectedRingstyle.carrot_weight} ct</td>
                  <td className="text-right p-2">₹{(priceBreakdown.qualityRate * selectedRingstyle.carat_weight).toLocaleString("en-IN")}</td>
                </tr>

                <tr>
                  <td className="p-2">Making Charges</td>
                  <td className="text-center p-2">-</td>
                  <td className="text-center p-2">-</td>
                  <td className="text-right p-2">₹{priceBreakdown.makingCharges.toLocaleString("en-IN")}</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2 font-semibold">Subtotal</td>
                  <td colSpan={2}></td>
                  <td className="text-right p-2 font-semibold">
                    ₹{priceBreakdown.subtotal.toLocaleString("en-IN")}
                  </td>
                </tr>

                <tr>
                  <td className="p-2">GST (3%)</td>
                  <td colSpan={2}></td>
                  <td className="text-right p-2">₹{priceBreakdown.gst.toLocaleString("en-IN")}</td>
                </tr>

                <tr className="bg-gray-100 font-bold border-t">
                  <td className="p-2">Grand Total</td>
                  <td colSpan={2}></td>
                  <td className="text-right p-2">
                    ₹{priceBreakdown.grandTotal.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">You May Also Like</h2>
        <RelatedProducts relatedProducts={productslist} />
      </section>
    </section>
  );
}