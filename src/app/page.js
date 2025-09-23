"use client";
import { useState } from "react";
import Image from "next/image";
import Data from "./mockdata.json";
import { Page_logo, imageslist, imageslist2 } from "@/utils/constants";
import Carousel from "./components/slider";
import RelatedProducts from "./components/RelatedProducts";

export default function Home() {
  const [selectedRingstyle, setSelectedRingstyle] = useState({
    gemstone: Data?.variations?.gemstone?.[0],
    metal: Data?.variations?.metal?.[0],
    carrot_weight: Data?.variations?.carat_weight?.[0],
    quality: Data?.variations?.quality?.[0],
    size: ""
  });

  return (
    <section className="font-sans min-h-screen gap-16">
      <nav className="flex justify-between items-center w-full sm:p-5 shadow-neutral-200">
        <div style={{ width: "130px", height: "39px", position: "relative" }}>
        <Image
          src={ Page_logo } alt="logo"
          fill  style={{ objectFit: "contain" }}
        />
      </div>
        <div>
          <a href="tel:+91-900-100-1313">&#9742; +91-900-100-1313 </a>
          <span>&#128722;</span>
        </div>
      </nav>
      <main className="flex sm:p-5">
        <section className="w-1/2">
        <div>
          <Carousel images={imageslist}/>
        <div>Selected: {selectedRingstyle.quality} | {selectedRingstyle.gemstone} | {selectedRingstyle.metal} | {selectedRingstyle.carrot_weight} Ct.tw </div>
      </div>
        </section>
        <section>
        <div key={Data?.id}>
          <h2 className="font-medium text-lg">{Data?.title}</h2>
          <span>{Data?.reviews}</span>
          <h3><span className="text-2xl font-semibold">₹{Data?.base_price}</span> <span className="font-light">(MRP incl. of all taxes)</span></h3>
          <span className="text-success">Exclusive Offer: {Data?.exclusive_offer} </span>
        </div>
        <div>
          <div className="border-solid border-gray-300 border-1 p-4">
            <div className="pb-2">Gemstone: {selectedRingstyle.gemstone}</div>
            <div className="flex gap-4">
              {Data?.variations?.gemstone?.map((g) => (
                <span className={`text-sm border-1 px-3 ${selectedRingstyle?.gemstone === g ? "border-black" : "border-gray-300"}`} onClick={() => setSelectedRingstyle({...selectedRingstyle, gemstone: g})} key={g}>{g }  </span>
              ))}
            </div>
          </div>
          <div className="border-solid border-gray-300 border-1 p-4">
            <div className="pb-2">Total Carrot Weight: {selectedRingstyle.carrot_weight} carat</div>
            <div className="flex gap-4">
              {Data?.variations?.carat_weight?.map((c) => (
                <span className={`text-sm border-1 px-3 ${selectedRingstyle?.carrot_weight === c ? "border-black" : "border-gray-300"}`} onClick={() => setSelectedRingstyle({ ...selectedRingstyle, carrot_weight: c})} key={c}>{c} </span>
              ))}
            </div>
          </div>
          <div className="border-solid border-gray-300 border-1 p-4">
            <div className="pb-2">Metal: {selectedRingstyle.metal}</div>
            <div className="flex gap-4">
            {Data?.variations?.metal?.map((m) => (
              <span className={`text-sm border-1 px-3 ${selectedRingstyle?.metal === m ? "border-black" : "border-gray-300"}`} onClick={() => setSelectedRingstyle({ ...selectedRingstyle, metal: m })} key={m}>{m }  </span>
            ))}
            </div>
          </div>

          <div className="border-solid border-gray-300 border-1 p-4">
            <div className="pb-2">Quality: {selectedRingstyle.quality}</div>
            <div className="flex gap-4">{Data?.variations?.quality?.map((q) => {
              return <span className={`text-sm border px-3 ${selectedRingstyle?.quality === q ? "border-black" : "border-gray-300"}`} onClick={() => setSelectedRingstyle({ ...selectedRingstyle, quality: q })} key={q}>{q}</span>
            })}
            </div>
          </div>

          <div className="border-solid border-gray-300 border-1 p-4">
            <div className="pb-2 flex justify-between">Select Size: {selectedRingstyle?.size === "" ? "Not selected" : sele}       <span>Size Guide</span></div>
            <div className="flex gap-4">
              {Data?.variations?.ring_size?.map((s) => (
                <span className={`text-sm border-1 p-3 ${selectedRingstyle?.ring_size === s ? "border-black" : "border-gray-200"}`} onClick={() => setSelectedRingstyle({ ...selectedRingstyle, ring_size: s})} key={s}>{s }  </span>
              ))}
              </div>
          </div>
          <button className="px-4 bg-black backdrop-grayscale-75 text-amber-50"><span className="font-semibold">₹{(new Intl.NumberFormat('en-IN').format(Data?.price_breakdown?.grand_total))} </span> <span>ADD TO BAG</span></button>
        </div>
        <div>
          Price Breakdown:

          <table className="border-1 border-gray-300">            
            <tbody>
              <tr>
                <th className="w-24 text-left bg-gray-100 p-5">Component</th>
                <th className="w-24 bg-gray-100 p-5">Rate</th>
                <th className="w-24 bg-gray-100 p-5">Weight</th>
                <th className="w-24 text-right bg-gray-100 p-5">Value</th>
              </tr>
              <tr><td> METALS</td></tr>
                {[Data.price_breakdown.metal].map((j) => {
                  return <tr key={j.rate}>
                    <td className="w-24"></td>
                    <td className="w-24 text-center">₹{j.rate}</td>
                    <td className="w-24 text-center">{j.weight} g</td>
                    <td className="w-24 text-right">₹{j.value}</td>
                  </tr>
              })}
              
              <tr><td>STONES</td></tr>
              {Data?.price_breakdown?.stones?.map((stone) => {
                return <tr key={stone.type}>
                  <td className="w-24">{stone.type}</td>
                  <td className="w-24 text-center">-</td>
                  <td className="w-24 text-center">{stone.carat} ct.w</td>
                  <td className="w-24 text-right">₹{stone.value}</td>
                </tr>
              })}

              <tr>
                <td className="w-24"> MAKING CHARGES</td>
                <td className="w-24 text-center">-</td>
                <td className="w-24 text-center">-</td>
                <td className="w-24 text-right">₹{Data?.price_breakdown.making_charges}</td>
              </tr>
              <tr>
                <td className="w-24">SUBTOTAL</td>
                <td className="w-24 text-center">-</td>
                <td className="w-24 text-center">-</td>
                <td className="w-24 text-right">₹{Data?.price_breakdown?.subtotal}</td>
              </tr>
              <tr>
                <td className="w-24">GST</td>
                <td className="w-24 text-center">-</td>
                <td className="w-24 text-center">-</td>
                <td className="w-24 text-right">₹{Data?.price_breakdown?.gst}</td>
              </tr>
              <tr>
                <td className="w-24">GRAND TOTAL <span>(MRP Incl. of all taxes)</span></td>
                <td className="w-24 text-center">-</td>
                <td className="w-24 text-center">-</td>
                <td className="w-24 text-right">₹{Data?.price_breakdown?.grand_total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </section>
      </main>
      
      <section>
        <h2> You May Also Like</h2>
        <RelatedProducts images={imageslist2} />
      </section>
    </section>
  );
}
