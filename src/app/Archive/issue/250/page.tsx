import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 25, Issue-1, January 2017"
                pageRange="1-47"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20170251001">
                           The outcomes of extending uterine incision transversely or cephalocaudally in patients with previous cesarean section: a prospective randomized controlled study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Selin Dikmen, Berna Aslan Çetin, Ali Gedikbaşı, Hüseyin Kıyak, Nadiye Köroğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 20, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0251001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20170251002">
                           The association between anemia prevalence, maternal age and parity in term pregnancies in our city
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6-10</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ebru Çelik Kavak, Salih Burçin Kavak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 20, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0251002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20170251003">
                            Comparison of high and low doses of oxytocin protocols in multiparous pregnant women in terms of labor durations and fetal-maternal complications
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">11-18</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Kadriye Erdoğan, Elif Gül Yapar Eyi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 21, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0251003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20170251004">
                            The effects of amniotomy on labor duration, cesarean section rates, and maternal and fetal outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">19-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ayşegül Baylas Şahin, Elif Gül Yapar Eyi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 25, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0251004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20170251005">
                            Acute pulmonary edema developing after cesarean section: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">43-47</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Ersin Çintesun, Faruk Çiçekçi, Ayşe Gül Kebapçılar, Huseyin Özbiner, Çetin Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 26, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0251005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20170251006">
                            Assessment of health-promoting lifestyle habits in normal and high-risk pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-31</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yasemin Erkal Aksoy, Esin Çeber Turfan, Sema Dereli Yılmaz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 18, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0251006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20170251007">
                          A new marker for the prediction of mean platelet volume, placenta previa and placental invasion anomalies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">32-37</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Oya Soylu Karapınar, İlay Gözükara, Ali Ulvi Hakverdi, Arif Güngören
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 18, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0251007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20170251008">
                            Extraperitoneal versus transperitoneal cesarean section: a retrospective analysis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">38-42</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Cengiz Yeşilbaş, Hakan Erenel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 25, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0251008</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
