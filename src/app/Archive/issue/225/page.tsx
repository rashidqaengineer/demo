import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 18, Issue-1, April 2010"
                pageRange="1-31"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100181001">
                              Multicentric multiple pregnancy study III: triplets
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-7</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Murat Yayla, Rahime Nida Ergin, Yeşim Baytur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2010; 18 (1)</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100181002">
                             Assessment of maternal and perinatal outcomes in pregnancies complicated by epilepsy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">8-13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Suna Özdemir, Osman Balcı, Aybike Tazegül, M. Said İçen, Ayşegül Demir, Hasan Ali Yüksekkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2010; 18 (1)</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100181003">
                               A case of parapagus dicephalus conjoined twins diagnosed at 17th weeks of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">14-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yasemin Taşcı, Şadıman Altınbaş, Ömer Kandemir, Serdar Yalvaç
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2010; 18 (1)</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100181004">
                             Prenatal diagnosis and management of a case with type-1 congenital cystic adenomatoid malformation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18-22</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mertihan Kurdoğlu, İsmet Gün, Zeki Mesten, Ali Yılmaz, Murat Muhçu, Ercüment Müngen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2010; 18 (1)</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100181005">
                              Pandemic influenza A (H1N1) and pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">23-26</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Erzat Toprak, Emel Ebru Özçimen, Ayla Üçkuyu, Faika Ceylan Çiftçi, Erdem Turhan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2010; 18 (1)</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100181006">
                             Subchorionic hematoma associated with preeclampsia and fetal distress: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">27-30</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ali Özler, Can Postacı, Yeşim Baytur, Semra Oruç Koltan, Nalan Neşe
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2010; 18 (1)</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100181007">
                              Truncus arteriosus type 1 with prenatal diagnosis: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">31-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, Cihat Şen, Levent Saltık, Begüm Aydoğan, Seyfettin Uludağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2010; 18 (1)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
