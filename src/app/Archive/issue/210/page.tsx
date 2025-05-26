import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 13, Issue-4, December 2005"
                pageRange="187-247"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134001">
                             Mode of delivery in multiple pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">187-190</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mehmet Okan Özkaya, Mekin Sezik, Hakan Kaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Editorial</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2005; 13 (4)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134002">
                             Umbilical artery acid-base status and lactate levels in term and preterm healthy newborns: relation to delivery mode
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">191-197</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ener Çağrı Dinleyici, Neslihan Tekin, Mehmet Arif Akşit, Başar Tekin, Ömer Çolak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (4)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134003">
                            Relationship between umbilical artery Doppler investigations and perinatal outcome in patients with HELLP syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">198-202</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Mehmet Okan Özkaya, Mekin Sezik, Hülya Toyran Sezik, Elif Gül Yapar, Hakan Kaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (4)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134004">
                             Misoprostol for second and third-trimester labor induction in women with previous cesarean delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">203-207</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Halil Aslan, Altan Cebeci, Yavuz Ceylan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (4)</span>
                    
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134005">
                              Vaginal birth after cesarean section: is it safe?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">208-212</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Emre Sinan Güngör, Egemen Ertaş, Perran Moröy, Şevki Çelen, Nuri Danışman, Leyla Mollamahmutoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2005; 13 (4)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134006">
                              Retrospective analysis of multiple pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">213-217</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mahmut Erdemoğlu , Ahmet Kale , Nurten Akdeniz , Ahmet Yalınkaya, Yılmaz Özcan , Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (4)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134007">
                             The predictive value of middle cerebral artery peak systolic velocity in repeated intrauterine transfusion: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">218-222</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Yeşim Bülbül Baytur, Ümit Sungurtekin İnceboz, Tayfun Özçakır, Yıldız Uyar, Hüsnü Çağlar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (4)</span>
                       
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134008">
                              Death of one fetus in twin pregnancy: report of four cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">223-226</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Semih Mun, Tolga Mızrak, Cüneyt Eftal Taner, Gülsen Derin, Cem Büyüktosun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (4)</span>
                       
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134009">
                               Impetigo herpetiformis: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">227-231</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      İncim Bezicioğlu, Merve Biçer, Levent Karcı, Füsun Özder, Ali Baloğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (4)</span>
                     
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050134010">
                               Treatment of viable cesarean scar ectopic pregnancy with intraamniotic methotrexate injection
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">232-236</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Oluş Api, Orhan Ünal, Bülent Kars, Salim Korucu, Çiğdem Korucu, Sadullah Bulut
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (4)</span>
                    </div>
                </li>

        
        
            </ul>
        </div>
    );
}
