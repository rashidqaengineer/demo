import Layout from '@/components/ui/Layout/layout'
import ModuleBox from '@/components/ui/modulebox/modulebox'
import Link from 'next/link'
import React from 'react'
import { FaThLarge, FaSearch, FaUserAlt, FaShareSquare, FaChevronRight } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GrLink } from "react-icons/gr";
import { Metadata } from 'next';
import SidebarModules from '@/components/ui/sidebarModules/sidebarModules';

export const metadata: Metadata = {
    title: 'Perinatal Journal - Contact Us',
    description: 'Perinatal Journal - Contact Us',
    icons: {
        icon: '/PMF logo yuvarlak trans.png',
    },
};

export default function page() {
    const editorialPolicies = [
        {
            id: "Mailing Address",
            title: "Mailing Address",
            content:
                (
                    <>
                        Perinatal Journal, Perinatal Medicine Foundation
                        <div className="br" />
                        Phone: +90 542 442 87 36
                        <div className="br" />
                        <a
                            href="mailto:office@perinatalmedicine.org"
                            className="text-[#0B5486] text-[14px] font-normal hover:underline"
                        >
                            Send e-mail
                        </a>
                    </>
                )
        },
        {
            id: "Principal Contact",
            title: "Principal Contact",
            content: (
                <>
                    Prof. Dr. Cihat Şen, Editor- in-Chief
                    <div className="br" />
                    <a
                        href="mailto:office@perinatalmedicine.org"
                        className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                        Send e-mail
                    </a>
                </>
            ),
        },
        {
            id: "Publisher",
            title: "Publisher",
            content: (
                <>
                    Perinatal Medicine Foundation
                    <div className="br" />
                    Phone: +90 542 442 87 36
                    <div className="br" />
                    office@perinatalmedicine.org
                    <div className="br" />
                    <a
                        href="mailto:office@perinatalmedicine.org"
                        className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                        Send e-mail
                    </a>
                </>
            ),
        },
        {
            id: "Advertising Contact",
            title: "Advertising Contact",
            content: (
                <>
                    Yasemin Guzel (Mrs.)
                    <div className="br" />
                    Perinatal Medicine Foundation
                    <div className="br" />
                    Phone: +90 542 442 87 36
                    <div className="br" />
                    <a
                        href="mailto:office@perinatalmedicine.org"
                        className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                        Send e-mail
                    </a>
                </>
            ),
        },
        {
            id: "Publication Service",
            title: "Publication Service",
            content: (
                <>
                    Cetus Publishing
                    <div className="br" />
                    info@perinatalmedicine.org
                    <div className="br" />
                    <a
                        href="mailto:info@perinatalmedicine.org"
                        className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                        Send e-mail
                    </a>
                </>
            ),
        }
    ];
    return (
        <div>
            <Layout
                sidebar={
                    <SidebarModules />
                }
            >
                <div className='w-full h-20 flex'>
                    <div className="home-body-text w-[100%] px-3 ">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-[24px] font-bold leading-[40px] text-[#0B5486] not-italic">
                                Publication Ethics
                            </h1>
                            <ul className="list-disc list-inside mb-10 space-y-2">
                                {editorialPolicies.map((policy) => (
                                    <li key={policy.id}>
                                        <a
                                            href={`#${policy.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {policy.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="">
                                {editorialPolicies.map((policy) => (
                                    <section
                                        key={policy.id}
                                        id={policy.id}
                                        className="scroll-mt-24 mt-7"
                                    >
                                        <h2 className="text-[14px] pb-2 font-bold leading-[20px] text-[#333333]">
                                            {policy.title}
                                        </h2>
                                        <p className="text-[14px] font-normal leading-[20px] text-[#333333]">
                                            {policy.content}
                                        </p>
                                        <div className="br" />
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}



