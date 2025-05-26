import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 13, Issue-3, September 2005"
                pageRange="129-183"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133001">
                             Role of doctors, midwifes and nurses in oxytocin adminisration
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">129-137</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nurdan Demirci, Özlem Gürkan, Hediye Arslan, Zübeyde Ekşi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2005; 13 (3)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133002">
                             Frequency of genetic thrombophilia in severe intrauterine growth restriction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">138-141</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ragıp Atakan Al, Serdar Yalvaç, Esmen Öztürkoğlu, Erol Akkök, Ömer Kandemir, İsmail Dölen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133003">
                            Maternal serum concentrations of metabolites of nitric oxide in preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">142-147</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Levent Tütüncü, Emine Özdemir, Ercüment Müngen, Ali Rüştü Ergür, Yusuf Z. Yergök
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133004">
                            Conservative managemenet of twin pregnancy after delivery of one fetus at the second trimester of the pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">148-151</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cem Dane, Murat Kıray, Salih Dural, Mukadder Tayhan, Ahmet Aliosmanoğlu, Murat Yayla
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133005">
                             Relationship of early diastolic notch in uterine artery Doppler measurements with pregnancy complications in low risk pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">152-157</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Faik Gürkan Yazıcı, Ekrem Tok, Sıtkı Gülhan, Devrim Ertunç, Gülay Özdemir, Saffet Dilek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2005; 13 (3)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133006">
                             Retrospective analysis of polyhydramnios cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">158-162</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ahmet Kale, Nurten Akdeniz, Mahmut Erdemoğlu, Ahmet Yalınkaya, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133007">
                            A case of meconium ileus peritonitis with a prenatal diagnosis of sacrococcygeal teratoma
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">163-168</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Başak Baksu, İnci Davas, Jale Özgül, Figen Ezen, Alper Özel, Gülden Yenice, Mehmet Yalçın
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
                       
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133008">
                             Patau syndrome (trisomy 13): autopsy case
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">169-172</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Nihal Kılınç, Bülent Demir, Diclehan Orhan, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
                       
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133009">
                              Thromboembolic cases in the pregnancy and pulmonary embolism after cesarean: case presentation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">173-178</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nimet Şenoğlu, Hafize Öksüz, Beyazıt Zencirci, Kıran Gürkan, Okur Nazan, Meral Ezberci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
                     
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050133010">
                              17 Week non-communicating rudimentar uterine horn pregnancy and uterine rupture: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">179-182</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Serkan Kahyaoglu, İnci Turgay, Oktay Kaymak, Şenol Kalyoncu, Leyla Mollamahmutoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
                        
                    </div>
                </li>

        
        
            </ul>
        </div>
    );
}
