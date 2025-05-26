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
                        Effect of amniocentesis on feto-placental hemodynamics and fetal cardiac function: A comprehensive Doppler study
                    </h1>
                </div>

                        <div className="mb-6 text-sm flex flex-wrap gap-2">

                            {/* Sevim Tuncer Can */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0003-3119-1148" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Sevim Tuncer Can,</span>
                            </div>

                            {/* Hakan Golbasi */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0001-8682-5537" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Hakan Golbasi,</span>
                            </div>

                            {/* Burak Bayraktar */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0001-6233-4207" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Burak Bayraktar,</span>
                            </div>

                            {/* Ceren Saglam */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0001-6013-6602" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Ceren Saglam,</span>
                            </div>

                            {/* Raziye Torun */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0002-0002-0272-7196" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Raziye Torun,</span>
                            </div>

                            {/* Zubeyde Emiralioglu Cakir */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0001-8298-8363" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Zubeyde Emiralioglu Cakir,</span>
                            </div>

                            {/* Ilayda Gercik */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0001-7308-352X" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Ilayda Gercik,</span>
                            </div>

                            {/* Ilknur Gumus Toka */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0002-3804-2826" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Ilknur Gumus Toka,</span>
                            </div>

                            {/* Atalay Ekin */}
                            <div className="flex items-center space-x-2">
                                <Link href="https://orcid.org/0000-0002-4712-3927" target="_blank">
                                    <Image
                                        src={orchidIcon}
                                        alt="ORCID"
                                        width={16}
                                        height={16}
                                        className="inline ml-1"
                                    />
                                </Link>
                                <span className="text-blue-600 relative top-[1.5px]">Atalay Ekin</span>
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
                                    Effect of amniocentesis on feto-placental hemodynamics and fetal cardiac function: A comprehensive Doppler study. Perinatal Journal 2025;33(2):- DOI: 10.59215/prn.25.0332004
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">
                                    Author(s) Information
                                </h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link href="https://orcid.org/0000-0003-3119-1148" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline pb-[0.5px] ml-1"
                                        />
                                    </Link>
                                    &nbsp;Sevim Tuncer Can<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-8682-5537" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Hakan Golbasi<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-6233-4207" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Burak Bayraktar<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Analyst, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-6013-6602" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Ceren Saglam<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0002-0002-0272-7196" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Raziye Torun<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-8298-8363" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Zubeyde Emiralioglu Cakir<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Supervisor)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0001-7308-352X" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Ilayda Gercik<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Results Interpreter)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-3804-2826" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Ilknur Gumus Toka<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Results Interpreter)
                                    </span>
                                    <div className="br" />
                                    <Link href="https://orcid.org/0000-0002-4712-3927" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Atalay Ekin<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Final Reviewer)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Izmir City Hospital Department of Perinatology, Izmir, Turkiye
                                    <div className="br" />
                                    2. Ankara Etlik City Hospital Department of Perinatology, Ankara, Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Hakan Golbasi, Izmir City Hospital Department of Perinatology, Izmir, Turkiye
                                <br className="br" />
                                <a href="mailto:drhkngolbasi@gmail.com" className="text-blue-600 underline">
                                    drhkngolbasi@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: April 23, 2025</li>
                                <li>Manuscript Accepted: May 14, 2025</li>
                                <li>Earlyview Date: May 14, 2025</li>
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
                                This study aimed to evaluate the effects of mid-trimester amniocentesis, with or without transplacental needle passage, on fetal and placental hemodynamics and fetal cardiac function using comprehensive Doppler parameters.
                            </p>

                            <h3 className="mt-4 font-semibold">Methods</h3>
                            <p>
                                In this prospective cohort study, Doppler ultrasound examinations were performed immediately before and one hour after mid-trimester amniocentesis in 77 singleton pregnancies. Doppler parameters included uterine artery (UtA), umbilical artery (UA), middle cerebral artery (MCA), ductus venosus (DV), and left modified myocardial performance index (LMPI). Cases were further analyzed based on whether placental passage occurred during the procedure.
                            </p>

                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>
                                No significant differences were observed in Doppler indices (UtA, UA, MCA, DV) or LMPI measurements following amniocentesis (p&gt;0.05, for all parameters). Additionally, subgroup analysis revealed no significant impact of transplacental needle passage on fetal or placental hemodynamics and cardiac function.
                            </p>

                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>
                                Mid-trimester amniocentesis, performed with or without transplacental needle passage, does not adversely affect fetal or placental hemodynamics, including fetal cardiac function. These findings support the safety and clinical reliability of the procedure.
                            </p>

                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Amniocentesis, Doppler ultrasonography, fetal hemodynamics, myocardial performance index, fetal cardiac function</p>

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
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-23-113133.jpg" target="_blank">
                                                Figure 1<i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Figure 1
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
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-23-113209.jpg" target="_blank">
                                                Figure 2<i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Figure 2
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
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-23-113238.jpg" target="_blank">
                                                Figure 3<i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Figure 3
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
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-23-113258.jpg" target="_blank">
                                                Figure 4<i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Figure 4
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
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-23-113326.jpg" target="_blank">
                                                Figure 5<i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Figure 5
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
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-12-080104.docx" target="_blank">
                                                Table 1 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Demographic and medical characteristics of patients
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
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-12-080138.docx" target="_blank">
                                                Table 2 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Doppler, AFI, and LMPI measurements before and after amniocentesis
                                        </td>
                                        </tr>
                                        {/* Table 3 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-12-080201.docx" target="_blank">
                                                Table 3 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Doppler, AFI, and LMPI measurements before and after amniocentesis for subgroup patients without placental passing
                                        </td>
                                        </tr>

                                        {/* Table 4 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-12-080219.docx" target="_blank">
                                                Table 4 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Doppler, AFI, and LMPI measurements before and after amniocentesis for subgroup patients with placental passing
                                        </td>
                                        </tr>
                                        {/* Response */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-08-110215.docx" target="_blank">
                                                Response <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Response
                                        </td>
                                        </tr>
                                        {/* 	Main text */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-05-12-081659.docx" target="_blank">
                                                	Main text <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            	Main text
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
                                href="https://dx.doi.org/10.59215/prn.25.0332004"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0332004
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
