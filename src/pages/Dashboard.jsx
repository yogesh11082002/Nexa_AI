// import React, { useEffect, useState } from "react";
// import { dummyCreationData } from "../assets/assets";
// import { Gem, Sparkles } from "lucide-react";
// import { Protect } from "@clerk/clerk-react";
// import CreationItem from "../components/CreationItem";

// const Dashboard = () => {
//   const [creations, setCreations] = useState([]);

//   const getDashboardData = async () => {
//     setCreations(dummyCreationData);
//   };

//   useEffect(() => {
//     getDashboardData();
//   }, []);

//   return (
//     <div className="h-full overflow-y-scroll p-6">
//       {/* Summary Cards */}
//       <div className="flex justify-start gap-4 flex-wrap">
//         {/* Total Creations */}
//         <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
//           <div className="text-slate-600">
//             <p className="text-sm">Total Creations</p>
//             <h2 className="font-semibold text-xl">{creations.length}</h2>
//           </div>
//           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center">
//             <Sparkles className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Active Plan */}
//         <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
//           <div className="text-slate-600">
//             <p className="text-sm">Active Plan</p>
//             <h2 className="font-semibold text-xl">
//               <Protect plan="premium" fallback="Free">
//                 Premium
//               </Protect>
//             </h2>
//           </div>
//           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center">
//             <Gem className="w-5 h-5" />
//           </div>
//         </div>
//       </div>

//       {/* Recent Creations */}
//       <div className="space-y-3 mt-6">
//         <p className="mb-4 text-lg font-medium">Recent Creations</p>
//         {creations.map((item, index) => (
//           <CreationItem key={item._id || index} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Gem, Sparkles } from "lucide-react";
import { useAuth } from "@clerk/clerk-react"; // ✅ to fetch Clerk JWT
import CreationItem from "../components/CreationItem";

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getToken } = useAuth(); // ✅ Clerk token helper
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch dashboard creations
  const getDashboardData = async () => {
    setLoading(true);
    try {
      const token = await getToken();
      const res = await axios.get(`${API_URL}/api/user/creations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setCreations(res.data.creations || []);
      } else {
        console.error("Failed to fetch creations:", res.data.error);
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      {/* Summary Cards */}
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creations */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="font-semibold text-xl">
              {loading ? "…" : creations.length}
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Active Plan */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="font-semibold text-xl">
              {/* Clerk subscription plan (just showing Premium for now) */}
              Premium
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center">
            <Gem className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className="space-y-3 mt-6">
        <p className="mb-4 text-lg font-medium">Recent Creations</p>

        {loading ? (
          <p className="text-gray-400">Loading creations...</p>
        ) : creations.length > 0 ? (
          creations.map((item, index) => (
            <CreationItem key={item._id || index} item={item} />
          ))
        ) : (
          <p className="text-gray-400">No creations found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
