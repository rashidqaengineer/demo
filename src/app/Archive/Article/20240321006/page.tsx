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
                        Clinical Practice Guidelines and Recommendations by World Association of Perinatal Medicine and Perinatal Medicine Foundation: Reporting Suspected Findings from Fetal Central Nervous System Examination
                    </h1>
                </div>

                                <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Valentina De Robertis */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-0196-0671" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Valentina De Robertis,</span>
                                    </div>

                                    {/* Cihat Sen */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-2822-6840" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Cihat Sen,</span>
                                    </div>

                                    {/* Ilan Timor-Tritsch */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-9774-3107" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Ilan Timor-Tritsch,</span>
                                    </div>

                                    {/* Paolo Volpe */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-1492-8868" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Paolo Volpe,</span>
                                    </div>

                                    {/* Alberto Galindo */}
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
                                        <span className="text-blue-600 relative top-[1.5px]">Alberto Galindo,</span>
                                    </div>

                                    {/* Asma Khalil */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-2802-7670" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Asma Khalil,</span>
                                    </div>

                                    {/* Nicola Volpe */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-4209-5602" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Nicola Volpe,</span>
                                    </div>

                                    {/* Maria del Mar Gil */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-9993-5249" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Maria del Mar Gil,</span>
                                    </div>

                                    {/* Roee Birnbaum */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-1073-6348" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Roee Birnbaum,</span>
                                    </div>

                                    {/* Cecilia Villalain */}
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
                                        <span className="text-blue-600 relative top-[1.5px]">Cecilia Villalain,</span>
                                    </div>

                                    {/* Gustavo Malinger */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-0864-206X" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Gustavo Malinger</span>
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
                                    Clinical Practice Guidelines and Recommendations by World Association of Perinatal Medicine and Perinatal Medicine Foundation: Reporting Suspected Findings from Fetal Central Nervous System Examination. Perinatal Journal 2024;32(1):9-20 DOI: 10.59215/prn.24.0321006
                                    <br className="br" />
                                    <br className="br" />
                                    </p>
                                </div>
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                    <div className="text-[14px] font-normal leading-[4px]">
                                    <Link href="https://orcid.org/0000-0003-0196-0671" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                    </Link>
                                    &nbsp;Valentina De Robertis<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Results Interpreter, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-2822-6840" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Cihat Sen<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Results Interpreter, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-9774-3107" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Ilan Timor-Tritsch<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-1492-8868" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Paolo Volpe<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-1308-1474" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Alberto Galindo<sup>4</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-2802-7670" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Asma Khalil<sup>5</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-4209-5602" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Nicola Volpe<sup>6</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-9993-5249" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Maria del Mar Gil<sup>7</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-1073-6348" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Roee Birnbaum<sup>8</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-9456-4100" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Cecilia Villalain<sup>4</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-0864-206X" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Gustavo Malinger<sup>8</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Results Interpreter, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    </div>
                                </div>
                                <div className="br" />
                                <div className="br" />
                                <div id="manuscript-evaluation" className="text-[#333333]">
                                    <div className="text-[14px] font-normal leading-[20px]">
                                    1. Di Venere and Sarcone Hospitals, Fetal Medicine Unit, Bari, Italy
                                    <div className="br" />
                                    2. Perinatal Medicine Foundation and Istanbul Univeristy-Cerrahpasa, Department of Perinatal Medicine, Istanbul, Türkiye
                                    <div className="br" />
                                    3. Hackensack Meridian School of Medicine, Department Obstetrics and Gynecology, New Jersey, USA
                                    <div className="br" />
                                    4. Complutense University of Madrid, University Hospital 12 de Octubre, Maternal and Child Health and Development Network, Department of Obstetrics and Gynaecology, Fetal Medicine Unit, Madrid, Spain
                                    <div className="br" />
                                    5. St George University Hospital NHS Foundation Trust, Fetal Medicine Unit, London, UK
                                    <div className="br" />
                                    6. University of Parma, Unit of Surgical Sciences, Department of Medicine and Surgery, Department of Obstetrics and Gynecology, Parma, Italy
                                    <div className="br" />
                                    7. Hospital Universitario de Torrejón, Madrid, Spain; and Universidad Francisco de Vitoria, School of Medicine, Madrid, Spain
                                    <div className="br" />
                                    8. Lis Maternity & Women’s Hospital, Tel Aviv Sourasky Medical Center, OB-GYN Ultrasound Unit, and Tel Aviv University, School of Medicine, Tel Aviv, Israel
                                    <div className="br" />
                                    </div>
                                </div>
                                <h3 className="mt-4 font-semibold">Correspondence</h3>
                                <p>
                                    Cihat Sen, Perinatal Medicine Foundation and Istanbul Univeristy-Cerrahpasa, Department of Perinatal Medicine, Istanbul, Türkiye ,
                                    <br className="br" />
                                    <a href="mailto:csen@perinatalmedicine.org" className="text-blue-600 underline">
                                    csen@perinatalmedicine.org
                                    </a>
                                </p>

                                <h3 className="mt-4 font-semibold">Publication History</h3>
                                <ul className="list-disc pl-5">
                                    <li>Manuscript Received: February 13, 2024</li>
                                    <li>Last Revision Date: February 13, 2024</li>
                                    <li>Manuscript Accepted: February 13, 2024</li>
                                    <li>Earlyview Date: February 14, 2024</li>
                                    <li>Publication date: April 01, 2024</li>
                                </ul>

                                <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                                <h3 className="mt-4 font-semibold">Disclosure Statement</h3>
                                <p>
                                    The authors have no conflict of interests to declare. Funding Sources
                                    There was no funding for the preparation of this paper.
                                </p>
                                <h3 className="mt-4 font-semibold">Author Contributions</h3>
                                <p>
                                    Each author who contributed to the manuscript is mentioned by their initials. These guidelines were conceived by VD and CS. The draft manuscript was written by VD with the assistance from CS, PV, NV, IT, RB, AG, MG, CV, AK and GM. All authors bear responsibility for the accuracy and integrity of the contents, and all approved the final manuscript for submission.

                                    This guideline is published as a parallel publication in and by the courtesy of  the Fetal Diagnosis and Therapy, https://doi.org/10.1159/000535917 as a parallel publication
                                </p>
                        </div>


                    )}

                    {activeTab === "abstract" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Abstract</h2>

                            <p>
                                These guidelines follow the mission of the World Association of Perinatal Medicine, in collaboration with the Perinatal Medicine Foundation, which brings together groups and individuals worldwide, with the aim to improve prenatal detection of Central Nervous System anomalies and the appropriate referral of pregnancies with suspected fetal anomalies. In addition, this document provides further guidance for healthcare practitioners with the goal of standardizing the description of ultrasonographic abnormal findings.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Guidelines, anomaly scan, fetal central nervous system, fetal anomalies, ultrasound</p>
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
                            <p>Guideline</p>
                        </div>

                        {/* Pages */}
                        <div className="p-3">
                            <p className="font-semibold">Pages</p>
                            <p>9-20</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                February 14, 2024
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 32 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.24.0321006"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.24.0321006
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v32i1/Article1.pdf"
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
