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
                        Evaluation of obstetric outcomes and risk factors of early late and term stillbirths
                    </h1>
                </div>
                        <div className="mb-6 text-sm flex flex-wrap gap-2">
                            {/* Simten Genc */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0003-4446-4467" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Simten Genc,</span>
                            </div>

                            {/* Aylin Ozkahraman */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0009-0008-1596-9435" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Aylin Ozkahraman,</span>
                            </div>

                            {/* Mirac Ozalp */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0002-2255-1642" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Mirac Ozalp,</span>
                            </div>

                            {/* Erhan Akturk */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0003-1436-6049" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Erhan Akturk,</span>
                            </div>

                            {/* Veli Mihmanli */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0001-8701-8462" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Veli Mihmanli</span>
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
                                    Evaluation of obstetric outcomes and risk factors of early late and term stillbirths. Perinatal Journal 2024;32(1):1-8 DOI: 10.59215/prn.24.0321001
                                    <br className="br" />
                                    <br className="br" />
                                    </p>
                                </div>
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                    <div className="text-[14px] font-normal leading-[4px]">
                                    <Link href="https://orcid.org/0000-0003-4446-4467" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                    </Link>
                                    &nbsp;Simten Genc<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Study Supervisor, Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0009-0008-1596-9435" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Aylin Ozkahraman<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Study Supervisor, Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-2255-1642" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Mirac Ozalp<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Study Supervisor, Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-1436-6049" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Erhan Akturk<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Study Supervisor, Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-8701-8462" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Veli Mihmanli<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Study Supervisor, Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    </div>
                                </div>
                                <div className="br" />
                                <div className="br" />
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <div className="text-[14px] font-normal leading-[20px]">
                                    1. Prof. Dr Cemil Tascıoglu City Hospital, Department of Obstetrics and Gynecology, İstanbul, Türkiye
                                    <div className="br" />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-semibold">Correspondence</h3>
                                <p>
                                    Simten Genc, Prof. Dr Cemil Tascıoglu City Hospital, Department of Obstetrics and Gynecology, İstanbul, Türkiye,
                                    <br className="br" />
                                    <a href="mailto:simtengenc@yahoo.com.tr" className="text-blue-600 underline">
                                    simtengenc@yahoo.com.tr
                                    </a>
                                </p>

                                <h3 className="mt-4 font-semibold">Publication History</h3>
                                <ul className="list-disc pl-5">
                                    <li>Manuscript Received: November 09, 2023</li>
                                    <li>Manuscript Accepted: December 23, 2023</li>
                                    <li>Earlyview Date: December 25, 2023</li>
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
                                Stillbirth is defined as the death or loss of the fetus before or during birth in pregnancies over the 20th week of gestation. The aim of our study is to determine the risk factors for stillbirth and to compare the obstetric and maternal outcomes of early, late and term stillbirth cases.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                Our retrospective case-control study included pregnant women, between the ages of 18 and 45, who had a stillbirth over the 20th week of gestation, between February 1, 2015 and June 31, 2023. Patients were compared considering of demographic characteristics and obstetric outcomes.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                Parity≥3  (OR 0.34; 95% CI: 0.15–0.78. p = 0.011), abruptio placentae (OR 0.29; 95% CI: 0.04–0.51, p = 0.009), preterm birth (OR 0.35; 95% CI: 0.16–0.74, p = 0.006), LBW (OR 0.09; 95% CI: 0.04–0.23, p = 0.001), oligohydramnios (OR 0.16; 95% CI: 0.03–0.27, p = 0.001) were associated with stillbirth in multivariate analysis. The caesarean section rate and the presence of small for gestational age were found to be statistically lower in the early group. (p=0.01, p=0.029 respectively). The presence of breech presentation was found to be statistically significantly lower in the term group (p=0.0001).
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                Risk factors associated with stillbirth include preterm birth, low birth weight, abruptio placentae, oligohydramnios and parity 3 and above. When early, late and term groups were compared, the caesarean section rate and the presence of small for gestational age were found to be statistically lower in stillbirths under 28 weeks.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Stillbirth, abruptio placentae, small for gestational age, oligohydramnios</p>
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
                            <p>1-8</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                December 25, 2023
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 32 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0321001"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0321001
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v33i1/Article2.pdf"
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
