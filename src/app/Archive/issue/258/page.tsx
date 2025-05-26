import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 27, Issue-1, April 2019"
                pageRange=" 1-48"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190271001">
                           The efficiency of emergency cerclage for the prevention of pregnancy losses and preterm labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1–5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Necip Cihangir Yılanlıoğlu, Altuğ Semiz, Resul Arısoy
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 21, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0271001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190271002">
                           The factors affecting amniocentesis decision by pregnant women in the risk group and the influence of consultant
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6–13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Kanay Yararbaş, Ayşegül Kuşkucu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 31, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0271002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190271003">
                            The analysis of the termination of pregnancies at and after ten weeks of gestation – a monocenter study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">14–21</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Şafak Yılmaz Baran, Songül Alemdaroğlu, Gülşen Doğan Durdağ, Hakan Kalaycı, Zerrin Yılmaz Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>April 22, 2019 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0271003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2019.0271004">
                            Failure of getting intracranial translucency image in posterior fossa in the examination of singleton pregnancies at 11–13 weeks of gestation: reasons and outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">22–31 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Derya Sivri Aydin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 26, 2019 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0271004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190271005">
                            The impact of ursodeoxycholic acid treatment on myocardial performance index in the obstetric cholestasis cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">32–37</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ertuğrul Karahanoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>May 15, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0271005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190271006">
                            Multimedia education on the day of elective cesarean section increases anxiety scores
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">38–42</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Gülseren Yılmaz, Aysu Akça, Osman Esen, Ziya Salihoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  May 16, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.19.0271006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190271007">
                           Does parity and labor influence anxiety levels of pregnant women?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">43–48</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Zeliha Çiğdem Demirel Güler, Aşkın Evren Güler, Mehmet Ferdi Kıncı, Erhan Aktürk
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 24, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.19.0271007</span>
                    </div>
                </li>
                
            </ul>
        </div>
    );
}
