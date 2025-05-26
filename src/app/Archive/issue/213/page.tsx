import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 14, Issue-2, June 2006"
                pageRange="59-101"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060142001">
                             Comparison of the effect of single and repeated courses of corticosteroids on fetal lung
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">59-65</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yaprak Engin Üstün, Ayşe Kafkaslı, Mehmet Boz, Neşe Karadağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (2)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060142002">
                             Early neonatal outcomes of term breech delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">66-72</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökhan Yıldırım, İsa Aykut Özdemir, Halil Aslan, Ahmet Gülkılık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (2)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060142003">
                            Retrospective analysis of 356 amniocentesis results performed for karyotype
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">73-76</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Hüseyin Yüce, Hüsnü Çelik, Bilgin Gürateş, Deniz Erol, Fethi Hanay, Halit Elyas
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (2)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060142004">
                            Fetal nasal bone lenght nomogram
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">77-82</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Murat Yayla, Gökhan Göynümer, Ömer Uysal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
                    
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060142005">
                             The incidence of nuchal cord at delivery and ıts effect on perinatal outcome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">83-89</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Özgür Dundar, Ercüment Müngen, Levent Tütüncü, Murat Muhcu, Serkan Bodur, Yusuf Ziya Yergök
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (2)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060142006">
                            Antenatal education about pregnancy, delivery and puerperium during antenatal care
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">90-95</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sebahat Atar Gürel, Hulusi Gürel, Eray Balcan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (2)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060142007">
                           Heterotopic pregnancy: tubal ectopic pregnancy and monochorionic monoamniotic twin pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">96-100</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Özgür Dundar, Levent Tütüncü, Ercüment Müngen, Murat Muhcu, Yusuf Ziya Yergök
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (2)</span>
                       
                    </div>
                </li>
               
        
        
            </ul>
        </div>
    );
}
