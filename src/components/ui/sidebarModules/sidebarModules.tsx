import React from 'react'
import ModuleBox from '../modulebox/modulebox'
import Link from 'next/link'
import { FaChevronRight, FaThLarge } from 'react-icons/fa'
import { FaShareFromSquare } from 'react-icons/fa6'
import { RiInformation2Fill } from 'react-icons/ri'

export default function SidebarModules() {
    return (
        <div>
            <ModuleBox>
                {[
                    "About Perinatal Journal",
                    "Editorial Board",
                    "Author Guidelines",
                    "Article Processing Charge",
                    "Editorial Policies",
                    "Publication Ethics",
                    "Contact Us",
                ].map((item, idx, arr) => (
                    <Link
                        key={idx}
                        href={"/Info/" + item.replaceAll(" ", "-").toLowerCase()}
                        className={`block px-2 py-1 hover:bg-gray-100 flex items-start text-[#777777] text-sm font-normal leading-6 ${idx !== arr.length - 1 ? "border-b border-gray-200" : ""
                            }`}
                    >
                        <span className="mr-2 text-[#777777] text-base">
                            <FaChevronRight />
                        </span>
                        {item}
                    </Link>
                ))}
            </ModuleBox>

            <ModuleBox title="Archive" icon={<FaThLarge />}>
                <ul>
                    <li><Link href="/Archive/issue/288">Current Issue</Link></li>
                    <li><Link href="/Archive/early-view">Early View</Link></li>
                    <li><Link href="/Archive/issue">All Issues</Link></li>
                </ul>
            </ModuleBox>
            <ModuleBox title="Submission" icon={<FaShareFromSquare />}>
                <ul>
                    <li>
                        <a href="/Info/about-perinatal-journal">
                            About Perinatal Journal
                        </a>
                    </li>
                    <li>
                        <a href="/Info/author-guidelines">Author Guidelines</a>
                    </li>
                </ul>
                <div className="mt-4">
                    <i className="mt-5">Please ensure that all correspondence regarding articles is submitted as email attachments to info@perinataljournal.com</i>
                </div>
            </ModuleBox>
            <ModuleBox
                title="Journal Information"
                icon={<RiInformation2Fill />}
            >
                <p>
                    <strong>Online ISSN</strong>
                    <div className="br" />
                    1305-3124
                </p>
                <p>
                    <strong>Established</strong>
                    <div className="br" />
                    1993
                </p>
                <p>
                    <strong>Editors-in-Chief</strong>
                    <div className="br" />
                    Cihat Şen,  Nicola Volpe
                </p>
                <p>
                    <strong>Editors</strong>
                    <div className="br" />
                    Cecilia Villalain, Daniel Rolnik, M. Mar Gil
                </p>
                <p>
                    <strong>Managing Editors</strong>
                    <div className="br" />
                    Murat Yayla
                </p>
                <p>
                    <strong>Statistics Editor</strong>
                    <div className="br" />
                    Resul Arısoy
                </p>
                <div className="text-center" style={{ margin: "15px 0" }}>
                    <img src="/open-access.png" alt="Open Access" />
                    <img src="/doaj.jpg" alt="DOAJ" />
                    <img src="/google-scholar.jpg" alt="Google Scholar" />
                    <img src="/ebsco.jpg" alt="EBSCO" />
                    <img src="/ulakbim.jpg" alt="Ulakbim" />
                    <img src="/scopus-logo.jpg" alt="Scopus" />
                </div>
            </ModuleBox>
        </div>
    )
}
