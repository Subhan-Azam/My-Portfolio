// import React from "react";
// import "./ProfessionalSkill.css";

// export default function ProfessionalSkill() {
//   return (
//     <div className="p-6 bg-background text-foreground text-white px-10">
//       <h2 className="text-2xl font-bold -mt-2 mb-6 text-center">
//         Professional Skills
//       </h2>
//       <div className="flex justify-center items-center gap-20 my-0 md:mt-[97px]">
//         <div className="flex flex-col gap-10">
//           <div className="flex flex-col items-center h-[150px]">
//             <div className="relative w-24 h-24 border-8 border-purple-600 rounded-full">
//               <svg className="absolute inset-0" viewBox="0 0 36 36">
//                 <circle
//                   className="text-muted"
//                   strokeWidth="4"
//                   fill="none"
//                   r="16"
//                   cx="18"
//                   cy="18"
//                 />
//                 <circle
//                   className="text-accent"
//                   strokeWidth="4"
//                   stroke-dasharray="95, 100"
//                   fill="none"
//                   r="16"
//                   cx="18"
//                   cy="18"
//                 />
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-lg font-semibold">95%</span>
//               </div>
//             </div>
//             <span className="mt-2 text-[17px] text-muted-foreground">
//               Communication
//             </span>
//           </div>

//           <div className="flex flex-col items-center h-[150px]">
//             <div className="relative w-24 h-24 border-8 border-purple-600 rounded-full">
//               <svg className="absolute inset-0 " viewBox="0 0 36 36">
//                 <circle
//                   className="text-muted"
//                   strokeWidth="4"
//                   fill="none"
//                   r="16"
//                   cx="18"
//                   cy="18"
//                 />
//                 <circle
//                   className="text-accent"
//                   strokeWidth="4"
//                   stroke-dasharray="55, 100"
//                   fill="none"
//                   r="16"
//                   cx="18"
//                   cy="18"
//                 />
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-lg font-semibold">55%</span>
//               </div>
//             </div>
//             <span className="mt-2 text-muted-foreground text-[17px]">
//               Team work
//             </span>
//           </div>
//         </div>

//         <div className="flex flex-col gap-10">
//           <div className="flex flex-col items-center h-[150px]">
//             <div className="relative w-24 h-24 border-8 border-purple-600 rounded-full">
//               <svg className="absolute inset-0" viewBox="0 0 36 36">
//                 <circle
//                   className="text-muted"
//                   strokeWidth="4"
//                   fill="none"
//                   r="16"
//                   cx="18"
//                   cy="18"
//                 />
//                 <circle
//                   className="text-accent"
//                   strokeWidth="4"
//                   stroke-dasharray="86, 100"
//                   fill="none"
//                   r="16"
//                   cx="18"
//                   cy="18"
//                 />
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-lg font-semibold">86%</span>
//               </div>
//             </div>
//             <span className="mt-2 text-muted-foreground text-center text-[17px]">
//               Project Management
//             </span>
//           </div>

//           <div className="flex flex-col items-center h-[150px]">
//             <div className="relative w-24 h-24 border-8 border-purple-600 rounded-full">
//               <svg className="absolute inset-0" viewBox="0 0 36 36">
//                 <circle
//                   className="text-muted"
//                   strokeWidth="4"
//                   fill="none"
//                   r="16"
//                   cx="18"
//                   cy="18"
//                 />
//                 <circle
//                   className="text-accent"
//                   strokeWidth="4"
//                   stroke-dasharray="60, 100"
//                   fill="none"
//                   r="16"
//                   cx="18"
//                   cy="18"
//                 />
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-lg font-semibold">60%</span>
//               </div>
//             </div>
//             <span className="mt-2 text-muted-foreground text-[17px]">
//               Creativity
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import "./ProfessionalSkill.css";

export default function ProfessionalSkill() {
  return (
    <div className="p-6 bg-background text-foreground text-white px-10">
      <h2 className="text-white text-2xl font-bold -mt-2 mb-6 text-center">
        Professional Skills
      </h2>
      <div className="flex justify-center items-center gap-20 my-0 md:mt-[97px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center h-[150px]">
            <div className="relative w-24 h-24">
              <svg className="absolute inset-0" viewBox="0 0 36 36">
                <circle
                  className="circle-bg"
                  strokeWidth="4"
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="circle-progress"
                  strokeWidth="3"
                  style={{ "--progress": "80" }}
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold">80%</span>
              </div>
            </div>
            <span className="mt-2 text-[17px] text-muted-foreground">
              Communication
            </span>
          </div>

          <div className="flex flex-col items-center h-[150px]">
            <div className="relative w-24 h-24">
              <svg className="absolute inset-0 " viewBox="0 0 36 36">
                <circle
                  className="circle-bg"
                  strokeWidth="4"
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="circle-progress"
                  strokeWidth="3"
                  style={{ "--progress": "90" }}
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold">90%</span>
              </div>
            </div>
            <span className="mt-2 text-muted-foreground text-[17px]">
              Teamwork
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center h-[150px]">
            <div className="relative w-24 h-24">
              <svg className="absolute inset-0" viewBox="0 0 36 36">
                <circle
                  className="circle-bg"
                  strokeWidth="4"
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="circle-progress"
                  strokeWidth="3"
                  style={{ "--progress": "86" }}
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold">86%</span>
              </div>
            </div>
            <span className="mt-2 text-muted-foreground text-center text-[17px]">
              Project Management
            </span>
          </div>

          <div className="flex flex-col items-center h-[150px]">
            <div className="relative w-24 h-24">
              <svg className="absolute inset-0" viewBox="0 0 36 36">
                <circle
                  className="circle-bg"
                  strokeWidth="4"
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="circle-progress"
                  strokeWidth="3"
                  style={{ "--progress": "70" }}
                  fill="none"
                  r="16"
                  cx="18"
                  cy="18"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold">70%</span>
              </div>
            </div>
            <span className="mt-2 text-muted-foreground text-[17px]">
              Creativity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
