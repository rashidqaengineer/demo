import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 27, Issue-2, August 2019"
                pageRange="49-124"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272001">
                          The impact of distress experienced during pregnancy on prenatal attachment
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">49-55</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Anayit Margirit Coşkun, Gülşen Okcu, Sedef Arslan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>July 10, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272002">
                          The management of persistent adnexal masses in cesarean section
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">56-61</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Aşkın Evren Güler, Zeliha Çiğdem Demirel Güler, Özge Şehirli Kinci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 31, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272003">
                            The role of systemic inflammatory indexes in predicting preeclampsia and its severity
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">62-67</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Onur Bektaş, Kıvılcım Bektaş, Cuma Taşın
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 31, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272004">
                           Determination of median values of triple screening test hormones for Kayseri region and their cross-regional comparisons
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">68-76</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nahide Ekici Günay
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 31, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272006">
                            The knowledge, attitude and behavior levels of midwifery students for the non-pharmacological methods used in the management of labor pain
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">77-88</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ayfer Arslan, Gamze Temiz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  August 30, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272006</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272007">
                           The evaluation of cesarean section rates in accordance with Robson Ten-Group Classification System and the data of perinatology (tertiary center)
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">89-100</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hüseyin Kıyak, Gökhan Bolluk, Emel Canaz, Semra Yüksel, Ali Gedikbaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 31, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272007</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272008">
                          Seasonal change of the prevalence of hypertensive disorders of pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">101-104</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Cuma Taşın, Kıvılcım Bektaş
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 30, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272008</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272009">
                            Anthropometric differences in the newborns with brachial plexus palsy, clavicle fracture in pregnancies without risk factor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">105-112</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Hüseyin Kıyak, Alev Atış Aydın, Gökhan Bolluk, Emel Canaz, Zemzem Ulaşkın, Ali Gedikbaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 30, 2019 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272009</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272010">
                           Fetal conotruncal heart anomalies: is four-chamber view sufficient in the prenatal screening?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">113-118</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Başak Kaya, Deniz Kanber Açar, Ahmet Tayyar, Helen Bornaun, Pelin Ayyıldız , İbrahim Polat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  August 30, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272010</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190272005">
                            A case achieved at 28 weeks of gestation by cervical cerclage with retained placenta after expulsion of nonviable fetus underwent selective termination in multifetal pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">119-124</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Pınar Özcan, Mehmet Serdar Kütük, Taha Takmaz, Havva Sevde İşlek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 30, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0272005</span>
                    </div>
                </li>

               
            </ul>
        </div>
    );
}
