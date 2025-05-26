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
                        OP-006 Cardiovascular disease after early-onset preeclampsia
                    </h1>
                </div>

                               <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Paula Domínguez-del Olmo */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-2169-6011" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Paula Domínguez-del Olmo,</span>
                                    </div>

                                    {/* Ignacio Herraiz */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/000-0001-6807-4944" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Ignacio Herraiz, </span>
                                    </div>

                                    {/*  Cecilia Villalaín */}
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
                                        <span className="text-blue-600 relative top-[1.5px]"> Cecilia Villalaín,</span>
                                    </div>

                                    {/*  Gema Ruíz */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-3482-0915" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Gema Ruíz, </span>
                                    </div>
                                    {/* Enrique Morales*/}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-5824-6973" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Enrique Morales,</span>
                                    </div>
                                    {/*  Jose Luis Ayala */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-7236-5330" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]"> Jose Luis Ayala,</span>
                                    </div>
                                    {/*  Jorge Solís*/}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-4227-7062" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]"> Jorge Solís,</span>
                                    </div>
                                    {/* Alberto Galindo*/}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-1308-1474" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Alberto Galindo</span>
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
                                    OP-006 Cardiovascular disease after early-onset preeclampsia. Perinatal Journal 2024;32(2024):5 DOI: 10.59215/prn.24.032supp006
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                                </div>
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                    <div className="text-[14px] font-normal leading-[4px]">
                                        <Link href="#" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                        </Link>
                                        &nbsp;Paula Domínguez-del Olmo<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Data Collector, Data Analyst, Results Interpreter, Manuscript Writer)
                                        </span>
                                        <div className="br" />
                                        <Link href="#" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Ignacio Herraiz<sup>2</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Project Initiator, Study Designer, Study Supervisor, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                        <Link href="#" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Cecilia Villalaín<sup>2</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Study Designer, Literature Researcher, Manuscript Writer, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                        <Link href="#" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Gema Ruíz<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Study Supervisor, Literature Researcher, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                        <Link href="#" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Enrique Morales<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Study Designer, Study Supervisor, Data Collector, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                        <Link href="#" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Jose Luis Ayala<sup>3</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Final Reviewer)
                                        </span>
                                        <div className="br" />
                                        <Link href="#" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Jorge Solís<sup>1</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Project Initiator, Study Designer, Study Supervisor, Data Collector, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                        <Link href="#" target="_blank">
                                            <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                        </Link>
                                        &nbsp;Alberto Galindo<sup>2</sup>
                                        <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                            &nbsp;(Project Initiator, Study Designer, Final Reviewer)
                                        </span>
                                        <div className="br" />
                                    </div>
                                </div>
                                <div className="br" />
                                <div className="br" />
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <div className="text-[14px] font-normal leading-[20px]">
                                        1. 12 de Octubre University Hospital, Madrid, Spain
                                        <div className="br" />
                                        2. 12 de Octubre University Hospital, Fetal Medicine Unit, Obstetrics and Gynecology Service, Madrid, Spain
                                        <div className="br" />
                                        3. Complutense University of Madrid, Madrid, Spain
                                        <div className="br" />
                                    </div>
                                </div>

                                <h3 className="mt-4 font-semibold">Correspondence</h3>
                                <p>
                                    Paula Domínguez-del Olmo, 12 de Octubre University Hospital, Madrid, Spain,
                                    <br className="br" />
                                    <a href="mailto:paula.dominguezdmo@gmail.com" className="text-blue-600 underline">
                                        paula.dominguezdmo@gmail.com
                                    </a>
                                </p>

                                <h3 className="mt-4 font-semibold">Publication History</h3>
                                <ul className="list-disc pl-5">
                                    <li>Manuscript Received: May 02, 2024</li>
                                    <li>Manuscript Accepted: May 02, 2024</li>
                                    <li>Publication date: May 18, 2024</li>
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
                                Early-onset preeclampsia (eoPE) is a hypertensive pregnancy-related complication characterized by endothelial dysfunction manifested before 34 weeks. Literature stated that women with a hypertensive-complicated obstetric history are at increased risk of cardiovascular disease (CVD), situating the postpartum period as an excellent opportunity for effective screening and cardiovascular risk prevention. In this research, we have assesed if the vascular damage caused during an episode of eoPE is associated later on to a higher risk and occurrence of CVD compared to women with normal pregnancies.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                An observational, longitudinal, prospective case-control study have been conducted in 50 women with eoPE and a control group of equal size (matched for age, parity, pregestational body mass index and date of delivery). All patients underwent a cardiovascular assessment including a blood-urine test, an atherosclerosis study and a 24-hour blood pressure monitoring. A statical analysis was performed for case-control parameters comparisons; Traditional Framingham calculators were used to estimate the cardiovascular risk in all patients and a Kaplan-Meier analysis was done to estimate the survival function (time without hypertension (HT))
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                At a median of 7.5 years after delivery, the blood tests results suggest a worse vascular status in the eoPE group; they showed worse BP measurements, especially in the nocturnal period and no differences were found in the atherosclerosis study. The obtained scores from the Framingham calculators were similar in both groups; however, a CVD was present in 44% of eoPE cases vs 10% of controls and chronic HT was diagnosed after delivery in 38% vs 8% of controls (relative risk of 4.7) with a survival time of 7.4+/-0.7 and 11.6+/-0.2, respectively.
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                Women with a history of eoPE exhibited greater endothelial dysfunction and a higher prevalence of CVD, particularly chronic HT. Current CVD scores underestimate these risks in women with a history of eoPE, so it should be included as a risk factor. 
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Hypertensive, pregnancy, preeclampsia, cardiovascular, case-control</p>

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
                            <p>Abstract (Formatted)</p>
                        </div>

                        {/* Pages */}
                        <div className="p-3">
                            <p className="font-semibold">Pages</p>
                            <p>5</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                May 18, 2024
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2024; 32 (2024)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.24.032supp006"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.24.032supp006
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v32cs/Article6.pdf"
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
