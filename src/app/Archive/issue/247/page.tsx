import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 24, Issue-1, April 2016"
                pageRange="1-60"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241000">
                          Editors’ message
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">v.</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cihat Şen, Murat Yayla, Oluş Api


                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Editorial</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 11, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241000</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241002">
                           Single-center 4-year outcomes of patients underwent cervical cerclage to prevent preterm labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Tayfun Çok, Halis Özdemir, Hakan Kalaycı, Selçuk Yetkinel, Pınar Çağlar Aytaç, Ebru Tarım
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 30, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241003">
                            Can gestational diabetes screening predict preeclampsia?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6-10</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Gonca Batmaz, Fulya Molla, Nilay Karaca, Ayşe Filiz Gökmen Karasu, Banu Dane
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 05, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241004">
                            Undetectable gall bladder in fetus: what to do?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">11-19</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Murat Yayla, Rahime Nida Ergin Bayık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 08, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241006">
                            Pregnancy after renal transplantation: five cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">20-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Burak Giray, Ayşe Yasemin Karageyim Karşıdağ, Esra Esim Büyükbayrak, Ergün Parmaksız, Meral Meşe Özdil, Zerrin Bicik Bahçebaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 08, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241006</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241007">
                            Evaluation of the impact of triple test results on perinatal outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-31</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Özge Deniz Gündüz, Ahmet Eser, Ulaş Çoban, Sedat Tekeli
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 09, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241007</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241008">
                           Concept of medical expertise in Obstetrics and Gynecology
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">32-40</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Elif Gül Yapar Eyi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review </span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 23, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241008</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241001">
                            Neurofibromatosis type 1 case with cerebral involvement complicating pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">41-46</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Emre Zafer, Sündüz Özlem Altınkaya, Sümeyra Nergiz Avcıoğlu, Yasemin Durum, Mehmet Turgut
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 12, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241001</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241005">
                            Umbilical cord stenosis and umbilical cord torsion: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">47–50</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nilüfer Akgün, Nermin Köşüş, Aydın Köşüş, Fulya Yardımcı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 22, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241005</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241009">
                            Double J stent migration imitating premature membrane rupture during pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">51–53</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Engin Korkmazer, İsmail Özdemir, Neşe Solak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 24, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241009</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160241010">
                            Repair of spina bifida aperta with percutaneous minimal invasive fetoscopic method: first two cases in Turkey
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">54-60</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      İbrahim Alataş, Hüseyin Canaz, Kerem Özel, Ali Gedikbaşı, Thomas Kohl
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 25, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0241010</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
