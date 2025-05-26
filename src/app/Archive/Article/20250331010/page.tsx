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
                        Sociodemographic and obstetric risk factors for postpartum depression
                    </h1>
                </div>

                            <div className="mb-6 text-sm flex flex-wrap gap-2">
                                {/* Koray Özbay */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://orcid.org/0000-0002-1640-3176" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    <span className="text-blue-600 relative top-[1.5px]">Koray Özbay,</span>
                                </div>

                                {/* İsmail Bağlar */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://orcid.org/0009-0008-0619-7111" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    <span className="text-blue-600 relative top-[1.5px]">İsmail Bağlar,</span>
                                </div>

                                {/* Sahra Sultan Kara */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://orcid.org/0000-0001-5122-829X" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    <span className="text-blue-600 relative top-[1.5px]">Sahra Sultan Kara,</span>
                                </div>

                                {/* Esra Keles */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://orcid.org/0000-0001-8099-8883" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    <span className="text-blue-600 relative top-[1.5px]">Esra Keles,</span>
                                </div>

                                {/* Fatih Şanlıkan */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://orcid.org/0000-0002-3166-7129" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    <span className="text-blue-600 relative top-[1.5px]">Fatih Şanlıkan</span>
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
                                    Sociodemographic and obstetric risk factors for postpartum depression. Perinatal Journal 2025;33(1):50-56 DOI: 10.59215/prn.25.0331010
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link href="https://orcid.org/0000-0002-1640-3176" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                    </Link>
                                    &nbsp;Koray Özbay<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Study Supervisor, Data Collector, Data Analyst, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0009-0008-0619-7111" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;İsmail Bağlar<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-5122-829X" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Sahra Sultan Kara<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-8099-8883" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Esra Keles<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-3166-7129" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Fatih Şanlıkan<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Data Collector, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Yüzyıl Gebze Hospital Department of Obstetrics and Gynecology, Kocaeli, Turkiye
                                    <div className="br" />
                                    2. University of Health Sciences, Kartal Lütfi Kırdar City Hospital Department of Obstetrics and Gynecology, Istanbul, Turkiye
                                    <div className="br" />
                                    3. University of Health Sciences, Kartal Lütfi Kırdar City Hospital Department of Gynecologic Oncology, Istanbul, Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Esra Keles, University of Health Sciences, Kartal Lütfi Kırdar City Hospital Department of Gynecologic Oncology, Istanbul, Turkiye
                                <br className="br" />
                                <a href="mailto:dresrakeles@gmail.com" className="text-blue-600 underline">
                                    dresrakeles@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: February 03, 2025</li>
                                <li>Manuscript Accepted: April 02, 2025</li>
                                <li>Earlyview Date: April 02, 2025</li>
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
                                To examine the impact of sociodemographic and obstetric factors on the outcomes of postpartum depression (PPD).
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                This cross-sectional study was conducted on women attending routine obstetric and gynecologic follow-up visits at 6–8 weeks postpartum from April 2024 to December 2024. Sociodemographic and obstetric data were collected through structured questionnaires and medical records. PPD was assessed using the Turkish version of the Edinburgh Postpartum Depression Scale (EPDS), with a cutoff score of 13 for diagnosis.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                A total of 489 women with a mean age of 30.04 ± 4.54 years were included. Significant associations were found between postpartum depression (PPD) and maternal age (p = 0.049), BMI (p = 0.002), parity (p = 0.025), and gestational age (p = 0.016). Women over 40 years, those with higher BMI, and nulliparous women had higher rates of PPD. No significant relationships were observed between PPD and educational level, employment status, mode of delivery, blood type, birth weight, or baby gender.
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                The findings of the study suggest maternal age, BMI, parity, and gestational age as significant risk factors for postpartum depression. These factors should be prioritized in screening programs to enable early detection and intervention.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Postpartum depression, maternal health, preterm birth, body mass index, parity</p>
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
                            <p>50-56</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                April 02, 2025
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 33 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0331010"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331010
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v33i1/Article10.pdf"
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
