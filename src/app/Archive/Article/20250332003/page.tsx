"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDownloadForOffline } from "react-icons/md";

export default function ArticleTabs() {
    const [activeTab, setActiveTab] = useState("info");
    const orchidIcon = "/images/orcid.logo.icon.svg";

    const tabs = [
        { id: "info", label: "Information" },
        { id: "abstract", label: "Abstract" },
        { id: "fulltext", label: "Full Text" },
        { id: "references", label: "References" },
        { id: "appendix", label: "Appendix" },
    ];

    return (
        <div className="w-full h-20 flex">
            <div className="home-body-text w-[73%] px-3 ">
                <div className="  mx-auto px-4 py-1">
                    <div className="journal-Container"></div>
                    <h1 className="text-[29px] font-bold leading-[32px] text-[#0B5486] article-info-title">
                        Determination of systemic inflammatory markers and determination of possible risk factors in post-term pregnancies
                    </h1>
                </div>

                                <div className="mb-6 text-sm flex flex-wrap gap-2">

                                    {/* Özgün AKBAŞ */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-7494-5734" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Özgün AKBAŞ,</span>
                                    </div>

                                    {/* Mücahit Furkan BALCI */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-2821-3273" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Mücahit Furkan BALCI,</span>
                                    </div>

                                    {/* Arda Batuhan KARADUMAN */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0002-7734-738X" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Arda Batuhan KARADUMAN,</span>
                                    </div>

                                    {/* Ozan ODABAŞ */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-9800-8817" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Ozan ODABAŞ,</span>
                                    </div>

                                    {/* Azra Arıcı YURTKUL */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-2379-6641" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Azra Arıcı YURTKUL,</span>
                                    </div>

                                    {/* Mehmet Ferdi KINCI */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-6798-4281" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Mehmet Ferdi KINCI,</span>
                                    </div>

                                    {/* Yaşam Kemal AKPAK */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-1699-8667" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Yaşam Kemal AKPAK</span>
                                    </div>

                                </div>

                {/* Tabs */}
                <ul className="flex border-b border-gray-300 mb-4">
                    {tabs.map((tab) => (
                        <li key={tab.id} className=" list-none">
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-4 font-normal text-[14px] leading-[20px] rounded-t-md
                                ${activeTab === tab.id
                                        ? "text-[rgb(85,85,85)] border border-b-0 border-gray-300 bg-white mb-[-0.5px]"
                                        : "text-[rgb(0,140,199)] border-none"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Tab Content */}
                <div className="text-gray-800 ml-6 text-sm leading-relaxed">
                    {activeTab === "info" && (
                        <div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">Article info</h2>
                                <p className="text-[14px] font-normal leading-[20px]">
                                     Determination of systemic inflammatory markers and determination of possible risk factors in post-term pregnancies. Perinatal Journal 2025;33(2):- DOI: 10.59215/prn.25.0332003
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">
                                    Author(s) Information
                                </h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link
                                        href="https://orcid.org/0000-0001-7494-5734"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline pb-[0.5px] ml-1"
                                        />
                                    </Link>
                                    &nbsp;Özgün AKBAŞ,<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-2821-3273"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Mücahit Furkan BALCI<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0009-0002-7734-738X"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Arda Batuhan KARADUMAN<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Supervisor)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0001-9800-8817"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Ozan ODABAŞ<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp; (Data Collector)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-2379-6641"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Azra Arıcı YURTKUL<sup>4</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Results Interpreter)
                                    </span>
                                    <div className="br" />
                                     <Link
                                        href="https://orcid.org/0000-0002-6798-4281"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Mehmet Ferdi KINCI<sup>4</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-1699-8667"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Yaşam Kemal AKPAK<sup>5</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Final Reviewer)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Ağrı Education and Research Hospital Obstetrics and Gynecology, Ağrı, Turkiye
                                    <div className="br" />
                                    2. Torbalı State Hospital Obstetrics and Gynecology, Izmir, Turkiye
                                    <div className="br" />
                                    3. Kars Harakani State Hospital Obstetrics and Gynecology, Kars, Turkiye
                                    <div className="br" />
                                    4. İzmir City Hospital Obstetrics and Gynecology, İzmir, Turkiye
                                    <div className="br" />
                                    5. İzmir City Hospital Obstetrics and Gynecology, İzmir, Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Özgün AKBAŞ, Ağrı Education and Research Hospital Obstetrics and Gynecology, Ağrı, Turkiye
                                <br className="br" />
                                <a href="mailto:ozgun_94_@hotmail.com" className="text-blue-600 underline">
                                    ozgun_94_@hotmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                    <li>Manuscript Received: January 23, 2025</li>
                                    <li>Manuscript Accepted: May 07, 2025</li>
                                    <li>Earlyview Date: May 07, 2025</li>
                            
                            </ul>

                            <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                            <p>No conflicts declared.</p>
                        </div>
                    )}

                    {activeTab === "abstract" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Abstract</h2>
                                <h3 className="mt-4 font-semibold">Objective</h3>  
                            <p>
                                This study aims to examine systemic inflammatory markers and the influence of feto-maternal factors in post-term pregnancies, assessing their ability to predict the course of these pregnancies. The findings seek to contribute to the existing literature on post-term pregnancy outcomes.
                            </p>
                            <h3 className="mt-4 font-semibold">Methods</h3>
                                    <p>
                                        The study retrospectively analyzed data from 250 pregnant women, aged 16 to 45, with a known last menstrual period (LMP) and no active trauma, who were admitted to the Obstetrics and Gynecology, Tepecik Training and Research Hospital between 2018 and 2023. The parameters examined included age, parity, systolic arterial tension (SAT), white blood cell (WBC) count, neutrophil count, lymphocyte count, platelet count, mean platelet volume (MPV), red blood cell distribution width (RDW), and neonatal outcomes. The case group consisted of 125 pregnant women who were at or beyond 42 weeks (≥42+0) according to LMP, while the control group included 125 women between 37 and 40+6 weeks of gestation. Comparisons were made between the groups based on the neutrophil-to-lymphocyte ratio (NLR), platelet-to-lymphocyte ratio (PLR), and other demographic characteristics.
                                    </p>
                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                When comparing post-term and term pregnancies, the post-term pregnancy group showed significantly higher values for age, gestation period, height, RDW, and PDW. In contrast, WBC, PLT, MPV, and PLR were significantly higher in the term pregnancy group. No significant differences were found between the two groups in terms of live birth rate, birth weight, birth height, neutrophil count, lymphocyte count, or NLR.
                            </p>
                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                In the post-term group, WBC, neutrophil, lymphocyte, MPV, and NLR levels were lower, while PDW and RDW levels were higher compared to the term group. No differences were observed in PLR and PLT levels. Studies with larger sample sizes are recommended to enhance the predictive value of these markers for post-term pregnancies.
                            </p>
                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Pregnancy, Post-term, NLR, PLR, MPV, Inflammation</p>
                            
                           
                            {/* Add full abstract content here as needed */}
                        </div>
                    )}

                    {activeTab === "fulltext" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Full Text</h2>
                            <p></p>
                        </div>
                    )}

                    {activeTab === "references" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">References</h2>
                            <p></p>
                            
                        </div>
                    )}

                    {activeTab === "appendix" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Appendix</h2>

                            <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                        <th></th>
                                        <th>File/Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* Figure */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-01-23-025822.docx" target="_blank">
                                                Figure <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            NRL distributions of term and post-term groups
                                        </td>
                                        </tr>
                                        {/* Table 1 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-05-071252.docx" target="_blank">
                                                Table 1 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Comparison Of Post-Term and Term Pregnancies
                                        </td>
                                        </tr>
                                        {/* Table 2 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-05-071345.docx" target="_blank">
                                                Table 2 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Comparison of Laboratory Results of Patients
                                        </td>
                                        </tr>

                                        
                                    </tbody>
                                </table>
                        </div>
                    )}
                </div>
            </div>

            <div className="home-body-right-sidebar w-[25%]">
                <div className="border border-gray-300 rounded-md bg-white shadow-sm text-sm text-gray-800 w-full max-w-xs flex flex-col overflow-hidden">
                    {/* Sections with dividers */}
                    <div className="divide-y divide-gray-300">
                        {/* Early View */}
                        <div className="p-3">
                            <p><span className="badge-important">Early View</span></p>
                        </div>
                        {/* Article's Type */}
                        <div className="p-3">
                            <p className="font-semibold">Article's type</p>
                            <p>Original Article</p>
                        </div>

                        {/* Pages */}
                        <div className="p-3">
                            <p className="font-semibold">Pages</p>
                            <p>-</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                May 05, 2025
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 33 (2)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0332003"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0332003
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button 
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/Article1.pdf"
                            type="button"
                            className="w-full !bg-[#5EBD5E] hover:!bg-green-600 !text-white font-medium py-2 px-4 rounded flex items-center justify-center space-x-2"
                        >
                            <MdDownloadForOffline className="text-white text-lg" />
                            <span>Download as PDF</span>
                        </a>
                    </div>*/}
                </div>

            </div>
        </div>
    );
}
