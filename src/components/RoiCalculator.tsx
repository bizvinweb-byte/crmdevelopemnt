"use client";

import { useState } from "react";
import { Calculator, ArrowRight, ShieldAlert } from "lucide-react";

export default function RoiCalculator() {
  const [users, setUsers] = useState(25);
  const [currentToolCostPerUser, setCurrentToolCostPerUser] = useState(75);
  const [hoursSavedPerRepWeekly, setHoursSavedPerRepWeekly] = useState(5);

  // Calculations
  const yearlySaaSCost = users * currentToolCostPerUser * 12;
  const threeYearSaaSCost = yearlySaaSCost * 3;
  
  // Approximate Custom CRM investment (one-time)
  const estimatedCustomCrmCost = Math.max(6000, users * 280);
  const estimatedAnnualMaintenance = estimatedCustomCrmCost * 0.12;
  const threeYearCustomCost = estimatedCustomCrmCost + (estimatedAnnualMaintenance * 2);

  // Net 3-Year Savings
  const netSavings3Years = Math.max(0, threeYearSaaSCost - threeYearCustomCost);
  const annualHoursSaved = users * hoursSavedPerRepWeekly * 50;

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>Interactive Financial Analyzer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25] max-w-4xl mx-auto">
            <span className="block sm:whitespace-nowrap">Custom CRM vs. Commercial SaaS</span>
            <span className="inline-block whitespace-nowrap bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent mt-0.5 sm:mt-1">
              ROI Calculator
            </span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Commercial CRMs charge you per user, per month forever. Calculate how much your enterprise saves by building a dedicated, fully owned CRM on{" "}
            <strong className="text-slate-900 font-semibold">crmdevelopment.in</strong>.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="team-users" className="text-sm font-medium text-slate-300">
                    Team Size / CRM Users
                  </label>
                  <span className="text-xl font-bold text-[#ff8843] font-mono">
                    {users} Users
                  </span>
                </div>
                <input
                  id="team-users"
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#ff6b1e]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>5 Users (Startup)</span>
                  <span>50 Users (Growth)</span>
                  <span>250+ Users (Enterprise)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="saas-cost" className="text-sm font-medium text-slate-300">
                    Current SaaS Subscription Cost / User / Month
                  </label>
                  <span className="text-xl font-bold text-emerald-400 font-mono">
                    ${currentToolCostPerUser} / mo
                  </span>
                </div>
                <input
                  id="saas-cost"
                  type="range"
                  min="25"
                  max="250"
                  step="5"
                  value={currentToolCostPerUser}
                  onChange={(e) => setCurrentToolCostPerUser(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$25 (Basic CRM)</span>
                  <span>$75 (HubSpot Pro)</span>
                  <span>$150+ (Salesforce Enterprise)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="hours-saved" className="text-sm font-medium text-slate-300">
                    Est. Hours Saved / Rep / Week through Custom Automation
                  </label>
                  <span className="text-xl font-bold text-amber-400 font-mono">
                    {hoursSavedPerRepWeekly} hrs / wk
                  </span>
                </div>
                <input
                  id="hours-saved"
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={hoursSavedPerRepWeekly}
                  onChange={(e) => setHoursSavedPerRepWeekly(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>1 hr (Minor)</span>
                  <span>5 hrs (Avg. workflow automation)</span>
                  <span>15 hrs (Deep AI sync)</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#ff8843] flex-shrink-0 mt-0.5" />
                <span>
                  Unlike SaaS providers who hike subscription prices by 9-15% annually, custom CRM development gives your organization permanent intellectual property with no license renewal threats.
                </span>
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-850 p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Estimated 3-Year Net Savings
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#ff8843] font-mono tracking-tight">
                  ${netSavings3Years.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Compared to recurring SaaS subscriptions
                </p>

                <div className="mt-6 space-y-3 pt-4 border-t border-slate-700/60 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>3-Year Commercial SaaS Cost:</span>
                    <span className="font-bold text-rose-400">${threeYearSaaSCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>3-Year Custom CRM TCO:</span>
                    <span className="font-bold text-emerald-400">${threeYearCustomCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Annual Team Productivity Unlocked:</span>
                    <span className="font-bold text-amber-300">{annualHoursSaved.toLocaleString()} hours</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-all shadow-lg shadow-[#ff6b1e]/30"
                >
                  <span>Lock in This Architecture & Cost</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
