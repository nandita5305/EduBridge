import React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { Calendar, Users, Book, Award } from "lucide-react";

// EduBridgeDashboard.jsx
export default function EduBridgeDashboard({ dark }) {
  // Demo data
  const topStats = {
    totalStudents: 4293,
    totalMentors: 324,
    eventCompletion: 75,
    avgAttendance: 85,
  };

  const monthlyProgress = [
    { month: "Jan", value: 52 },
    { month: "Feb", value: 58 },
    { month: "Mar", value: 62 },
    { month: "Apr", value: 68 },
    { month: "May", value: 72 },
    { month: "Jun", value: 76 },
    { month: "Jul", value: 80 },
    { month: "Aug", value: 82 },
  ];

  const courseCompletion = [
    { name: "English", value: 92 },
    { name: "Maths", value: 78 },
    { name: "Geography", value: 64 },
    { name: "Literature", value: 70 },
    { name: "History", value: 84 },
  ];

  const studentRankings = [
    { name: "Esther Howard", course: "A21", change: 24 },
    { name: "Kristin Watson", course: "A21", change: 22 },
    { name: "Guy Hawkins", course: "A21", change: 18 },
    { name: "Jacob Jones", course: "A21", change: 15 },
    { name: "Disha", course: "React", change: 14 },
  ];

  // Blue palette adapted to theme
  const PALETTE = dark
    ? { 
        primary: "#60A5FA", 
        deep: "#1E40AF", 
        soft: "rgba(96,165,250,0.08)", 
        chartGradient1: '#2563EB', 
        chartGradient2: '#1E3A8A',
      }
    : { 
        primary: "#2563EB", 
        deep: "#1E40AF", 
        soft: "rgba(37,99,235,0.06)", 
        chartGradient1: '#3B82F6', 
        chartGradient2: '#60A5FA',
      };

  const COLORS = [PALETTE.primary, "#93C5FD", "#BFDBFE", "#DBEAFE"];

  // Tailwind classes that depend on theme
  const bg = dark ? "bg-slate-900 text-slate-200" : "bg-slate-50 text-slate-800";
  const card = dark ? "bg-slate-800/60 border-slate-700 text-slate-100" : "bg-white border-slate-100 text-slate-800";
  const textPrimary = dark ? "text-slate-100" : "text-slate-900";
  const textSecondary = dark ? "text-slate-400" : "text-slate-600";

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-2xl font-semibold ${textPrimary}`}>
            Hi, Disha
          </h1>
          
          {/* REMOVED THEME TOGGLER - Now using navbar toggler */}
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className={`w-64 rounded-2xl p-6 shadow-sm border ${card} flex-shrink-0`}>
            <div className="flex items-center gap-3 mb-6">
              <div 
                style={{ background: `linear-gradient(135deg, ${PALETTE.chartGradient2}, ${PALETTE.chartGradient1})` }} 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
              >
                D
              </div>
              <div>
                <div className="font-medium">Disha</div>
                <div className="text-xs text-slate-400">High-School Student</div>
              </div>
            </div>

            <nav className="space-y-2 text-sm">
              <div className={`px-3 py-2 rounded-lg transition-colors ${
                dark 
                  ? 'bg-blue-900/30 text-blue-200 border border-blue-800/50' 
                  : 'bg-blue-50 text-blue-700 font-medium border border-blue-100'
              }`}>
                Home Page
              </div>
              <div className={`px-3 py-2 rounded-lg transition-colors hover:${
                dark ? 'bg-slate-700/60' : 'bg-slate-50'
              } cursor-pointer`}>
                Students
              </div>
              <div className={`px-3 py-2 rounded-lg transition-colors hover:${
                dark ? 'bg-slate-700/60' : 'bg-slate-50'
              } cursor-pointer`}>
                Mentors
              </div>
              <div className={`px-3 py-2 rounded-lg transition-colors hover:${
                dark ? 'bg-slate-700/60' : 'bg-slate-50'
              } cursor-pointer`}>
                Events
              </div>
              <div className={`px-3 py-2 rounded-lg transition-colors hover:${
                dark ? 'bg-slate-700/60' : 'bg-slate-50'
              } cursor-pointer`}>
                Reports
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {/* Top stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <StatCard className={card} title="Total Students" value={topStats.totalStudents.toLocaleString()} subtitle="+5% than last year" icon={<Users size={18} />} palette={PALETTE} />
              <StatCard className={card} title="Total Mentors" value={topStats.totalMentors} subtitle="-2.5% than last year" icon={<Book size={18} />} palette={PALETTE} />
              <StatCard className={card} title="Event Completion" value={`${topStats.eventCompletion}%`} subtitle="Active events" icon={<Calendar size={18} />} palette={PALETTE} />
              <StatCard className={card} title="Avg Attendance" value={`${topStats.avgAttendance}%`} subtitle="This month" icon={<Award size={18} />} palette={PALETTE} />
            </div>

            {/* Main charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className={`lg:col-span-2 rounded-2xl p-5 shadow-sm border ${card}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-slate-400">Learning Growth</div>
                    <div className={`text-lg font-medium ${textPrimary}`}>Monthly Progress</div>
                  </div>
                  <div className="text-sm text-slate-400">Weekly</div>
                </div>

                <div style={{ width: "100%", height: 260 }}>
                  <ResponsiveContainer>
                    <AreaChart data={monthlyProgress} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="primaryGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={PALETTE.chartGradient1} stopOpacity={0.28} />
                          <stop offset="95%" stopColor={PALETTE.chartGradient2} stopOpacity={0.03} />
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="month" 
                        stroke={dark ? '#94a3b8' : '#64748b'}
                        tick={{ fill: dark ? '#94a3b8' : '#64748b' }}
                      />
                      <YAxis 
                        stroke={dark ? '#94a3b8' : '#64748b'}
                        tick={{ fill: dark ? '#94a3b8' : '#64748b' }}
                      />
                      <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke={dark ? '#334155' : '#e2e8f0'} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          background: dark ? '#1e293b' : '#fff',
                          border: dark ? '1px solid #334155' : '1px solid #e2e8f0',
                          borderRadius: 8,
                          color: dark ? '#f1f5f9' : '#0f172a'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke={PALETTE.deep} 
                        fillOpacity={1} 
                        fill="url(#primaryGrad)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-slate-400">Last 7 activity</div>
                  <div className="text-sm font-semibold">Overall: 82%</div>
                </div>
              </div>

              <div className={`space-y-6 ${card} p-5 rounded-2xl shadow-sm border`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-slate-400">School Event Calendar</div>
                    <div className="text-sm text-slate-400">Aug 2022</div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-xs text-slate-400">
                    {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                      <div key={d} className="text-center font-medium">{d}</div>
                    ))}
                    {Array.from({length: 35}).map((_,i) => (
                      <div 
                        key={i} 
                        className={`h-8 rounded-md flex items-center justify-center transition-colors ${
                          i===2||i===12||i===17 
                            ? (dark 
                                ? 'bg-blue-900/40 text-blue-200 font-semibold border border-blue-700/30' 
                                : 'bg-blue-50 text-blue-700 font-semibold border border-blue-100'
                              )
                            : (dark ? 'hover:bg-slate-700/40' : 'hover:bg-slate-50')
                        }`}
                      >
                        {i-6>0 && i-6<=31 ? i-6 : ''}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-slate-400">Top 5 in Academic Progress</div>
                    <div className="text-sm text-slate-400">This month</div>
                  </div>

                  <ul className="space-y-3">
                    {studentRankings.map((s, idx) => (
                      <li key={s.name} className="flex items-center gap-3">
                        <div 
                          className="w-9 h-9 rounded-full flex items-center justify-center font-semibold transition-colors"
                          style={{ 
                            background: dark ? '#1e293b' : '#f1f5f9', 
                            color: PALETTE.primary 
                          }}
                        >
                          {s.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${textPrimary}`}>{s.name}</div>
                          <div className="text-xs text-slate-400">Student {s.course}</div>
                        </div>
                        <div className="text-sm text-green-400 font-semibold">+{s.change}%</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Lower row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className={`lg:col-span-2 rounded-2xl p-5 shadow-sm border ${card}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-slate-400">Grade by Months</div>
                  <div className="text-sm text-slate-400">School Average</div>
                </div>

                <div style={{ width: '100%', height: 200 }}>
                  <ResponsiveContainer>
                    <LineChart data={monthlyProgress}>
                      <XAxis 
                        dataKey="month" 
                        stroke={dark ? '#94a3b8' : '#64748b'}
                        tick={{ fill: dark ? '#94a3b8' : '#64748b' }}
                      />
                      <YAxis 
                        stroke={dark ? '#94a3b8' : '#64748b'}
                        tick={{ fill: dark ? '#94a3b8' : '#64748b' }}
                      />
                      <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke={dark ? '#334155' : '#e2e8f0'} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          background: dark ? '#1e293b' : '#fff',
                          border: dark ? '1px solid #334155' : '1px solid #e2e8f0',
                          borderRadius: 8,
                          color: dark ? '#f1f5f9' : '#0f172a'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={PALETTE.deep} 
                        strokeWidth={2} 
                        dot={false} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-3 text-sm text-slate-400">
                  Latest: <span className={`font-semibold ${textPrimary}`}>78.4</span>
                </div>
              </div>

              <div className={`rounded-2xl p-5 shadow-sm border ${card}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-slate-400">Grade by Subject</div>
                  <div className="text-sm text-slate-400">%</div>
                </div>

                <div style={{ width: '100%', height: 200 }}>
                  <ResponsiveContainer>
                    <BarChart data={courseCompletion} layout="vertical">
                      <XAxis type="number" domain={[0,100]} hide />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        width={100} 
                        tick={{ fill: dark ? '#c7d2fe' : '#475569' }} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          background: dark ? '#1e293b' : '#fff',
                          border: dark ? '1px solid #334155' : '1px solid #e2e8f0',
                          borderRadius: 8,
                          color: dark ? '#f1f5f9' : '#0f172a'
                        }}
                      />
                      <Bar dataKey="value" radius={[8,8,8,8]}>
                        {courseCompletion.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-3 text-xs text-slate-400">Focus Areas: Algorithms & React</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon, palette, className = '' }) {
  return (
    <div className={`${className} rounded-2xl p-4 flex items-center justify-between border transition-colors`}>
      <div>
        <div className="text-xs text-slate-400">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-xs text-slate-400 mt-1">{subtitle}</div>
      </div>
      <div className="flex items-center gap-3">
        <div 
          style={{ background: `linear-gradient(135deg, ${palette.chartGradient1}, ${palette.chartGradient2})` }} 
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
        >
          {icon}
        </div>
      </div>
    </div>
  );
}