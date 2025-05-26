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
                        Maternal Serum Surfactant Protein-D (SP-D) levels in pregnancies complicated with mild and severe preeclampsia: A case control study
                    </h1>
                </div>

                                <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Mehmet Mete Kirlangic, */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-9750-1594" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Mehmet Mete Kirlangic,</span>
                                    </div>

                                    {/*  Erdem Sahin */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-9492-6223" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]"> Erdem Sahin,</span>
                                    </div>

                                    {/* Mefkure Eraslan Sahin */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-6484-9132" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Mefkure Eraslan Sahin,</span>
                                    </div>

                                    {/* Serhan Kutuk */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-0836-8793" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Serhan Kutuk,</span>
                                    </div>

                                    {/* Merve Vural Yalman*/}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-8933-9112" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Merve Vural Yalman, </span>
                                    </div>

                                    {/* Esra Akdemir */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-3776-0674" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Esra Akdemir</span>
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
                                    Maternal Serum Surfactant Protein-D (SP-D) levels in pregnancies complicated with mild and severe preeclampsia: A case control study. Perinatal Journal 2025;33(2):- DOI: 10.59215/prn.25.0332002
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
                                        href="https://orcid.org/0000-0002-9750-1594"
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
                                    &nbsp;Mehmet Mete Kirlangic,<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Data Analyst, Literature Researcher, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0001-9492-6223"
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
                                    &nbsp;Erdem Sahin<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Data Collector, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0001-6484-9132"
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
                                    &nbsp;Mefkure Eraslan Sahin<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Data Collector, Results Interpreter, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0003-0836-8793"
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
                                    &nbsp;Serhan Kutuk<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0001-8933-9112"
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
                                    &nbsp;Merve Vural Yalman<sup>4</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Data Analyst)
                                    </span>
                                    <div className="br" />
                                     <Link
                                        href="https://orcid.org/0000-0002-3776-0674"
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
                                    &nbsp;Esra Akdemir<sup>4</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Kartal Dr Lutfi Kirdar City Hospital Obstetrics and Gynecology Istanbul Turkiye
                                    <div className="br" />
                                    2. Kayseri City Hospital Obstetrics and Gynecology Kayseri Turkiye
                                    <div className="br" />
                                    3. Amasya Sabuncuoğlu Serefeddin Training and Research Hospital Obstetrics and Gynecology Amasya Turkiye
                                    <div className="br" />
                                    4. Sivas Numune Hospital Obstetrics and Gynecology Sivas Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Mehmet Mete Kirlangic, Kartal Dr Lutfi Kirdar City Hospital Obstetrics and Gynecology Istanbul Turkiye, {" "}
                                <br className="br" />
                                <a
                                    href="mailto:metekirlangic@gmail.com"
                                    className="text-blue-600 underline"
                                >
                                    metekirlangic@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: April 15, 2025</li>
                                <li>Accepted: May 05, 2025</li>
                                <li>Early View: May 05, 2025</li>
                            
                            </ul>

                            <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                            <p>No conflicts declared.</p>
                        </div>
                    )}

                    {activeTab === "abstract" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Abstract</h2>
                                <h3 className="mt-4 font-semibold">Objective</h3>  
                            <p>Considering that preeclampsia is a systemic disease that affects nearly all systems and end organs, it is likely that the maternal pulmonary arteries and maternal alveoli are also affected by this condition. Therefore, in the present study we aimed to evaluate maternal serum surfactant protein D (SP-D) levels in pregnancies complicated by mild and severe preeclampsia.</p>
                            <h3 className="mt-4 font-semibold">Methods</h3>
                                    <p>In this cross-sectional study, we engaged 90 pregnant women between 18 and 40 years old who were divided into the following two groups: control (n: 30) and mild preeclampsia (n: 30) and severe preeclampsia (n: 30).Maternal serum SP-D level was the main outcome of the study. Maternal serum SP-D levels were determined using enzyme-linked immunosorbent assay kit.</p>
                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>Maternal characteristics of the groups were statistically similar between the groups. The maternal serum SP-D level was 39.16 ± 31.6 ng/mL in the control group, 21.28 ± 14.07 ng/mL in the mild preeclampsia group and 19.83 ± 19.59 ng/mL in severe preeclampsia group. The maternal serum SP-D levels were statistically decreased in mild and severe preeclampsia group compared to control group (p: 0.002). The maternal serum SP-D level was statistically similar between mild preeclampsia group to severe preeclampsia group (p: 0.967).</p>
                            
                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>This results indicated that maternal type II cells and Clara cells in the alveoli were adversely affected by mild and severe preeclampsia. In further studies that evaluate types I-II alveolar and Clara cell damage will show the clinical significance of the present findings more clearly.</p>
                            
                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Severe preeclampsia,surfactant protein D, SP-D, type II alveoli cells, Clara cells.</p>
                            
                           
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

                                        {/* Table 1 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-15-031710.docx" target="_blank">
                                                Table 1 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Comparision of maternal characteristics of the groups.
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
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-04-115506.docx" target="_blank">
                                                Table 2 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Comparison of perinatal outcomes and maternal biochemical results between the groups.
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
                                href="https://dx.doi.org/10.59215/prn.25.0332002"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0332002
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
