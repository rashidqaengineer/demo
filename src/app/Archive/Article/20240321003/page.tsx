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
                        Etiology and outcome of hydrops: A 17 years single centre experience
                    </h1>
                </div>
                        <div className="mb-6 text-sm flex flex-wrap gap-2">
                            {/* Slobodan Spasojevic */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0003-2102-7336" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Slobodan Spasojevic,</span>
                            </div>

                            {/* Marija Djermanovic */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0009-0003-4218-1321" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Marija Djermanovic</span>
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
                                        Etiology and outcome of hydrops: A 17 years single centre experience. Perinatal Journal 2024;32(1):26-30 DOI: 10.59215/prn.24.0321003
                                        <br className="br" />
                                        <br className="br" />
                                    </p>
                                </div>
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                    <div className="text-[14px] font-normal leading-[4px]">
                                        <Link href="https://orcid.org/0000-0003-2102-7336" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                        </Link>
                                        &nbsp;Slobodan Spasojevic<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Project Initiator, Study Designer, Study Supervisor, Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                        <Link href="https://orcid.org/0009-0003-4218-1321" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Marija Djermanovic<sup>2</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                    </div>
                                </div>
                                <div className="br" />
                                <div className="br" />
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <div className="text-[14px] font-normal leading-[20px]">
                                        1. University of Novi Sad, Medical Faculty, Institute of Child and Youth Healthacare of Vojvodina, Novi Sad, Serbia
                                        <br />
                                        2. Institute of Child and Youth Healthcare of Vojvodina, Novi Sad, Serbia
                                        <div className="br" />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-semibold">Correspondence</h3>
                                <p>
                                    Slobodan Spasojevic, University of Novi Sad, Medical Faculty, Institute of Child and Youth Healthacare of Vojvodina, Novi Sad, Serbia,
                                    <br className="br" />
                                    <a href="mailto:slobodan.spasojevic@mf.uns.ac.rs" className="text-blue-600 underline">
                                        slobodan.spasojevic@mf.uns.ac.rs
                                    </a>
                                </p>

                                <h3 className="mt-4 font-semibold">Publication History</h3>
                                <ul className="list-disc pl-5">
                                    <li>Manuscript Received: October 19, 2023</li>
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
                                Recent advances in neonatal medicine have led to the improvements in diagnosis, prevention and management of fetal hydrops (HF). Although incidence of immune HF has significantly decreased, the incidence of non-immune HF has remained largely unchanged and mortality rate continues to be high, with rates up to 75.5%.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                A retrospective chart review of newborns who were admitted due to HF to the Institute of Child and Youth Healthcare of Vojvodina, Novi Sad, Serbia, from January 1st, 2001 to January 1st, 2018. It involved the analysis of demographic, antenatal, and postnatal parameters as well as examination of etiology and outcome.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                There were 18 cases of HF, comprising 12/18 (66.66%) males, 6/18 (33.34%) females. Mean gestational age was 34.96±3.15gw (min-max 29.43-41.00); mean birth weight 2564.44±652.45g (min-max 1510.00-3650.00), Etiology of fetal hydrops was determined in 14/18 (77.78%), newborns; in 6/18 (33.33%) newborns was of immune, and in 8/18 (44.45%) of non-immune origin. Death occurred in 10/18 (55.56%) newborns. Patients who did not survive were more frequently born from multiple pregnancies (p=0.03), had lower values of Apgar score 1st and 5th minutes (p=0.011; p=0.001, respectively), more frequently presented with pericardial effusions (p=0.002) and multiple sites of effusions (p=0.02), cardiac insufficiency (p=0.019), acute kidney injury (p=0.004) and lower values of pH (p=0.035). High-frequency oscillatory ventilation was more frequently used in this group (p=0.018).
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                Mortality among newborn with HF remains high. Poor prognosis is associated with multiple pregnancies, lower Apgar scores, severe acidosis, as well as the presence of pericardial effusion, multiple sites of effusions, cardiac insufficiency and acute kidney injury, and use of high-frequency oscillatory ventilation as a life-saving mode of ventilation.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Fetal hydrops, newborn, etiology, outcome</p>
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
                            <p>26-30</p>
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
                                href="https://dx.doi.org/10.59215/prn.24.0321003"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.24.0321003
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v33i1/Article4.pdf"
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
