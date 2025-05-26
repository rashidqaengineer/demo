import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 28, Issue-1, April 2020"
                pageRange=" 1-55"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281001">
                          The determination of health practices and the sexual quality of life during the prenatal period
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1–6</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nazife Bakır, Pınar Irmak Vural, Cuma Demir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  February 13, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281002">
                           Evaluation of fetal stress in preeclamptic patients
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">7–10</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Esra Can, Oluş Api
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 17, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281003">
                           The role of serum fasting plasma glucose in gestational diabetes screening
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">11–16</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      İlknur Çöl Madendağ, Mefkure Eraslan Şahin, Yusuf Madendağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 17, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281005">
                            The association between obesity and hematologic inflammatory markers in the first trimester pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">17–22</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Feyza Nur İncesu Çintesun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 11, 2020 </span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.20.0281005</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281006">
                            The investigation of the correlation between diastasis recti and the second stage of labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">23–27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ersin Çintesun, Meltem Aydoğdu, Çetin Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  March 23, 2020 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281006</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281007">
                            The assessment of the perinatal outcomes of the patients who underwent quad screening test
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">28–35</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Mehmet Mete Kırlangıç, Gökhan Açmaz, Erdem Şahin, Yusuf Madendağ, Fatma Özdemir, İptisam İpek Müderris
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 08, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281007</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281008">
                          Preterm birth and periodontitis: a dilemma of current obstetrics
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">36–41</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Didem Ekiz, Şeyda Erşahan, Ali Ekiz, Nurcan Altaş, Burak Özköse, Zeynep Özköse
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>April 08, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281008</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281009">
                           Coombs test positivity in cord blood: early detection of risky newborns and the assessment of their follow-up results
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">42–47</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ali Ulaş Tuğcu, Faika Ceylan Çiftçi, Esra Aktepe Keskin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 10, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281009</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281004">
                            Isolated levocardia with situs inversus without cardiac abnormality in fetus: prenatal diagnosis and management
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">48–51 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mucize Eriç Özdemir, Oya Demirci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 17, 2020 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281004</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200281010">
                           A rare complication developing after delivery: septic pelvic thromboembophlebitis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">52–55</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Ersin Çintesun, Denizhan Bayramoğlu, Emine Uysal, Çetin Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>April 10, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0281010</span>
                    </div>
                </li>

            </ul>
        </div>
    );
}
