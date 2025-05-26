import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 15, Issue-2, August 2007"
                pageRange="51-87"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070152001">
                             The umbilical cord nomogram ın 11-15 weeks of pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">51-55</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Arzu Özdemir, Fikret Gökhan Göynümer, Öznur Gökçen, Gamze Yetim, Işın Karaaslan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (2)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070152002">
                            Antepartum course and postpartum management of cases with mild fetal pyelectasis at second trimester
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">56-60</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Murat Muhcu, Gökhan Gönen, İlker Akyol, Özgür Dundar, Levent Tütüncü, Ali Rüstü Ergür, Vedat Atay, Ercüment Müngen , Yusuf Ziya Yergök
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (2)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070152003">
                            Maternal and perinatal outcomes of cases with eclampsia: review of 113 cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">61-67</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Gökhan Yıldırım, Halil Aslan, Ahmet Gül, Fatma Nurgül Aktaş, Demet Çakmak, Kemal Güngördük, Yavuz Ceylan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (2)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070152004">
                            Importance of prenatal diagnosis in transposition of the great arteries: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">68-72</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Numan Ali Aydemir, Melih Atahan Güven, İhsan Bakır, Yavuz Enç, Mehmet Salih Bilal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (2)</span>
                    
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070152005">
                             First trimester prenatal diagnosis of anencephaly
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">73-76</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ercan Yılmaz, Tünay Efetürk, Tuncay Nas
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (2)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070152006">
                            Acardiac fetus in a triple pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">77-81</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Azra Arıcı Özkan, Hakan Kanıt, Harun Topuz, Nilgün Dicle, Çiğdem İspahi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (2)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070152007">
                           A case of holoprosencephaly diagnosed in the first trimester of pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">82-86</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                   H. Alper Tanrıverdi, Esra Çınar, Volkan Akbulut, Aykut Barut
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (2)</span>
                       
                    </div>
                </li>
               
                {/* Article 8 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070152008">
                           A case of trisomy 18 presenting with findings of increased nt and heart anomaly on 12 weeks of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">87-91</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Melih Atahan Güven, Ömer Günhan, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (2)</span>
                       
                    </div>
                </li>
               
        
        
            </ul>
        </div>
    );
}
