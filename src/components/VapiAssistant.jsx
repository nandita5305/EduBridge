


// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mic, MicOff, PhoneOff, Pause, Play, X, Bot } from "lucide-react";
// import { getVapiInstance } from "../lib/vapiClient";

// export default function VapiAssistant() {
//   const vapiRef = useRef(null);
//   const [running, setRunning] = useState(false);
//   const [micOn, setMicOn] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;

//   useEffect(() => {
//     vapiRef.current = getVapiInstance();
//     return () => {
//       if (vapiRef.current) {
//         try {
//           vapiRef.current.stop();
//         } catch (e) {}
//       }
//     };
//   }, []);

//   async function startSession() {
//     if (!vapiRef.current) return;
//     try {
//       if (assistantId) {
//         await vapiRef.current.start(assistantId, {
//           recordingEnabled: false,
//         });
//       } else {
//         await vapiRef.current.start({
//           model: {
//             provider: "openai",
//             model: "gpt-3.5-turbo",
//             messages: [
//               {
//                 role: "system",
//                 content: "You are an assistant that asks short true/false questions.",
//               },
//             ],
//           },
//           voice: {
//             provider: "11labs",
//             voiceId: "burt",
//           },
//         });
//       }
//       setRunning(true);
//     } catch (err) {
//       console.error("Failed to start Vapi session", err);
//     }
//   }

//   async function stopSession() {
//     try {
//       await vapiRef.current?.stop();
//     } catch (err) {
//       console.warn("vapi.stop error", err);
//     }
//     setRunning(false);
//   }

//   const theme = {
//     backdrop: "rgba(0,0,0,0.6)",
//     card: "#1E293B",
//     secondary: "#334155",
//     text: "#FFFFFF",
//     primary: "#3B82F6",
//     danger: "#EF4444",
//   };

//   const openModal = async () => {
//     setIsModalOpen(true);
//     await startSession();
//   };
//   const closeModal = async () => {
//     setIsModalOpen(false);
//     await stopSession();
//   };

//   return (
//     <div
//       className="min-h-screen p-8 flex flex-col items-center"
//       style={{ backgroundColor: "#f0f2f5", fontFamily: "Inter, sans-serif" }}
//     >
//       <header className="w-full max-w-4xl text-center py-8">
//         <h1 className="text-4xl font-extrabold text-gray-800">
//           AI Assistant Dashboard
//         </h1>
//         <p className="text-gray-500 mt-2">
//           Click below to start your AI Voice Agent Call.
//         </p>
//       </header>

//       {/* Trigger Card */}
//       <div
//         className="w-full max-w-xs p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
//         onClick={openModal}
//       >
//         <div
//           className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg"
//           style={{
//             background: "linear-gradient(45deg, #3b82f6, #60a5fa)",
//             color: "#fff",
//           }}
//         >
//           <Bot className="w-8 h-8" />
//         </div>
//         <h3 className="text-xl font-bold text-gray-800">AI Voice Agent</h3>
//         <p className="text-sm text-gray-500 text-center mt-1">
//           Click to initiate AI-assisted call.
//         </p>
//         <button
//           className="mt-4 px-4 py-2 text-sm font-semibold rounded-lg text-white transition duration-200"
//           style={{ backgroundColor: theme.primary }}
//         >
//           Start Call
//         </button>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 p-4"
//               style={{ backgroundColor: theme.backdrop }}
//               onClick={closeModal}
//             />
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-2xl p-6 w-[90%] md:w-[420px] max-h-[90vh]"
//               style={{
//                 backgroundColor: theme.card,
//                 border: `1px solid ${theme.secondary}`,
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div
//                 className="flex justify-between items-center mb-4 border-b pb-3"
//                 style={{ borderColor: theme.secondary }}
//               >
//                 <h2
//                   style={{ color: theme.text }}
//                   className="font-bold text-lg flex items-center gap-2"
//                 >
//                   <Bot className="w-5 h-5" style={{ color: theme.primary }} />
//                   AI Voice Agent Call
//                 </h2>
//                 <button
//                   onClick={closeModal}
//                   className="p-2 rounded-full transition duration-200"
//                   style={{
//                     color: theme.text,
//                     backgroundColor: theme.secondary,
//                   }}
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>

//               {/* Participants */}
//               <div className="grid grid-cols-2 gap-3 mb-6">
//                 <div
//                   className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md"
//                   style={{
//                     backgroundColor: theme.secondary,
//                     border: `2px solid ${theme.primary}`,
//                   }}
//                 >
//                   <div
//                     className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold border-4 mb-2"
//                     style={{
//                       backgroundColor: theme.primary,
//                       color: "#fff",
//                       borderColor: theme.secondary,
//                     }}
//                   >
//                     AI
//                   </div>
//                   <span style={{ color: theme.text }} className="font-semibold">
//                     AI Agent
//                   </span>
//                   <span
//                     className="text-xs"
//                     style={{ color: theme.text, opacity: 0.7 }}
//                   >
//                     Connected
//                   </span>
//                 </div>

//                 <div
//                   className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md"
//                   style={{ backgroundColor: theme.secondary }}
//                 >
//                   <div
//                     className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold border-4 mb-2"
//                     style={{
//                       backgroundColor: theme.primary,
//                       color: "#fff",
//                       borderColor: theme.secondary,
//                     }}
//                   >
//                     D
//                   </div>
//                   <span style={{ color: theme.text }} className="font-semibold">
//                     Disha
//                   </span>
//                   <span
//                     className="text-xs"
//                     style={{ color: theme.text, opacity: 0.7 }}
//                   >
//                     In Meeting
//                   </span>
//                 </div>
//               </div>

//               {/* Controls */}
//               <div
//                 className="flex justify-around items-center pt-4 border-t"
//                 style={{ borderColor: theme.secondary }}
//               >
//                 <button
//                   onClick={() => setIsPaused(!isPaused)}
//                   className="flex flex-col items-center w-20 py-2 rounded-xl font-semibold transition-transform duration-200 transform hover:scale-105 shadow-lg"
//                   style={{ backgroundColor: theme.primary, color: "#fff" }}
//                 >
//                   {isPaused ? (
//                     <Play className="w-5 h-5" />
//                   ) : (
//                     <Pause className="w-5 h-5" />
//                   )}
//                   <span className="text-xs mt-1">
//                     {isPaused ? "Resume" : "Pause"}
//                   </span>
//                 </button>

//                 <button
//                   onClick={() => setMicOn(!micOn)}
//                   className="flex flex-col items-center w-20 py-2 rounded-xl font-semibold transition-transform duration-200 transform hover:scale-105 shadow-lg"
//                   style={{
//                     backgroundColor: micOn ? theme.secondary : theme.danger,
//                     color: micOn ? theme.text : "#fff",
//                   }}
//                 >
//                   {micOn ? (
//                     <Mic className="w-5 h-5" />
//                   ) : (
//                     <MicOff className="w-5 h-5" />
//                   )}
//                   <span className="text-xs mt-1">
//                     {micOn ? "Mic On" : "Mic Off"}
//                   </span>
//                 </button>

//                 <button
//                   onClick={closeModal}
//                   className="flex flex-col items-center w-20 py-2 rounded-xl font-semibold transition-transform duration-200 transform hover:scale-105 shadow-lg"
//                   style={{ backgroundColor: theme.danger, color: "#fff" }}
//                 >
//                   <PhoneOff className="w-5 h-5" />
//                   <span className="text-xs mt-1">End Call</span>
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import { Mic, MicOff, PhoneOff, Pause, Play, X, Bot } from "lucide-react";
import { getVapiInstance } from "../lib/vapiClient";

export default function VapiAssistant() {
  const vapiRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;

  useEffect(() => {
    vapiRef.current = getVapiInstance();
    startSession();
    return () => {
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  async function startSession() {
    if (!vapiRef.current) return;
    try {
      if (assistantId) {
        await vapiRef.current.start(assistantId, {
          recordingEnabled: false,
        });
      } else {
        await vapiRef.current.start({
          model: {
            provider: "openai",
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are an assistant that asks short true/false questions.",
              },
            ],
          },
          voice: {
            provider: "11labs",
            voiceId: "burt",
          },
        });
      }
      setRunning(true);
    } catch (err) {
      console.error("Failed to start Vapi session", err);
    }
  }

  async function stopSession() {
    try {
      await vapiRef.current?.stop();
    } catch (err) {
      console.warn("vapi.stop error", err);
    }
    setRunning(false);
  }

  const theme = {
    card: "#1E293B",
    secondary: "#334155",
    text: "#FFFFFF",
    primary: "#3B82F6",
    danger: "#EF4444",
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundColor: "#0f172a",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        className="rounded-3xl shadow-2xl p-6 w-[90%] md:w-[420px] max-h-[90vh]"
        style={{
          backgroundColor: theme.card,
          border: `1px solid ${theme.secondary}`,
        }}
      >
        {/* Header */}
        <div
          className="flex justify-between items-center mb-4 border-b pb-3"
          style={{ borderColor: theme.secondary }}
        >
          <h2
            style={{ color: theme.text }}
            className="font-bold text-lg flex items-center gap-2"
          >
            <Bot className="w-5 h-5" style={{ color: theme.primary }} />
            AI Voice Agent Call
          </h2>
          <button
            onClick={stopSession}
            className="p-2 rounded-full transition duration-200"
            style={{
              color: theme.text,
              backgroundColor: theme.secondary,
            }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Participants */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div
            className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md"
            style={{
              backgroundColor: theme.secondary,
              border: `2px solid ${theme.primary}`,
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold border-4 mb-2"
              style={{
                backgroundColor: theme.primary,
                color: "#fff",
                borderColor: theme.secondary,
              }}
            >
              AI
            </div>
            <span style={{ color: theme.text }} className="font-semibold">
              AI Agent
            </span>
            <span
              className="text-xs"
              style={{ color: theme.text, opacity: 0.7 }}
            >
              Connected
            </span>
          </div>

          <div
            className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md"
            style={{ backgroundColor: theme.secondary }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold border-4 mb-2"
              style={{
                backgroundColor: theme.primary,
                color: "#fff",
                borderColor: theme.secondary,
              }}
            >
              D
            </div>
            <span style={{ color: theme.text }} className="font-semibold">
              Disha
            </span>
            <span
              className="text-xs"
              style={{ color: theme.text, opacity: 0.7 }}
            >
              In Meeting
            </span>
          </div>
        </div>

        {/* Controls */}
        <div
          className="flex justify-around items-center pt-4 border-t"
          style={{ borderColor: theme.secondary }}
        >
          {/* Pause/Resume */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex flex-col items-center w-20 py-2 rounded-xl font-semibold transition-transform duration-200 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: theme.primary, color: "#fff" }}
          >
            {isPaused ? (
              <Play className="w-5 h-5" />
            ) : (
              <Pause className="w-5 h-5" />
            )}
            <span className="text-xs mt-1">
              {isPaused ? "Resume" : "Pause"}
            </span>
          </button>

          {/* Mic On/Off */}
          <button
            onClick={() => setMicOn(!micOn)}
            className="flex flex-col items-center w-20 py-2 rounded-xl font-semibold transition-transform duration-200 transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: micOn ? theme.secondary : theme.danger,
              color: micOn ? theme.text : "#fff",
            }}
          >
            {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            <span className="text-xs mt-1">{micOn ? "Mic On" : "Mic Off"}</span>
          </button>

          {/* End Call */}
          <button
            onClick={stopSession}
            className="flex flex-col items-center w-20 py-2 rounded-xl font-semibold transition-transform duration-200 transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: theme.danger, color: "#fff" }}
          >
            <PhoneOff className="w-5 h-5" />
            <span className="text-xs mt-1">End Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}
