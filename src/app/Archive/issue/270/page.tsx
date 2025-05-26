import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 31, Issue-1, April 2023"
                pageRange="1-85"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311001">
                           The effect of cord clamping time on cord blood gas in term newborn babies delivered by cesarean section
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sema Tanrıverdi, Burak Pelit, İbrahim Tekinli
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 12, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311002">
                           Comparison of Fenton and Intergrowth-21st growth charts: a retrospective study of preterm neonates at ≤34 weeks
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6-11</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Kirankumar Haridas, Manikumar Solaiappan, Muthukumaran Natarajan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 20, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311002</span>
                    </div>
                </li>
                {/* Article 3 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311003">
                           Prenatal diagnosis of tetralogy of Fallot with an absent pulmonary valve: is this malformation still associated with a poor prognosis? A 5-year single-center experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökhan Bolluk, Süleyman Cemil Oğlak, Özge Özdemir, Helen Bornaun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 17, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311003</span>
                    </div>
                </li>

                {/* Article 4 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311004">
                           Dietary quality and mindful eating among pregnant women with and without gestational diabetes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18-24</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hatice Nur Özbay, Sinem Bayram, Esen Yeşil
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 17, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311004</span>
                    </div>
                </li>
                {/* Article 5 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311005">
                           Vitamin D levels in pregnancies and neonatal outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">25-30</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Bilge Keskinsoy, Bengü Mutlu Sütçüoğlu, Halis Özdemir, Merih Bayram
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 02, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311006">
                           Comparison of the efficacy of non-pharmacological interventions during the heel stick procedure on pain level, duration of crying, and voice decibel of newborns: a randomized controlled trial
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">31-40</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Pınar Duru, Zehra Akkoca, Özlem Örsal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 17, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311006</span>
                    </div>
                </li>

                {/* Article 7 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311008">
                           The effects of restless legs syndrome on sleep and quality of life during pregnancy: a comparative descriptive study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">41-49</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        İffet Güler Kaya, Derya Yüksel Koçak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 20, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311008</span>
                    </div>
                </li>

                {/* Article 8 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311009">
                           The comparison of systemic inflammatory response markers and Doppler ultrasound parameters between pregnancies with intrahepatic cholestasis and control cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">50-57</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mehmet Obut, Süleyman Cemil Oğlak, Özge Yücal Çelik, Şeyhmus Tunç, Ece Öcal, Zeynep Gedik Özköse, Gökhan Bolluk, Sadun Sucu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 23, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311009</span>
                    </div>
                </li>

                {/* Article 9 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311010">
                           Mid-trimester cerclage outcomes in singleton and twin pregnancies: a single tertiary center experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">58-65</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Aslı Altınordu Atcı, Şükran Doğru, Fatih Akkuş, Delal Akıncı, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 23, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311010</span>
                    </div>
                </li>

                {/* Article 10 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311011">
                           Analysis of the process leading to termination of pregnancy in the third trimester
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">66-73</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ömer Gökhan Eyisoy, Lütfiye Uygur, Ümit Taşdemir, Çağdaş Özgökçe, Büşra Cambaztepe, Oya Demirci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 28, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311011</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311012">
                           Comparison of proteinuria diagnostic methods in pregnant patients
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">74-79</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Özge Özdemir, Gökhan Bolluk, Ulaş Çoban
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 10, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311012</span>
                    </div>
                </li>
                {/* Article 12 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230311007">
                           Management of a pregnancy with Crigler-Najjar syndrome type 2: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">80-85</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Erkan Çağlıyan, Samican Özmen, Ezgi Bilicen, Aslı Akdöner, Onur Yavuz, Müjde Soytürk
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 15, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0311007</span>
                    </div>
                </li>
                
            </ul>
        </div>
    );
}
