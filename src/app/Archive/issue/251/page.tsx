import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 25, Issue-2, May 2017"
                pageRange="49-89"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252002">
                            Prediction of posterior reversible encephalopathy syndrome (PRES) due to obstetric causes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">49-52</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ersin Çintesun, Feyza Nur İncesu Çintesun, Mete Bertizlioğlu, Çetin Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 07, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252002</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252003">
                           Plasma selenium levels in pregnant women with preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">53-58</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Deniz Cemgil Arıkan, Tugba Arıkan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 07, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252003</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252004">
                            Thickness measurement of fetal epicardial adipose tissue in structurally normal fetuses between 24 and 28 weeks of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">59-63</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       And Yavuz, Mekin Sezik,  Mehmet Özgür Akkurt, Serenat Eriş Yalçın, Gökhan Karakoç
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 08, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252004</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252005">
                            Assessment of the training on placenta and umbilical cord given to midwives
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">64-70</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Öznur Tiryaki, Özlem Doğu, Taner Hafızoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  July 29, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252005</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252008">
                            The effects of multivitamin use during pregnancy on birth weight
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">71-75</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sevcan Arzu Arinkan, Emin Erhan Dönmez, Zafer Bütün, Mehmet Teoman Bilgic, Murat Muhcu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 30, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252008</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252009">
                            Investigating the effects of progesterone-derived medication during first and second trimesters on the gestational diabetes development and gestational outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">76-81</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ceyhan Taşdelen, Cemile Dayangan Sayan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  August 13, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252009</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252001">
                           Round ligament varicosities mimicking inguinal hernia in pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">82-84</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Esin Derin Çiçek, İsmail Yardımcıoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  June 06, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252001</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252006">
                            Rusty pipe syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">85-86</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ersin Çintesun, Ayhan Gül, Serra Akar, Huriye Ezveci, Çetin Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 29, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252006</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0252007">
                            HELLP syndrome complicated by hepatic rupture
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">87-89</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şerife Özlem Genç, Yasemin Albak, Gamze Sönmez, Tahsin Takçı, Savaş Karakuş, Ali Yanık, Hüsnü Çağrı Genç, Sinan Soylu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 29, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0252007</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
