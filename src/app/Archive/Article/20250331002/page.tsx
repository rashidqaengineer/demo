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
                        Assessment of Xenopsin Related Peptide-1 levels in pregnant women with gestational diabetes mellitus
                    </h1>
                </div>

                               <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Emre Ağdemir */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0000-2872-6186" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Emre Ağdemir,</span>
                                    </div>

                                    {/* Melda Kuyucu */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-4126-0541" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Melda Kuyucu, </span>
                                    </div>

                                    {/* Mehtap Yücedağ */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-4382-3192" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Mehtap Yücedağ, </span>
                                    </div>

                                    {/* Kamile Kübra Ağdemir */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0004-2282-3275" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Kamile Kübra Ağdemir</span>
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
                                Assessment of Xenopsin Related Peptide-1 levels in pregnant women with gestational diabetes mellitus. Perinatal Journal 2025;33(1):5-10 DOI: 10.59215/prn.25.0331002
                                <br className="br" />
                                <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                <Link href="https://orcid.org/0009-0000-2872-6186" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                </Link>
                                &nbsp;Emre Ağdemir<sup>1</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Study Designer, Data Analyst, Manuscript Writer)
                                </span>
                                <div className="br" />
                                <Link href="https://orcid.org/0000-0002-4126-0541" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                </Link>
                                &nbsp;Melda Kuyucu<sup>2</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Study Supervisor, Results Interpreter, Manuscript Writer, Final Reviewer)
                                </span>
                                <div className="br" />
                                <Link href="https://orcid.org/0000-0002-4382-3192" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                </Link>
                                &nbsp;Mehtap Yücedağ<sup>3</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Project Initiator, Study Designer, Data Collector)
                                </span>
                                <div className="br" />
                                <Link href="https://orcid.org/0009-0004-2282-3275" target="_blank">
                                    <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                </Link>
                                &nbsp;Kamile Kübra Ağdemir<sup>1</sup>
                                <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                    &nbsp;(Data Collector, Results Interpreter, Literature Researcher)
                                </span>
                                <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                1. Karasu State Hospital Department of Obstetrics and Gynecology Sakarya Turkiye
                                <div className="br" />
                                2. Bezmialem Vakif University Medical Faculty Department of Obstetrics and Gynecology istanbul Turkiye
                                <div className="br" />
                                3. Umraniye Training and Research Hospital Department of Obstetrics and Gynecology istanbul Turkiye
                                <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Emre Ağdemir, Karasu State Hospital Department of Obstetrics and Gynecology Sakarya Turkiye,
                                <br className="br" />
                                <a href="mailto:emreagdemir118@gmail.com" className="text-blue-600 underline">
                                emreagdemir118@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: December 13, 2024</li>
                                <li>Manuscript Accepted: January 10, 2025</li>
                                <li>Earlyview Date: January 10, 2025</li>
                                <li>Publication date: April 28, 2025</li>
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
                                To compare serum Xenopsin-Related Peptide-1 (XP-1) levels in pregnant women diagnosed with gestational diabetes mellitus (GDM) versus healthy pregnant controls.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                This prospective cohort study included pregnant women attending the Gynecology and Obstetrics outpatient clinic at Health Sciences University (SBU) Ümraniye Training and Research Hospital between April 1, 2023, and October 1, 2023. Pregnancies were between 24–28 weeks of gestation, aged 18–45 years, with singleton pregnancies, and without chronic systemic diseases. Following a 75 g oral glucose tolerance test (OGTT), 44 women were diagnosed with GDM, while 44 women without GDM were classified as controls. Serum XP-1 levels were assessed and compared between the groups. Blood samples were collected into anticoagulant-free tubes, centrifuged (2000–3000 rpm, 10 minutes), and serum samples were stored at -80°C until analysis. On the day of measurement, thawed samples were evaluated using the ELISA method with a commercial kit.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                Pregnancies in the GDM group were significantly older than those in the control group (p = 0.001). However, no statistically significant differences were observed between the groups regarding BMI at blood collection, pre-pregnancy BMI, weight gain, molecular XP-1 levels, or history of GDM (p &gt; 0.05). Serum XP-1 levels ranged from 0.2 to 8.63 ng/mL, with a mean of 2.52 ± 1.81 ng/mL. XP-1 levels showed no significant association with treatment agents, BMI, pre-pregnancy BMI, weight gain, abdominal circumference (AC), or estimated fetal weight (EFW) at the time of blood collection (p &gt; 0.05).
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                We found no significant association between serum XP-1 levels and GDM. Older maternal age was more prevalent in the GDM group. Further multidisciplinary, prospective studies are recommended to explore the potential role of XP-1 in pregnancy and GDM.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Gestational diabetes mellitus, OGTT, Xenopsin Related Peptide-1</p>
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
                            <p>5-10</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                January 10, 2025
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 33 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0331002"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331002
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
