import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 23, Issue-2, August 2015"
                pageRange=" 73-139"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232003">
                           The effect of vitamin B12 level on fetal birth weight
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">73–78</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Özge Öztürk, Levent Keskin, Emre Erdem Taş, Nilüfer Akgün, Filiz Avşar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 24, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232003</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232005">
                          Effects of maternal first trimester thyroid stimulant hormone levels on birth weights of fetuses born at term
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">79–83</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Murat Bakacak, Salih Serin, Fazıl Avcı, Önder Ercan, Bülent Köstü, Deniz Arıkan, Gürkan Kıran
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  April 03, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232005</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232006">
                            Male fetus domination in total placenta previa cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">84–88</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Bülent Köstü, Önder Ercan, Alev Özer, Murat Bakacak, Fazıl Avcı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 11, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232006</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232007">
                            Ultrasound fetal weight estimation in twin pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">89–95</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Kaouther Dimassi, Aymen Hammemi, Abir Karoui, Amel Triki, Mohamed Faouzi Gara
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 25, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232007</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232008">
                           The incidence of thyroid dysfunction in pregnant women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">96–100</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Esra Güzel, Derya Sivri Aydın, Behiye Pınar Çilesiz Göksedef, Ahmet Birtan Boran
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 04, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232008</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232001">
                           Velamentous cord insertion and birth weight discordance in monochorionic twin pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">101-104</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Emine Aydın, Mert Turğal, Özgür Özyüncü
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report </span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 14, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232001</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232002">
                           An unexpected temporary fetal acid reason: rupture of fetal ovarian cyst
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">105–108</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Sefa Kelekçi, Emre Ekmekçi, Seçil Kurtulmuş, Savaş Demirpençe
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 26, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232002</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232004">
                           Posterior reversible encephalopathy syndrome developing after eclampsia: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">109–112</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Oğuz Arslan, Yasemin Çekmez, Fatih Şanlıkan, Serkan Akış, Ahmet Göçmen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 04, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232004</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232009">
                           Mosaic trisomy 8: diagnostic approach with fetal MRI as a complement to ultrasonography
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">113–115</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ümit Aksoy Özcan, Sıla Ulus, Yasemin Alanay, Alp Dinçer, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 12, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232009</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150232010">
                            Perinatal Thyroid Workshop Report – 2015
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">116–139</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Oluş Api, Cihat Şen, Murat Yayla, Mertihan Kurdoğlu, Elif Gül Yapar Eyi, Mekin Sezik, Gökhan Göynümer, Özlem Moraloğlu Tekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Report </span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 06, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0232010</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}