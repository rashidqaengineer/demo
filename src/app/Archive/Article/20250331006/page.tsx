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
                        Does preoperative tranexamic acid use in placenta previa have a positive effect on the results?
                    </h1>
                </div>

                               <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Ahmet Zeki Nessar */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-2985-0212" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Ahmet Zeki Nessar,</span>
                                    </div>

                                    {/* Mürşide Çevikoğlu Kıll */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-0007-2816" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Mürşide Çevikoğlu Kıll,</span>
                                    </div>

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

                                    {/* Ayhan Coşkun */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-2887-9649" target="_blank">
                                            <Image
                                                src={orchidIcon}
                                                alt="ORCID"
                                                width={16}
                                                height={16}
                                                className="inline ml-1"
                                            />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Ayhan Coşkun</span>
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
                                    Does preoperative tranexamic acid use in placenta previa have a positive effect on the results?. Perinatal Journal 2025;33(1):28-33 DOI: 10.59215/prn.25.0331006
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">Author(s) Information</h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link href="https://orcid.org/0000-0003-2985-0212" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline pb-[0.5px] ml-1" />
                                    </Link>
                                    &nbsp;Ahmet Zeki Nessar<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Supervisor, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0003-0007-2816" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Mürşide Çevikoğlu Kıll<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-6849-2193" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Fikriye Işıl Adıgüzel<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Data Collector)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-2887-9649" target="_blank">
                                        <Image src={orchidIcon} alt="ORCID" width={16} height={16} className="inline ml-1" />
                                    </Link>
                                    &nbsp;Ayhan Coşkun<sup>4</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Osmaniye State Hospital Department of Obstetrics and Gynecology, Division of Perinatology Osmaniye Turkiye
                                    <div className="br" />
                                    2. Mersin University Faculty of Medicine Department of Obstetrics and Gynecology, Division of Gynecological Oncology Surgery Mersin Turkiye
                                    <div className="br" />
                                    3. University of Health Science Adana City Training and Research Hospital Department of Obstetrics and Gynecology Adana Turkiye
                                    <div className="br" />
                                    4. Mersin University Faculty of Medicine Department of Obstetrics and Gynecology, Division of Perinatology Mersin Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Ahmet Zeki Nessar, Osmaniye State Hospital Department of Obstetrics and Gynecology, Division of Perinatology Osmaniye Turkiye,
                                <br className="br" />
                                <a href="mailto:zekinessar@gmail.com" className="text-blue-600 underline">
                                    zekinessar@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: February 03, 2025</li>
                                <li>Manuscript Accepted: March 05, 2025</li>
                                <li>Earlyview Date: March 06, 2025</li>
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
                                To investigate the effect of preoperative tranexamic acid administration in patients undergoing surgery with the diagnosis of placenta previa.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                162 patients performed surgery with the diagnosis of total placenta previa were included in the study. The study group included 79 patients who got tranexamic acid before surgery and 83 control individuals who did not. Patient demographics, obstetric and laboratory characteristics, blood product requirements, surgery length, further surgical procedures, hospital stay, and fetal outcomes were compared between groups.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                There was no significant difference between groups in terms of intraoperative erythrocyte suspension transfusion (p=0.128). Postoperative erythrocyte suspension transfusion requirement was significantly higher in the study group compared to the control group (p&lt;0.001). Total erythrocyte suspension and total fresh frozen plasma transfusion requirement in the study group were significantly higher than the control group (p&lt;0.001). The use of compression suture, uterine lower segment resection and bilateral hypogastric artery ligation were significantly higher in the study group compared to the control group (p&lt;0.001). Preoperative and postoperative Hb and Htc values in the control group were statistically significantly higher than in tranexamic acid group (p&lt;0.05). The difference between preoperative and postoperative Hb, Htc values was higher in the control group, while this difference was significantly less in favor of TA group (p = &lt;0.001). No statistically significant difference was observed between the groups in terms of fetal outcomes (p&gt;0.05).
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                Prophylactic tranexamic acid, used obstetrically to minimize bleeding risk, has no impact on placenta previa, a high-risk bleeding condition.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Placenta previa, postpartum hemorrhage, tranexamic acid.</p>
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
                            <p>28-33</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                March 06, 2025
                            </p>
                        </div>
                        <div className="p-3">
                            <p>Perinatal Journal 2025; 33 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0331006"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331006
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/v33i1/Article6.pdf"
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
