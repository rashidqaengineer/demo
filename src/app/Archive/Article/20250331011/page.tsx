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
                        Determination of the relationship between severe preeclampsia and HALP scores
                    </h1>
                </div>

                                <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Fikriye Işıl Adıgüzel */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-6849-2193" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Fikriye Işıl Adıgüzel,</span>
                                    </div>

                                    {/* Seray Sırkıntı */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0000-9786-0872" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Seray Sırkıntı,</span>
                                    </div>

                                    {/* Mert Ali Karataş */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0004-1144-4990" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Mert Ali Karataş,</span>
                                    </div>

                                    {/* Sadık Kükrer */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-8465-3225" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Sadık Kükrer,</span>
                                    </div>

                                    {/* Cevdet Adıgüzel */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-3003-4573" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Cevdet Adıgüzel,</span>
                                    </div>

                                    {/* Gülsüm Uysal */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-9381-4892" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Gülsüm Uysal</span>
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
                                        Determination of the relationship between severe preeclampsia and HALP scores. Perinatal Journal 2025;33(1):57-61 DOI: 10.59215/prn.25.0331011
                                        <br className="br" />
                                        <br className="br" />
                                    </p>
                                </div>
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                    <div className="text-[14px] font-normal leading-[4px]">
                                        <Link href="https://orcid.org/0000-0001-6849-2193" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                        </Link>
                                        &nbsp;Fikriye Işıl Adıgüzel<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Project Initiator, Manuscript Writer)
                                        </span>
                                        <div className="br" />
                                        <Link href="hhttps://orcid.org/0009-0000-9786-0872" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Seray Sırkıntı<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Data Collector)
                                        </span>
                                        <div className="br" />
                                        <Link href="hhttps://orcid.org/0009-0004-1144-4990" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Mert Ali Karataş<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Data Collector, Literature Researcher)
                                        </span>
                                        <div className="br" />
                                        <Link href="https://orcid.org/0000-0001-8465-3225" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Sadık Kükrer<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Data Analyst, Results Interpreter)
                                        </span>
                                        <div className="br" />
                                        <Link href="https://orcid.org/0000-0002-3003-4573" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Cevdet Adıgüzel<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Final Reviewer)
                                        </span>
                                        <div className="br" />
                                        <Link href="https://orcid.org/0000-0002-9381-4892" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Gülsüm Uysal<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Data Analyst, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                    </div>
                                </div>
                                <div className="br" />
                                <div className="br" />
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <div className="text-[14px] font-normal leading-[20px]">
                                        1. Adana City Training and Research Hospital Department of Obstetrics and Gynecology, ADANA, Turkiye
                                        <div className="br" />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-semibold">Correspondence</h3>
                                <p>
                                    Fikriye Işıl Adıgüzel, Adana City Training and Research Hospital Department of Obstetrics and Gynecology, ADANA, Turkiye
                                    <br className="br" />
                                    <a href="mailto:aze_isil@hotmail.com" className="text-blue-600 underline">
                                        aze_isil@hotmail.com
                                    </a>
                                </p>

                                <h3 className="mt-4 font-semibold">Publication History</h3>
                                <ul className="list-disc pl-5">
                                    <li>Manuscript Received: March 09, 2025</li>
                                    <li>Manuscript Accepted: April 15, 2025</li>
                                    <li>Earlyview Date: April 15, 2025</li>
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
                                We conducted our study to investigate the relationships between severity of preeclampsia (PE) and hemoglobin, albumin, lymphocyte, and platelet (HALP) score.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                Our study comprised 115 pregnant women diagnosed with preeclampsia (PE) and 69 with severe PE. Demographic data, complete blood count results, and albumin values comprised the data that was examined.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                We found that the HALP scores were significantly greater in severe PE patients than in non-severe PE patients (p &lt; 0.05). Receiver operating characteristic (ROC) analysis revealed that this marker had moderate discriminative power (AUC 0.620, 95% CI: 0.0545–0.692). Logistic regression revealed signiﬁcantly greater HALP scores (OR 1.141, 95% CI: 1.020–1.276; p = 0.021) in the severe PE patients than in PE patient.
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                The HALP is elevated in pregnant women with severe PE, supporting the pathophysiology of this condition. The HALP score may be useful in predicting the severity of preeclampsia.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>HALP score, preeclampsia, severe preeclampsia</p>
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
                            <p>57-61</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                April 15, 2025
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 33 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0331011"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331011
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v33i1/Article11.pdf"
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
