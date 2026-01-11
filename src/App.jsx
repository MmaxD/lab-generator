import React, { useState } from 'react';
import { Printer, FileText, User, Hash, Users, Calendar, GraduationCap, Layout } from 'lucide-react';

/**
  * Lab Report Cover Generator
* * Formatting Specifications:
* - Border: 1.2cm (12mm) from all edges.
* - Main Topic: 60pt font size, centered vertically between top border and details, underlined, uppercase.
* - Personal Details: 20pt font size, bottom-right corner, left-aligned within block, underlined, uppercase.
* - Font: Clean Sans-Serif.
*/

const App = () => {
const [data, setData] = useState({
title: 'LAB REPORT',
name: 'FERNANDO A.B.C.',
index: 'E/22/001',
group: 'GROUP A0',
semester: 'SEMESTER 00',
date: '2026-01-01',
font: 'Times New Roman'
});

const handlePrint = () => {
window.print();
};

const handleChange = (e) => {
setData({ ...data, [e.target.name]: e.target.value });
};

const formatDate = (dateStr) => {
if (!dateStr) return '';
const [year, month, day] = dateStr.split('-');
return `${day}/${month}/${year}`;
};

return (
<div className="bg-slate-100 flex flex-col md:flex-row justify-items-center bg-amber-500 w-full">
{/* Sidebar - Control Panel */}
<div className="w-full md:w-100 bg-white border-r border-slate-200 p-6 overflow-y-auto print:hidden shadow-xl z-10">
<div className="flex items-center gap-2 mb-6 border-b pb-4">
<div className="bg-slate-900 p-2 rounded-lg">
<Layout className="text-white w-5 h-5" />
</div>
<h1 className="text-lg font-bold text-slate-800 tracking-tight">Report Generator</h1>
</div>



<div className="space-y-4">
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-2">
<FileText size={12} /> Experiment Topic
</label>
<textarea
name="title"
value={data.title}
onChange={handleChange}
rows="3"
className="w-full p-2 text-sm uppercase rounded outline-none transition-all border border-slate-300 text-slate-900 bg-white focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:bg-slate-950 dark:focus:ring-slate-300"
placeholder="ENTER TOPIC"
/>
</div>



<div className="pt-2 border-t border-slate-100">
<label className="block text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-2">
<User size={12} /> Full Name
</label>
<input
type="text"
name="name"
value={data.name}
onChange={handleChange}
className="w-full p-2 text-sm border border-slate-300 rounded outline-none uppercase text-slate-900 bg-white focus:ring-2 focus:ring-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-400"
/>
</div>


<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-2">
<Hash size={12} /> Index Number
</label>
<input
type="text"
name="index"
value={data.index}
onChange={handleChange}
className="w-full p-2 text-sm border border-slate-300 rounded outline-none uppercase text-slate-900 bg-white focus:ring-2 focus:ring-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-400"
/>
</div>

<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-2">
<Users size={12} /> Group
</label>
<input
type="text"
name="group"
value={data.group}
onChange={handleChange}
className="w-full p-2 text-sm border border-slate-300 rounded outline-none uppercase text-slate-900 focus:ring-2 focus:ring-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-400"
/>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-2">
<GraduationCap size={12} /> Semester
</label>
<input
type="text"
name="semester"
value={data.semester}
onChange={handleChange}
className="w-full p-2 text-sm border border-slate-300 rounded outline-none uppercase text-slate-900 focus:ring-2 focus:ring-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-400"
/>
</div>
</div>

<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-2">
<Calendar size={12} /> Submission Date
</label>
<input
type="date"
name="date"
value={data.date}
onChange={handleChange}
className="w-full p-2 text-sm border border-slate-300 rounded outline-none text-slate-900 focus:ring-2 focus:ring-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-400"
/>
</div>

<button
onClick={handlePrint}
className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-blue font-bold py-4 px-4 rounded transition-all flex items-center justify-center gap-2 shadow-lg border-none outline-none"
>
<Printer size={18} /> GENERATE PDF
</button>

<div className="mt-6 p-3 bg-slate-50 rounded border border-slate-200">
<p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Print Instructions:<b>(important!)</b></p>
<ol className="text-[10px] text-slate-500 list-decimal ml-3 space-y-1">
<li>Click "Generate PDF"</li>
<li>Set Destination to "Save as PDF"</li>
<li>Set Margins to "None"</li>
<li>Ensure Paper Size is "A4"</li>
<ui className="dev_cred"><b>Dev by: E22 Civil Batch</b></ui>
</ol>
</div>
</div>

</div>

{/* Preview Container */}
<div className="flex-1 bg-slate-300 p-4 md:p-8 overflow-y-auto flex justify-center print:bg-white print:p-0">
<style dangerouslySetInnerHTML={{ __html: `
@media print {
body { background: white !important; margin: 0 !important; -webkit-print-color-adjust: exact; }
.print\\:hidden { display: none !important; }
@page {
size: A4;
margin: 0;
}
}
.a4-sheet {
width: 210mm;
height: 297mm;
background: white;
box-sizing: border-box;
font-family: Times New Roman,Arial, sans-serif;
position: relative;
color: black;
}
.border-frame {
position: absolute;
top: 12mm;
left: 12mm;
right: 12mm;
bottom: 12mm;
border: 1.5pt solid black;
display: flex;
flex-direction: column;
padding: 10mm;
box-sizing: border-box;
}
.title-area {
flex-grow: 1;
display: flex;
align-items: center;
justify-content: center;
}
.dev_cred{
font-size :8pt;
}
.title-text {
font-size: 50pt;
line-height: 1.3;
text-decoration: underline;
text-decoration-thickness: 2pt;
text-underline-offset: 4px;
padding-bottom:8.5mm;
text-align: center;
width: 100%;
text-transform: uppercase;
}
.details-wrapper {
align-self: flex-end;
margin-bottom: 5mm;
}
.detail-line {
font-size: 20pt;
line-height: 1.4;
text-decoration: underline;
text-decoration-thickness: 1.5pt;
text-underline-offset: 4px;
text-transform: uppercase;
white-space: nowrap;
display: block;
text-align: left;
}
.detail-line2 {
font-size: 25pt;
line-height: 1.4;
text-decoration: underline;
text-decoration-thickness: 1.5pt;
text-underline-offset: 4px;
text-transform: uppercase;
white-space: nowrap;
display: block;
text-align: left;
}
`}} />

{/* A4 Preview Wrapper */}
<div className="a4-sheet shadow-2xl print:shadow-none">
<div className="border-frame">
{/* Topic Area: Centered between top of frame and personal info */}
<div className="title-area">
<div className="title-text">
{data.title || 'TOPIC'}
</div>
</div>

{/* Bottom-Right Block */}
<div className="details-wrapper">
<span className="detail-line2">{data.name}</span>
<span className="detail-line">{data.index}</span>
<span className="detail-line">{data.group}</span>
<span className="detail-line">{data.semester}</span>
<span className="detail-line">{formatDate(data.date)}</span>
</div>
</div>
</div>
</div>
</div>
);
};

export default App;

