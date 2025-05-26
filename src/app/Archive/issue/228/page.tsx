import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 19, Issue-1, April 2011"
                pageRange="1-50"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191001">
                            Multicentric multiple pregnancy study IV: mortality in twins – spontaneuos versus artificial reproductive techniques
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Murat Yayla, Rahime Nida Ergin, Yeşim Baytur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191002">
                            The role of ultrasound in fırst trimester pregnancy in prediction of miscarriages
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6-9</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Fatma Çetin Pelit, Hatice Yılmaz, Necdet Süer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191003">
                             Neonatal outcomes of pregnancy with intrahepatic cholestasis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">10-14</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Abdullah Kurt, Ayşe Ecevit, Burcu Kısa, Deniz Anuk Ince, Aylin Tarcan, Filiz Bilgin Yanık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191004">
                            Long-term effects of cesarean births on unintended pregnancy rates and obstetric expenditures
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">15-19</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Kahraman Ülker, İsmail Temur, Abdülaziz Gül
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191005">
                             Selective fetoreduction: report of two cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">20-22</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Muhammet Erdal Sak, Mehmet Sıddık Evsen, Hatice Ender Soydinç, Sibel Sak, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191006">
                            The diagnosis and management of ornithine transcarbamylase deficiency in pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">23-27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, Cihat Şen, Begüm Aydoğan, Seyfettin Uludağ, İpek Dokurel Çetin, Hakan Erenel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191007">
                            Progressive fetal diaphragmatic hernia: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">28-31</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ercüment Müngen, Ali Babacan, İsmet Gün
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191008">
                             Spontaneous resolution of intra-abdominal cyst in a fetus with normal karyotype
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">32-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       M. Murat Naki, Oluş Api, Hasniye Acıoğlu, Müge Emeksiz, Aybala Akıl, Orhan Ünal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110191009">
                            The conclusion report of 13th national perinatology congress
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">35-50</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ayşe Kafkaslı, Alper Tanrıverdi, Yeşim Baytur, Özlem Pata, Ertan Adalı, Hakan Camuzcuoğlu, Arif Güngören, İlker Arıkan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Report</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
