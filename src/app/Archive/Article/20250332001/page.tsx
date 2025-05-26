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
                        Investigation of M3 Muscarinic Acetylcholine Receptor Expression in Placentas of Smoking Women
                    </h1>
                </div>

                                <div className="mb-6 text-sm flex flex-wrap gap-2">
                                    {/* Esma Yıldırım */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0004-1818-2110" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Esma Yıldırım,</span>
                                    </div>

                                    {/* Gül Ebru Aydeniz Acar */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0009-0003-1323-640X" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Gül Ebru Aydeniz Acar,</span>
                                    </div>

                                    {/* Zeynep Türe */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-5114-0121" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Zeynep Türe,</span>
                                    </div>

                                    {/* Ayşegül Aşır */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0001-9056-144X" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Ayşegül Aşır,</span>
                                    </div>

                                    {/* Fırat Aşır */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0002-6384-9146" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Fırat Aşır,</span>
                                    </div>

                                    {/* Tuğcan Korak */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="https://orcid.org/0000-0003-4902-4022" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Tuğcan Korak,</span>
                                    </div>

                                    {/* Serhat Ege */}
                                    <div className="flex items-center space-x-2">
                                        <Link href="#https://orcid.org/0000-0001-5430-602x" target="_blank">
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                        </Link>
                                        <span className="text-blue-600 relative top-[1.5px]">Serhat Ege</span>
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
                                    Investigation of M3 Muscarinic Acetylcholine Receptor Expression in Placentas of Smoking Women. Perinatal Journal 2025;33(2):- DOI: 10.59215/prn.25.0332001
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
                                        href="https://orcid.org/0009-0004-1818-2110"
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
                                    &nbsp;Esma Yıldırım,<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Results Interpreter, Literature Researcher, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0009-0003-1323-640X"
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
                                    &nbsp;Gül Ebru Aydeniz Acar<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Supervisor, Data Collector, Manuscript Writer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-5114-0121"
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
                                    &nbsp;Zeynep Türe<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Supervisor, Literature Researcher, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0001-9056-144X"
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
                                    &nbsp;Ayşegül Aşır<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Data Analyst, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-6384-9146"
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
                                    &nbsp;Fırat Aşır<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Project Initiator, Data Analyst, Results Interpreter, Manuscript Writer, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                     <Link
                                        href="https://orcid.org/0000-0003-4902-4022"
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
                                    &nbsp;Tuğcan Korak<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Data Analyst, Literature Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0001-5430-602x"
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
                                    &nbsp;Serhat Ege<sup>4</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Data Collector, Data Analyst)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Dicle University, Faculty of Medicine Department of Histology and Embryology Diyarbakır Turkiye
                                    <div className="br" />
                                    2. Gazi Yaşargil Training and Research Hospital Division of Pediatrics Diyarbakır Turkiye
                                    <div className="br" />
                                    3. Kocaeli University Faculty of Medicine, Department of Medical Biology Kocaeli Turkiye
                                    <div className="br" />
                                    4. Gazi Yaşargil Training and Research Hospital Obstetrics and Gynecology Diyarbakır Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Fırat Aşır, Dicle University, Faculty of Medicine Department of Histology and Embryology Diyarbakır Turkiye, {" "}
                                <br className="br" />
                                <a
                                    href="mailto:firatasir@gmail.com"
                                    className="text-blue-600 underline"
                                >
                                    firatasir@gmail.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Manuscript Received: March 26, 2025</li>
                                <li>Accepted: May 04, 2025</li>
                                <li>Early View: May 05, 2025</li>
                            
                            </ul>

                            <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                            <p>No conflicts declared.</p>
                        </div>
                    )}

                    {activeTab === "abstract" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Abstract</h2>
                                <h3 className="mt-4 font-semibold">Objective</h3>  
                            <p>This study examined M3 muscarinic acetylcholine receptor expression in placentas of women who smoked during pregnancy and explored the affected signaling pathways 
                                via network and functional annotation analyses.</p>
                            <h3 className="mt-4 font-semibold">Methods</h3>
                                    <p>Placenta samples from 45 control subjects and 45 individuals who smoked during pregnancy were fixed in zinc-formalin and 
                                embedded in paraffin. Demographic data were recorded. Sections from the paraffin blocks were stained using Hematoxylin-Eosin and 
                                subjected to M3 muscarinic acetylcholine receptor immunostaining. Protein interaction networks were constructed with 
                                Cytoscape and analyzed with MCODE for module detection, while Enrichr was used for functional annotation.</p>
                            <h3 className="mt-4 font-semibold">Results</h3>
                            <p>Histopathological analysis revealed significant degeneration in chorionic villi, 
                            increased fibrin deposition, a rise in syncytial knots, and vascular alterations, indicating that smoking 
                            adversely affects placental structure. In placental components, M3 muscarinic acetylcholine receptor immunoreactivity was
                            mostly absent in the trophoblastic layer, syncytial knots, villous stroma, chorionic capillaries, and fibrin-rich areas. 
                            In the control group, moderate M3 muscarinic acetylcholine receptor expression was noted in connective tissue 
                            cells, whereas the trophoblastic layer and vascular structures displayed little reactivity. Conversely, 
                            placental sections from the smoking group showed a pronounced reduction in M3 muscarinic acetylcholine receptor
                            expression, with a negative immunoreaction in key areas. Module and reactome pathway analysis indicated that Module 2, enriched 
                            in nicotinic acetylcholine receptor signaling, may mediate smoking-induced placental dysfunction. Additionally, Modules 1 and 
                            3 were linked to GPCR and neurotransmitter pathways, respectively {"p < 0.05"}.</p>
                            
                            <h3 className="mt-4 font-semibold">Conclusion</h3>
                            <p>The diminished M3 muscarinic acetylcholine receptor expression appears to disrupt placental function 
                            via altered nicotinic receptor signaling, potentially affecting vascular tone and nutrient exchange.</p>
                            
                            <h3 className="mt-4 font-semibold">Keywords</h3>
                            <p>Pregnancy, smoking, muscarinic, placenta, nicotine</p>
                            
                           
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

                                        {/* IRB - Ethics Committee Approval */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/IRB.jpeg" target="_blank">
                                                IRB <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Ethics Committee Approval
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
                                            <Link download href="/content/appendix/earlyview//PF-2025-04-28-112956.docx" target="_blank">
                                                Table 1 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Demographic parameters, measurements and pregnancy outcomes of the patients
                                        </td>
                                        </tr>

                                        {/* Figure 1 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-28-113024.jpg" target="_blank">
                                                Figure 1 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Cross sections of placenta from control (A) and smoking groups (B). Arrow: syncytial knot, arrowhead: chorionic villus, *: chorionic capillary, ct: villous connective tissue. Hematoxylin Eosin staining, Bar: 50 µm, magnification: 20X
                                        </td>
                                        </tr>

                                        {/* Figure 2 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-28-113211.jpg" target="_blank">
                                                Figure 2 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Placental section of the control group (A) and smoking group (B). Arrow: trophoblastic layer, *: syncytial knot, star: villous connective tissue, f: fibrin, M3 mAChR immunostaining, Bar: 50 µm, magnification: 20X
                                        </td>
                                        </tr>

                                        {/* Figure 3 */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-28-113237.tif" target="_blank">
                                                Figure 3 <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            M3 mAChR Protein Interaction Network and Functional Modules. The network identified three modules: Module 1 (31 nodes, 379 edges), Module 2 (13 nodes, 30 edges), Module 3 (8 nodes, 19 edges). Statistically significant Reactome pathways are shown for each (p &lt; 0.05).
                                        </td>
                                        </tr>

                                        {/* Full Manuscript */}
                                        <tr>
                                        <td className="pull-center width">
                                            <svg className="pl-4 pb-4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30">
                                            <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                                            </svg>
                                        </td>
                                        <td className="pl-3">
                                            <strong>
                                            <Link download href="/content/appendix/earlyview/PF-2025-04-28-113352.docx" target="_blank">
                                                Full Manuscript <i className="icon-share"></i>
                                            </Link>
                                            </strong>
                                            <br />
                                            Complete version of the manuscript
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
                                href="https://dx.doi.org/10.59215/prn.25.0332001"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0332001
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
