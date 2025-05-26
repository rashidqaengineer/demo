import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 18, Issue-3, December 2010"
                pageRange="69-113"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183002">
                            Nomogram of fetal cisterna magna width at 15-24th gestational weeks
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">72-78</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Resul Arısoy, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183003">
                           The ratio of biparietal diameter to nasal bone length
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">79-84</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Resul Arısoy, Nida Ergin, Murat Yayla, Gökhan Göynümer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 05, 2016 </span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183004">
                            Turkey demographic and health survey results of antenatal care, perinatal fetal and neonatal evaluation with respect to prognosis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">85-91</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Derya Sivri Aydın, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183005">
                             Seroprevalence of toxoplasmosis among pregnant women in Kayseri
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">92-96</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Tuba Kayman, Mesut Kayman
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183006">
                            The impact of placental location on early fetal growth
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">97-100</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Rahime Nida Ergin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183007">
                             Fetal goiter in the absence of maternal thyroid disease: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">101-104</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Arif Güngören, Kenan Dolapçıoğlu, Ali Ulvi Hakverdi, Ali Balcı, İsmail Güzelmansur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183008">
                          Successful materna land fetal outcome in a pregnancy with type V Takayasu’s arteritis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">105-108</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hüseyin Levent Keskin, Olcay Turgut, Işık Üstüner, Sinan Tan, Ayşe Filiz Avşar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183009">
                             Isolated fetal endocardial fibroelastosis diagnosed and terminated at 22 weeks of gestation: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">109-112</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İnci Kahyaoğlu, Serkan Kahyaoğlu, Hatice Sut, Şahin Önen, Leyla Mollamahmutoglu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20100183001">
                            Letter to the Editor: Toxoplasma scanning during pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">69-71</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Tanu Sharma, Archana Kumari
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
