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
                        Management of preterm labor clinical practice guideline and recommendation by the WAPM-World Association of Perinatal Medicine and the PMF-Perinatal Medicine Foundation
                    </h1>
                </div>

                <div className="mb-6 text-sm flex gap-1">
                    <div className="flex items-center pl-6 space-x-2">
                        <Link
                            href="https://orcid.org/0000-0002-5681-3647"
                            target="_blank"
                        >
                            <Image
                                src={orchidIcon}
                                alt="ORCID"
                                width={16}
                                height={16}
                                className="inline ml-1"
                            />
                        </Link>
                        <div
                            className=" text-blue-600 relative top-[1.5px]"
                        >
                            Themistoklis Dagklis,
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                        <Link
                            href="https://orcid.org/0000-0002-8503-7915"
                            target="_blank"
                        >
                            <Image
                                src={orchidIcon}
                                alt="ORCID"
                                width={16}
                                height={16}
                                className="inline ml-1"
                            />
                        </Link>
                        <div
                            className=" text-blue-600 relative top-[1.5px] "
                        >
                            Özge Özalp Berkarda,
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                        <Link
                            href="https://orcid.org/0000-0003-2634-7136"
                            target="_blank"
                        >
                            <Image
                                src={orchidIcon}
                                alt="ORCID"
                                width={16}
                                height={16}
                                className="inline ml-1"
                            />
                        </Link>
                        <div
                            className="  text-blue-600 relative top-[1.5px]"
                        >
                            Esra Arun Özer
                        </div>
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
                                    Management of preterm labor clinical practice guideline and recommendation by the WAPM-World Association of Perinatal Medicine and the PMF-Perinatal Medicine Foundation. Perinatal Journal 2023;31(3):164-177 DOI: 10.59215/prn.23.0313009
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">
                                    Author(s) Information
                                </h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link
                                        href="https://orcid.org/0000-0002-5681-3647"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline pb-[0.5px] ml-1"
                                        />
                                    </Link>
                                    &nbsp;Themistoklis Dagklis1,<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Study Supervisor, Results
                                        Interpreter, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-8503-7915"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Özge Özalp Berkarda,<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Data Analyst, Literature
                                        Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-8503-7915"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Esra Arun Özer<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Literature Researcher, Final
                                        Reviewer)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1.Third Department of Obstetrics and Gynaecology, Faculty of Health Sciences, School of Medicine, Aristotle University of Thessaloniki, Thessaloniki, Greece{" "}
                                    <div className="br" />
                                    2. Manisa Celal Bayar University Medical School Department
                                    of Pediatrics Manisa Turkiye
                                    <div className="br" />
                                    3. Izmir Tinaztepe University Medical School Izmir Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Cihat Sen, Perinatal Medicine Foundation, Istanbul, Turkey and Department of Perinatal Medicine, Memorial BAH Hospital, Istanbul, Turkey , {" "}
                                <div className="br" />
                                <a
                                    href="mailto:csen@perinatalmedicine.org"
                                    className="text-blue-600 underline"
                                >
                                    csen@perinatalmedicine.org
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: November 02, 2023</li>
                                <li>Accepted: December 19, 2024</li>
                                <li>Early View: December 29, 2024</li>
                                <li>Published: April 28, 2025</li>
                            </ul>

                            <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                            <p>This guideline is published as a parallel publication in and by the courtesy of  the European Journal of Obstetrics and Gynecology and Reproductive Biology, https://doi.org/10.1016/j.ejogrb.2023.10.013 as a parallel publication.</p>
                        </div>
                    )}

                    {activeTab === "abstract" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Abstract</h2>
                            <p>
                                Although postnatal hepatitis B vaccine and hepatitis B
                                immunoglobulin are administered to infants of hepatitis B
                                carrier mothers...
                            </p>
                            {/* Add full abstract content here as needed */}
                        </div>
                    )}

                    {activeTab === "fulltext" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Full Text</h2>
                            <p>[Insert full text content here]</p>
                        </div>
                    )}

                    {activeTab === "references" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">References</h2>
                            <p>[Insert references here with proper citation links]</p>
                            <ul>
                                <li>sdjfj</li>
                                <li>sdjfj</li>
                                <li>sdjfj</li>
                            </ul>
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
                                    <tr>
                                        <td className="pull-center">
                                            {/* file svg  */}
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                                                <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                                <Link
                                                    className="pl-1"
                                                    download={true}
                                                    href="/content/appendix/vol33iss1/Article1.pdf"
                                                    target="_blank"
                                                >
                                                    Table 1 <i className="icon-share"></i>
                                                </Link>
                                            </strong>{" "}
                                            <div className="br" />
                                            Demographic Characteristics of the Study Group
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
                        {/* Article's Type */}
                        <div className="p-3">
                            <p className="font-semibold">Article's type</p>
                            <p>Original Article</p>
                        </div>

                        {/* Pages */}
                        <div className="p-3">
                            <p className="font-semibold">Pages</p>
                            <p>1–4</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                December 29, 2024
                            </p>
                            <p>Perinatal Journal 2025; 33 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0331001"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331001
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
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
                    </div>
                </div>

            </div>
        </div>
    );
}
