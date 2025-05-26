import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 17, Issue-2, August 2009"
                pageRange="59-90"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090172001">
                            Iron status markers of pregnant women receiving iron treatment and iron
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">59-64</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nilüfer Yiğit Çelik, Barış Mülayim, Sema Mülayim, Elif Durukan, Filiz Yanık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (2)</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090172002">
                           Ultrasonographic findings in pregnants with Down syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">65-69</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cüneyt Eftal Taner, Mustafa Oğuz Aygören, İlkan Kayar, Gülsen Derin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (2)</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090172003">
                            Comparing the blood values of the patients operated by cesarean under spinal and general anesthesia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">70-73</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ahmet Yalınkaya, Ali İrfan Güzel, Kadir Kangal, Ersin Uysal, Selami Erdem
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (2)</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090172004">
                             Maternal serum ICAM 1 levels at prepartum period in severely preeclamptic pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">74-81</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nebahat Bayram, İsmet Alkış, Safiye Akansu Saylık, Nilufer İmamoğlu, Volkan Tuna, Yavuz Ceylan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (2)</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090172005">
                             Giant cystic hygroma complicating on one of the twin pregnancy: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">82-84</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mahmut Erdemoğlu, Ahmet Kale, Umur Kuyumcuoğlu, Nurten Akdeniz, Ali İrfan Güzel, Kadir Kangal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (2)</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090172006">
                            Treatment of viable cesarean scar ectopic pregnancy with combination of intracardiac KCl and systemic methotrexate: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">85-89</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Gürkan Yazıcı, Aysun Savaş, Talat Umut Kutlu Dilek, Saffet Dilek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (2)</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20090172007">
                            The correlation of ultrasound and magnetic resonance imaging in the thoracic anomalies: case series
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">90-96</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Talat Umut Kutlu Dilek, Arzu Doruk, Sevgül Köse, Filiz Çayan, Saffet Dilek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2009; 17 (2)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
