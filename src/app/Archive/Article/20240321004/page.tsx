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
                        Comparision of the efficency of oxytocin and carbetosin for prevention of postpartum bleeding in low risk pregnancies
                    </h1>
                </div>
                        <div className="mb-6 text-sm flex flex-wrap gap-2">
                            {/* Nizamettin Bozbay */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0001-9632-5093" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Nizamettin Bozbay,</span>
                            </div>

                            {/* Leyla Aghakishiyeva */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0009-0007-4381-6754" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Leyla Aghakishiyeva,</span>
                            </div>

                            {/* Gökcen Örgül */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0003-0578-4230" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Gökcen Örgül</span>
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
                                        Comparison of the efficiency of oxytocin and carbetocin for prevention of postpartum bleeding in low risk pregnancies. Perinatal Journal 2024;32(1):31-36 DOI: 10.59215/prn.24.0321004
                                        <br className="br" />
                                        <br className="br" />
                                    </p>
                                </div>
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                    <div className="text-[14px] font-normal leading-[4px]">
                                        <Link href="https://orcid.org/0000-0001-9632-5093" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                        </Link>
                                        &nbsp;Nizamettin Bozbay<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Project Initiator, Study Designer, Study Supervisor, Results Interpreter, Manuscript Writer)
                                        </span>
                                        <div className="br" />
                                        <Link href="https://orcid.org/0009-0007-4381-6754" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Leyla Aghakishiyeva<sup>2</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Study Supervisor, Data Collector, Literature Researcher)
                                        </span>
                                        <div className="br" />
                                        <Link href="https://orcid.org/0000-0003-0578-4230" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Gökcen Örgül<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Data Analyst, Literature Researcher, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                    </div>
                                </div>
                                <div className="br" />
                                <div className="br" />
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <div className="text-[14px] font-normal leading-[20px]">
                                        1. Selcuk University, Faculty of Medicine, Department of Perinatology, Konya, Türkiye
                                        <br />
                                        2. Selcuk University, Faculty of Medicine, Department of Obstetrics and Gynecology, Konya, Türkiye
                                        <div className="br" />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-semibold">Correspondence</h3>
                                <p>
                                    Nizamettin Bozbay, Selcuk University, Faculty of Medicine, Department of Perinatology, Konya, Türkiye,
                                    <br className="br" />
                                    <a href="mailto:dr.nizamettin.bozbay@gmail.com" className="text-blue-600 underline">
                                        dr.nizamettin.bozbay@gmail.com
                                    </a>
                                </p>

                                <h3 className="mt-4 font-semibold">Publication History</h3>
                                <ul className="list-disc pl-5">
                                    <li>Manuscript Received: December 22, 2023</li>
                                    <li>Manuscript Accepted: February 02, 2024</li>
                                    <li>Earlyview Date: February 02, 2024</li>
                                    <li>Publication date: April 01, 2024</li>
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
                                To compare the effectiveness of carbetocin and oxytocin in the prophylaxis of postpartum hemorrhage (PPH).
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                Data from 136 cases who gave birth at Selçuk University Faculty of Medicine Hospital between January 1, 2023, and September 30, 2023, were retrospectively analyzed. Cases with risk factors for PPH were not included in the study. Data on mothers who received carbetocin and oxytocin during the active management of birth were obtained from the hospital electronic system and patient files. The amount of PPH was compared between the two groups.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                Carbetocin was administered to 67 cases in the study group and oxytocin to the remaining 69 cases. No statistically significant difference was found between the two groups in terms of changes in hemoglobin (Hgb) (0.6±0.9-0.7±0.8), hematocrit (Htc) (2.0±3.0-2.1±2.3), and platelet (Plt) (10.6±56.8-14.2±32.8) (p: 0.790, p: 0.733, p: 0.645). The estimated blood loss was 306±113 milliliters (mL) in the carbetocin group, while it was 333.05±165 mL in the oxytocin group (p=0.715). The estimated blood loss in vaginal births was 319.1±157 mL in the oxytocin group and 294±109 mL in the carbetocin group (p=0.576). In the Cesarean section (CS) group, the estimated blood loss was 354.0±172 mL in the oxytocin group and 323±128mL in the carbetocin group (p=0.691).
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                Oxytocin and carbetocin demonstrate similar efficacy in the prophylaxis of PPH. Carbetocin can be safely used as an alternative to oxytocin in cases with low risk.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Carbetocin, oxytocin, postpartum hemorrhage, estimated average blood loss</p>
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

                            {/*<table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                        <th></th>
                                        <th>File/Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview//PF-2025-04-28-112956.docx" target="_blank">
                                                Table 1 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Demographic parameters, measurements and pregnancy outcomes of the patients
                                        </td>
                                        </tr>

                                    </tbody>
                                </table> */}
                        </div>
                    )}
                </div>
            </div>

            <div className="home-body-right-sidebar w-[25%]">
                <div className="border border-gray-300 rounded-md bg-white shadow-sm text-sm text-gray-800 w-full max-w-xs flex flex-col overflow-hidden">
                    {/* Sections with dividers */}
                    <div className="divide-y divide-gray-300">
                        
                        {/* Article's Type */}
                        <div className="p-3">
                            <p className="font-semibold">Article's type</p>
                            <p>Original Article</p>
                        </div>

                        {/* Pages */}
                        <div className="p-3">
                            <p className="font-semibold">Pages</p>
                            <p>31-36</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                February 02, 2024
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 32 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.24.0321004"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.24.0321004
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v33i1/Article5.pdf"
                            type="button"
                            className="w-full !bg-[#5EBD5E] hover:!bg-green-600 !text-white font-medium py-2 px-4 rounded flex items-center justify-center space-x-2"
                        >
                            <MdDownloadForOffline className="text-white text-lg" />
                            <span>Download as PDF</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
