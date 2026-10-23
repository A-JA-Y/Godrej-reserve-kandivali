// const checkItems = [
//   "Near Pari Chowk, Greater Noida",
//   "2 min walk to Delta 1 Metro Station (Aqua Line)",
//   "20 mins drive to Noida International Airport",
//   "15 mins drive to Formula 1 Track",
//   "1 hour drive to Delhi IGI Airport",
//   "Direct access to Yamuna Expressway",
//   "Seamless connectivity to Noida–Greater Noida Expressway",
//   "Well connected via DND & FNG Expressway",
// ];

// export default function LocationAdvantages() {
//   return (
//     <section className="w-full bg-white py-16 px-6" id="location">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Label */}
//         <p
//           className="text-center text-xs font-bold uppercase mb-4"
//           style={{ color: "#c8922a", letterSpacing: "0.2em" }}
//         >
//           Location & Connectivity
//         </p>

//         {/* Heading */}
//         <h2
//           className="text-center font-bold text-gray-900 mb-14"
//           style={{
//             fontFamily: "Georgia, serif",
//             fontSize: "2.4rem",
//             lineHeight: "1.2",
//           }}
//         >
//           Prime Location in Greater Noida with Excellent Connectivity
//         </h2>

//         {/* Content */}
//         <div className="max-w-lg">
          
//           {/* Sub heading */}
//           <h3
//             className="font-bold text-gray-900 mb-3"
//             style={{ fontSize: "1rem" }}
//           >
//             Strategic Connectivity
//           </h3>

//           {/* Description */}
//           <p
//             className="text-gray-600 leading-relaxed mb-8"
//             style={{ fontSize: "0.9rem" }}
//           >
//             Located in Greater Noida near Pari Chowk, the project enjoys
//             seamless connectivity to Delhi and other NCR regions. With easy
//             access to major expressways, metro connectivity, and upcoming
//             infrastructure developments, it offers strong future growth
//             potential and everyday convenience.
//           </p>

//           {/* Checklist */}
//           <ul className="space-y-4">
//             {checkItems.map((item, i) => (
//               <li key={i} className="flex items-center gap-3">
                
//                 {/* Check Icon */}
//                 <svg
//                   width="18"
//                   height="14"
//                   viewBox="0 0 18 14"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="flex-shrink-0"
//                 >
//                   <path
//                     d="M1.5 7L6.5 12L16.5 1.5"
//                     stroke="#c8922a"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>

//                 <span
//                   className="text-gray-800"
//                   style={{ fontSize: "0.9rem" }}
//                 >
//                   {item}
//                 </span>
//               </li>
//             ))}
//           </ul>

//         </div>
//       </div>
//     </section>
//   );
// }


const checkItems = [
  "Near Pari Chowk, Greater Noida",
  "2 min walk to Delta 1 Metro Station (Aqua Line)",
  "20 mins drive to Noida International Airport",
  "15 mins drive to Formula 1 Track",
  "1 hour drive to Delhi IGI Airport",
  "Direct access to Yamuna Expressway",
  "Seamless connectivity to Noida–Greater Noida Expressway",
  "Well connected via DND & FNG Expressway",
];

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 px-6" id="location">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
          Location & Connectivity
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-14 text-3xl md:text-4xl leading-tight">
          Prime Location in Greater Noida with Excellent Connectivity
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-lg">

            <h3 className="font-bold text-gray-900 mb-3 text-base">
              Strategic Connectivity
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Located in Greater Noida near Pari Chowk, the project enjoys
              seamless connectivity to Delhi and other NCR regions. With easy
              access to major expressways, metro connectivity, and upcoming
              infrastructure developments, it offers strong future growth
              potential and everyday convenience.
            </p>

            <ul className="space-y-4">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  
                  {/* Check Icon */}
                  <span className="text-[#c8922a] mt-1">
                    ✓
                  </span>

                  <span className="text-gray-800 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: MAP */}
          <div className="flex-1 w-full">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
              <iframe
                src="https://maps.google.com/maps?q&cid=5478519917625773787&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Small CTA */}
            <a
              href="https://maps.google.com/?cid=5478519917625773787"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
            >
              View on Google Maps →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}