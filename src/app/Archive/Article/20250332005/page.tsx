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
                        Pruritic urticarial papules and plaques in pregnancy following the second in vitro fertilization cycle: A case report
                    </h1>
                </div>

                            <div className="mb-6 text-sm flex flex-wrap gap-2">

                                {/* Simge Berrak Beyoglu Oruc */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://orcid.org/0000-0002-2400-0772" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    <span className="text-blue-600 relative top-[1.5px]">Simge Berrak Beyoglu Oruc,</span>
                                </div>

                                {/* Deniz Ghasemi Mohammadrezaloo */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://orcid.org/0009-0003-5269-7612" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    <span className="text-blue-600 relative top-[1.5px]">Deniz Ghasemi Mohammadrezaloo,</span>
                                </div>

                                {/* Nur Dokuzeylül Güngör */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://orcid.org/0000-0002-7234-3876" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    <span className="text-blue-600 relative top-[1.5px]">Nur Dokuzeylül Güngör</span>
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
                                    Pruritic urticarial papules and plaques in pregnancy following the second in vitro fertilization cycle: A case report. Perinatal Journal 2025;33(2):- DOI: 10.59215/prn.25.0332005
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">
                                    Author(s) Information
                                </h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link href="https://orcid.org/0000-0002-2400-0772" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline pb-[0.5px] ml-1"
                                        />
                                    </Link>
                                    &nbsp;Simge Berrak Beyoglu Oruc<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Study Designer, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0009-0003-5269-7612" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Deniz Ghasemi Mohammadrezaloo<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Literature Researcher, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-7234-3876" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Nur Dokuzeylül Güngör<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Literature Researcher, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Bahcesehir University Medicalpark Göztepe Hospital Department of Obstetric and Gynecology İSTANBUL Turkiye
                                    <div className="br" />
                                    2. Bahcesehir University, Faculty of Medicine Department of Obstetrics and Gynaecology İSTANBUL Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Simge Berrak Beyoglu Oruc, Bahcesehir University Medicalpark Göztepe Hospital Department of Obstetric and Gynecology İSTANBUL Turkiye
                                <br className="br" />
                                <a href="mailto:berrakbeyoglu@gmail.com" className="text-blue-600 underline">
                                    berrakbeyoglu@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: March 26, 2025</li>
                                <li>Manuscript Accepted: May 15, 2025</li>
                                <li>Earlyview Date: May 15, 2025</li>
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
                                This report discusses a case of pruritic urticarial papules and plaques in pregnancy, which primarily affects primigravidas in the 3rd trimester of pregnancy or the postpartum period. Although factors such as assisted reproductive technology and multiple pregnancies contribute to its development, the exact mechanisms are unclear.
                            </p>

                            <h3 className="mt-4 font-semibold">Case(s)</h3>
                            <p>
                                In our case, the patient developed a widespread eruption of pruritic, erythematous papules and plaques that started on the abdomen and spread to the extremities. The plaques regressed spontaneously within 10 days after the surgery.
                            </p>

                        
                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                We aim to demonstrate that when a thorough differential diagnosis is conducted, and it is confirmed that there is no underlying organic cause for pregnancy-related plaques, spontaneous regression of the plaques can be anticipated without the need for treatment.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Pruritic urticarial plaques, plaques of pregnancy, assisted reproductive technology</p>

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

                                        {/* Figure */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-03-26-020052.jpg" target="_blank">
                                                Figure-1<i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            (a) Polymorphic plaques on the right lower extremity; (b) Polymorphic plaques on both lower extremities.
                                        </td>
                                        </tr>
                                        {/* Figure */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-03-26-020120.jpg" target="_blank">
                                                Figure 2<i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            (a) Individual papules or clusters of papules coalescing into larger plaques; (b) Plaques characterized by a distinct lighter halo.
                                        </td>
                                        </tr>
                                       
                                        {/* Table 1 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-03-26-020308.docx" target="_blank">
                                                Table 1 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Preoperative laboratory results
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
                                href="https://dx.doi.org/10.59215/prn.25.0332005"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0332005
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
