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
                        Reducing the rate of permanent obstetric brachial plexus palsy: Impact of a simulation training program in shoulder dystocia after five years of training
                    </h1>
                </div>

                               <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Christian Garrido López */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0000-6232-405X" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Christian Garrido López,</span>
                                    </div>

                                    {/* Emma Batllori Badía */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-6047-7615" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Emma Batllori Badía,</span>
                                    </div>

                                    {/* Cecilia Villalaín */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-9456-4100" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Cecilia Villalaín,</span>
                                    </div>

                                    {/* María Inmaculada Mejía Jiménez */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-2487-3466" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">María Inmaculada Mejía Jiménez,</span>
                                    </div>

                                    {/* Patricia Barbero */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-6261-8450" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Patricia Barbero,</span>
                                    </div>

                                    {/* Laura Forcén Acebal */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-7345-2767" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Laura Forcén Acebal</span>
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
                                Reducing the rate of permanent obstetric brachial plexus palsy: Impact of a simulation training program in shoulder dystocia after five years of training. Perinatal Journal 2025;33(1):18-24 DOI: 10.59215/prn.25.0331004
                                <br className="br" />
                                <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                <Link href="https://orcid.org/0009-0000-6232-405X" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                </Link>
                                &nbsp;Christian Garrido López<sup>1</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer)
                                </span>
                                <div className="br" />
                                <Link href="https://orcid.org/0000-0002-6047-7615" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                </Link>
                                &nbsp;Emma Batllori Badía<sup>1</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Project Initiator, Study Designer, Study Supervisor, Literature Researcher)
                                </span>
                                <div className="br" />
                                <Link href="https://orcid.org/0000-0002-9456-4100" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                </Link>
                                &nbsp;Cecilia Villalaín<sup>2</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Study Designer, Data Analyst, Final Reviewer)
                                </span>
                                <div className="br" />
                                <Link href="https://orcid.org/0000-0003-2487-3466" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                </Link>
                                &nbsp;María Inmaculada Mejía Jiménez<sup>1</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Final Reviewer)
                                </span>
                                <div className="br" />
                                <Link href="https://orcid.org/0000-0002-6261-8450" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                </Link>
                                &nbsp;Patricia Barbero<sup>1</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Final Reviewer)
                                </span>
                                <div className="br" />
                                <Link href="https://orcid.org/0000-0002-7345-2767" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                </Link>
                                &nbsp;Laura Forcén Acebal<sup>1</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Study Supervisor, Data Collector, Final Reviewer)
                                </span>
                                <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                1. Hospital Universitario 12 de Octubre Department of Obstetrics and Gynaecology Madrid Spain
                                <div className="br" />
                                2. Hospital Universitario 12 de Octubre Department of Obstetrics and Gynaecology, Primary Care Interventions to Prevent Maternal and Child Chronic Diseases of Perinatal and Developmental Origin (RICORS network), RD21/0012/0024, Madrid, Spain. Madrid Spain
                                <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Christian Garrido López, Hospital Universitario 12 de Octubre Department of Obstetrics and Gynaecology Madrid Spain,
                                <br className="br" />
                                <a href="mailto:chrttn@gmail.com" className="text-blue-600 underline">
                                chrttn@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: November 12, 2024</li>
                                <li>Manuscript Accepted: February 14, 2025</li>
                                <li>Earlyview Date: March 18, 2025</li>
                                <li>Publication date: April 28, 2025</li>
                            </ul>

                            <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                            <p>
                                This study has been funded by the Instituto de Salud Carlos III (ISCIII) through the project RD21/0012/0024 and Next Generation EU funds, which finance the actions of the Recovery and Resilience Mechanism (MRR). Patient consent was waived due to the fact that this is a retrospective observational study, and its results would not affect the patients included in any case. The data presented in this study are available on request from the corresponding author due to the privacy of patient data. The authors declare no conflicts of interest.
                            </p>
                        </div>



                    )}

                    {activeTab === "abstract" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Abstract</h2>

                            <h3 className="mt-4 font-semibold">Objective</h3>  
                            <p>
                                The aim is to analyse whether simulation-based training in shoulder dystocia improves perinatal outcomes, including permanent brachial plexus palsy.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                This is a retrospective observational study conducted in a tertiary centre in Madrid, Spain. Cases occurring between 2015 and 2023 were analysed. The sample was divided into three periods based on their relation to a simulation training program initiated in 2018 (pre-training, initial training, and systematic training). The results are presented by periods. Comparisons were made between the second period (reference) and the adjacent periods.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                A significant increase in the rate of dystocia was observed (1.21%, 1.98%, 2.67%, p&lt;0.01). Once training began, the use of secondary manoeuvres per case of dystocia increased significantly (28, 73, 93, p=0.03), without increasing the total number of cases solved using these manoeuvres. The rate of permanent obstetric brachial palsy was significantly reduced (5.26%, 0.55%, 1.32%, p&lt;0.01), and this improvement was maintained over time, with 0 cases in 2023. No increase in the caesarean section rate was registered. There were no changes in the rates of transient palsy, fractures, hypoxic-ischemic disease, or perinatal outcomes based on Apgar scores and arterial pH.
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                Simulation-based training improves the overall management of shoulder dystocia and reduces complications, including permanent brachial palsy, without being associated with worse perinatal outcomes in terms of fractures, Apgar scores, arterial pH, or encephalopathy.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Shoulder dystocia, simulation training, permanent obstetric brachial plexus palsy, perinatal outcomes, resolution manoeuvres</p>
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
                            <p>18-24</p>
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
                                href="https://dx.doi.org/10.59215/prn.25.0331004"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331004
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
