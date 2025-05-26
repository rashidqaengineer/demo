import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 16, Issue-2, August 2008"
                pageRange="43-72"
                description="Perinatal Journal is an international, online open access, peer-reviewed scientific journal (e-ISSN: 1305-3124). The journal is the official publication of Perinatal Medicine Foundation. It is published three times a year in April, August and December. The publication language of the journal is English."
                imageUrl="/images/perinatal-journal-small-en-US.jpg"
            />

            <h1 className="issue-table-of-contents bg-[#efefef] text-[#3d3d3d] text-[14pt] py-3 px-3 font-bold mt-2">
                Table of Contents
            </h1>

            <ul className="issue-article-list">
                {/* Article 1 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article//20080162001">
                            The effects of the pre-pregnancy maternal body mass index on the pregnancy outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">43-48</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Özgür Dundar, Tolga Çiftpınar, Levent Tütüncü, Ali Rüştü Ergür, Mehmet Vedat Atay, Ercüment Müngen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article//20080162002">
                            The role of maternal serum adiponectin levels in screening and diagnosis of gestational diabetes mellitus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">49-55</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Abdullah Göymen, Tarık Altınok, Seyfettin Uludağ, Cihat Şen, Fahri Öçer, Hafize Uzun, Mahmut Öncül, Onur Güralp
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (2)</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article//20080162003">
                            Infant deaths and stillbirths in Samsun province in 2007
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">56-61</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Güner Karatekin, Mustafa Kasapoğlu, Erdinç Özoğlu, Semra Avcı, Kaan Durukan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (2)</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article//20080162004">
                            The effect of gender on cesarean rate and birth weight in cases without risk factors
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">62-66</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Melike Doğanay, Oktay Kaymak, Emre Okyay, Sevtap Kılıç, Leyla Mollamahmutoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (2)</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article//20080162005">
                            The effect of Ramadan on asymptomatic bacteriuria, urinary tract infections and amniotic fluid index in pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">67-71</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ebru Dikensoy, Özcan Balat, Fatma Bahar Cebesoy, Ayhan Özkur, Hülya Çiçek, Günay Can
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (2)</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article//20080162006">
                             Fetal megacystis and trisomy 18 association: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">72-74</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ercan Yılmaz, Mustafa Kara, İbrahim Avcı, Tufan Öge
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (2)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
