import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 15, Issue-1, April 2007"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151001">
                              The role of neonatal nurses in initiating the mother-infant relationship in premature infants
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-6</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Ayşegül İşler
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (1)</span>
                        
                    </div>
                </li>
                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151002">
                               The opinion of health workers regarding vaginal labor and cesarean section
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">7-11</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Zeynep Duman, Gülengül Nadirgil Köken, Figen Kır Şahin, Emine Coşar, Dağıstan Tolga Arıöz, İlknur Aral
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>   Perinatal Journal 2007; 15 (1)</span>
                        
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151003">
                              Determination of the median levels of triple test screening parameters in our region
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12-19</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nalan Akalın, Serap Arıkan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (1)</span>
                    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151004">
                              The role of ultrasound in early pregnancy in prediction of miscarriages
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">20-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Ahmet Jakal, Hüsnü Görgen, Banu Dane, Cem Dane, Ahmet Çetin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
    
                    </div>
                </li>

                {/* Article 5 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151005">
                             The role of the Bishop score for successful labor induction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Alpaslan Akyol, Özcan Karademir, Ali Gedikbaşı, H. Cemal Ark, Ahmet Gülkılık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (1)</span>
                    
                    </div>
                </li>

                {/* Article 6 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151006">
                            Aplastic anemia and pregnancy: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">35-38</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ercan Yılmaz, Ümit Korucuoğlu, Arzu Acar, Nuray Bozkurt, Aydan Biri
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>   Perinatal Journal 2007; 15 (1)</span>
                        
                    </div>
                </li>

                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151007">
                              Celiac disease and pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">39-41</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Tuncay Nas, Ercan Yılmaz, Ümit Korucuoğlu, Pınar Keskin Özcan, Aylar Poyraz, Rıfat Gürsoy
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (1)</span>
                        
                    </div>
                </li>
                {/* Article 8 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151008">
                           A case of left isomerism with hydrops fetalis: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">42-46</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    İncim Bezircioğlu, Mine Tunakan, Ali Baloğlu, Burcu Çetinkaya, Merve Biçer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (1)</span>
                       
                    </div>
                </li>
                {/* Article 9 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070151009">
                             Congenital pulmonary airway malformation: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">47-49</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Nihal Kılınç, Abdurrahman Önen, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (1)</span>
                       
                    </div>
                </li>
                {/* Article 10 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141009">
                               Abruption placenta in adult Still’s disease with onset during pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">45-48</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cem Dane, Murat Yayla, Banu Dane, Ahmet Çetin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (1)</span>
                     
                    </div>
                </li>
               

        
        
            </ul>
        </div>
    );
}
