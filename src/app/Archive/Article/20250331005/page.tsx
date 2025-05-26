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
                        Effect of Oral Supplementation with micronized ferric pyrophosphate in pregnant women to prevent postpartum hemorrhage
                    </h1>
                </div>

                               <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Federica Di Napoli */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0009-0236-4047" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Federica Di Napoli,</span>
                                    </div>

                                    {/* Luigi Vigilante */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-0078-6458" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Luigi Vigilante,</span>
                                    </div>

                                    {/* Maria Giuseppina Trinchillo */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0001-9311-0617" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Maria Giuseppina Trinchillo,</span>
                                    </div>

                                    {/* Gennaro Esposito */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-0078-7455" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Gennaro Esposito,</span>
                                    </div>

                                    {/* Maddalena Turco */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-0078-4771" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Maddalena Turco,</span>
                                    </div>

                                    {/* Elisabetta Gragnano */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-7963-2144" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Elisabetta Gragnano,</span>
                                    </div>

                                    {/* Dario Colacurci */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0000-8935-5710" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Dario Colacurci,</span>
                                    </div>

                                    {/* Gabriele Saccone */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-0078-2113" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Gabriele Saccone</span>
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
                                    Effect of Oral Supplementation with micronized ferric pyrophosphate in pregnant women to prevent postpartum hemorrhage. Perinatal Journal 2025;33(1):25-27 DOI: 10.59215/prn.25.0331005
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link href="https://orcid.org/0009-0009-0236-4047" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                    </Link>
                                    &nbsp;Federica Di Napoli<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-0078-6458" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Luigi Vigilante<sup>2</sup>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0009-0001-9311-0617" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Maria Giuseppina Trinchillo<sup>2</sup>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-0078-7455" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Gennaro Esposito<sup>2</sup>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-0078-4771" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Maddalena Turco<sup>2</sup>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-7963-2144" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Elisabetta Gragnano<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Supervisor)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0009-0000-8935-5710" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Dario Colacurci<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Results Interpreter)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-0078-2113" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Gabriele Saccone<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Napoli Neuroscienze Napoli Italy
                                    <div className="br" />
                                    2. Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Gabriele Saccone, Napoli Neuroscienze Napoli Italy,
                                <br className="br" />
                                <a href="mailto:gabriele.saccone.1990@gmail.com" className="text-blue-600 underline">
                                    gabriele.saccone.1990@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: October 03, 2024</li>
                                <li>Manuscript Accepted: February 14, 2025</li>
                                <li>Earlyview Date: March 18, 2025</li>
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
                                The aim of this study was to evaluate the impact of oral supplementation with micronized ferric pyrophosphate in pregnant women to prevent postpartum hemorrhage.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                This was an observational retrospective study using data from clinical records of women with anemia who had visits at our private setting center. In this study, women who received oral supplementation with oral Sucrosomial Ferric Pyrophosphate plus Vitamin C, Folate, and Vitamin B12 daily as prophylactic treatment for iron deficiency anemia were compared with women who did not. The intervention group received the supplementation starting from the diagnosis of anemia until the day of delivery. The control group received standard care, i.e. ferrous sulphate (daily 80 mg Fe+2), starting from the diagnosis of anemia until the day of delivery.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                PPH occurred in 11/250 women in the intervention group and 19/250 in the control group (4.4% vs 7.6%; p value = non significant). Supplementation with Sucrosomial Ferric Pyrophosphate was associated with significantly higher ferritin level at the time of delivery, higher Hb level at the time of delivery and one month after delivery, and lower gastrointestinal side effects.
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                Our study provides newer evidence that demonstrates the effectiveness of Sucrosomial iron, with fewer side effects, in pregnant women with mild anemia. Larger randomized trials are required to confirm our data.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>infertility, supplement</p>
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
                            <p>25-27</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                March 18, 2025
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 33 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0331005"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331005
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
