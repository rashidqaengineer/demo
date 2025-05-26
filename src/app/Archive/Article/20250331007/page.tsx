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
                        The impact of assisted reproductive technology on pregnancies with very advanced maternal age
                    </h1>
                </div>

                               <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Gizem Elif Dizdaroğulları */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-7255-860X" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Gizem Elif Dizdaroğulları,</span>
                                    </div>

                                    {/* Aslıhan Öztürk */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0005-6952-7745" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Aslıhan Öztürk</span>
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
                                    The impact of assisted reproductive technology on pregnancies with very advanced maternal age. Perinatal Journal 2025;33(1):34-39 DOI: 10.59215/prn.25.0331007
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link href="https://orcid.org/0000-0001-7255-860X" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                    </Link>
                                    &nbsp;Gizem Elif Dizdaroğulları<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Results Interpreter, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0009-0005-6952-7745" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Aslıhan Öztürk<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Supervisor, Data Collector, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Kartal Dr Lütfi Kırdar City Hospital Perinatology İstanbul Turkiye
                                    <div className="br" />
                                    2. Kartal Dr Lütfi Kırdar City Hospital Obstetrics and Gynaecology İstanbul Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Gizem Elif Dizdaroğulları, Kartal Dr Lütfi Kırdar City Hospital Perinatology İstanbul Turkiye,
                                <br className="br" />
                                <a href="mailto:gizemellif@hotmail.com" className="text-blue-600 underline">
                                    gizemellif@hotmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: December 22, 2024</li>
                                <li>Manuscript Accepted: March 11, 2025</li>
                                <li>Earlyview Date: March 12, 2025</li>
                                <li>Publication date: April 28, 2025</li>
                            </ul>

                            <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                            <p>
                                No conflicts declared.
                            </p>
                        </div>





                    )}

                    {activeTab === "abstract" && (
                       <div>
                            <h2 className="font-semibold text-lg mb-2">Abstract</h2>

                            <h3 className="mt-4 font-semibold">Objective</h3>  
                            <p>
                                Since assisted reproductive technology has become an available choice of conceiving, maternal age of 45 years or more has increased significantly. For this group of women, medical literature uses the term “very advanced maternal age”. It was demonstrated in a number of studies that very advanced maternal age was highly associated with an increased risk of pregnancy complications and adverse perinatal outcomes. Asisted reproductive technology is also a risk factor for potential pregnancy complications. In this study, we aimed to report pregnancy complications and outcomes in women with very advanced maternal age who conceived with assisted reproductive technology compared with spontaneous conceptions.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                In this retrospective cohort study we examined the outcome of pregnant women aged 45 years or more who presented to our outpatient clinic consecutively between 2015 and 2023. Demographic and obstetrical data were recorded in all patients within the study window. The study group were divided into two groups: women those who conceived spontaneously and those who conceived with ART. The ART group included patients who underwent in-vitro fertilisation(IVF) or intra-uterine insemination(IUI) treatment.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                More than half of pregnancies in very advanced maternal age resulted in pregnancy loss. We found no significant results in terms of BMI, HTDP, DM and FGR. We did found that VAMA with ART pregnancies had higher CD rate (OR 4.0, 95% CI= 1.7-9.2), NICU admission (OR 4.3, 95% CI= 1.3-13.6), PB (OR 11.9, 95% CI= 3.2-43.2), and live birth rate (OR 2.3, 95% CI= 0.9-5.3) compared with VAMA with spontaneous pregnancies, but lower rates of birth weight (OR 0.9, 95% CI= 0.997-0.999), gestational age at birth (OR 0.5, 95% CI= 0.5-0.9), and pregnancy loss (OR 0.3, 95% CI= 0.1-0.8).
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                The use of assisted reproductive technology in women with very advanced maternal age is a risk factor for advanced perinatal outcome. However, despite increased advanced perinatal outcome, higher live birth rates were detected. This may be a result of more attentive perinatal care.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>advanced maternal age, assisted reproductive technology, preeclampsia, pregnancy complications, preterm birth</p>
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
                            <p>34-39</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                March 12, 2025
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 33 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0331007"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331007
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v33i1/Article7.pdf"
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
