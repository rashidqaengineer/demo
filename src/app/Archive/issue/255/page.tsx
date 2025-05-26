import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 26, Issue-2, August 2018"
                pageRange="57-105"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262001">
                           How much can we evaluate fetal anatomy at 11–13+6 weeks of gestation?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">57–63</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Derya Sivri Aydın, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 02, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262002">
                          Nuchal translucency measurement: who is right, who is not?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">64–68</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Engin Korkmazer, Emine Arslan, Özgür Akkurt, Muzaffer Temur, Tayfur Çift
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 13, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262003">
                            Postpartum glucose tolerance test application rates and non-application causes in gestational diabetes mellitus cases

                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">69–73</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Engin Korkmazer, Emine Arslan, Özgür Akkurt, Muzaffer Temur, Tayfur Çift, Emin Üstünyurt
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 13, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262004">
                           Maternal serum anti-Müllerian hormone levels in pregnant women with gestational diabetes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">74–77</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Begüm Aydoğan Mathyk, Berna Aslan Çetin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 23, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262005">
                            Postnatal maternal attachment: a retrospective study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">78–86</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Derya Yüksel Koçak, Handan Özcan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  July 26, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262006">
                            Three-year analysis to determine prognostic factors affecting success in single-dose methotrexate treatment: a single-center experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">87–91</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Gökçe Turan, Pınar Yalçın Bahat, İbrahim Polat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  August 09, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262007">
                           The impact of serum anti-Müllerian hormone levels on preeclampsia prediction: a case control study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">92–96</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Begüm Aydoğan Mathyk, Berna Aslan Çetin, Sibel Gülova, Nazlı Yenigül, Işıl Ayhan, Ayşe Ender Yumru
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 09, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262008">
                            Intrauterine fetal transfusion in cases with immune hydrops fetalis: when and how effective it is?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">97–101</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Emre Ekmekci, Emine Demirel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 10, 2018 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262008</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180262009">
                            Evaluation of the fourth ventricle and nomogram of intracranial translucency at 11–13 weeks of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">102–105 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Derya Sivri Aydın, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 19, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0262009</span>
                    </div>
                </li>
               
            </ul>
        </div>
    );
}
