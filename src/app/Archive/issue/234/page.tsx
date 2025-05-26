import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 20, Issue-3, December 2012"
                pageRange="121-164"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203004">
                               The impact of fetal inflammatory response syndrome on perinatal outcomes in cases of preterm premature rupture of membranes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">121-125</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                   Orkun Çetin, İpek Dokurel Çetin, Onur Güralp, Cihat Şen, Seyfettin Uludağ, Ali Galip Zebitay
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203004</span>
                        
                    </div>
                </li>
                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203003">
                               Evaluation of prenatal care in Istanbul: a population based study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">126-134</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Binali Çatak, Hatice İkiışık, Savaş Başar Kartal, Can Öner, Hande Hazal Uluç, Özgür Seğmen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                      
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203003</span>
                        
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203001">
                              Retrospective analysis of stillbirth cases in a regional hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">135-139</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Muhammet Erdal Sak, Mehmet Sıddık Evsen, Hatice Ender Soydinç, Sibel Sak, Serdar Başaranoğlu, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203001</span>
                    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203002">
                              Investigation of the relationship between levels of oxidative stress markers in the second trimester amniotic fluid with preeclampsia and preterm delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">140-145</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Ebru Çelik, Abdullah Karaer, Ercan Yılmaz, Ilgın Türkçüoğlu, Önder Çelik, Yavuz Şimşek, Pınar Kırıcı, Elif Özerol, Kevser Tanbek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203002</span>
    
                    </div>
                </li>

                {/* Article 5 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203005">
                             Ovarian cyst rupture during real-time transvaginal Doppler ultrasonography
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">146-149</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Mekin Sezik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                       
                    <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203005</span>
                    </div>
                </li>

                {/* Article 6 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203006">
                            Agenesis of ductus venosus: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">150-152</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Talat Umut Kutlu Dilek, Burcu Dilek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203006</span>
                    </div>
                </li>

                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203007">
                            Sonographically documented spontaneous resolution of isolated fetal ascites
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">153-155</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Şadıman Kıykaç Altınbaş, Ömer Kandemir, Serdar Yalvaç, Ümit Göktolga
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203007</span><span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313009</span>
                    </div>
                </li>
                {/* Article 8 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203008">
                          Interhemispheric arachnoid cyst associated with meningomyelocele: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">156-159</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Resul Arısoy, Emre Erdoğdu, Oya Demirci, Oya Pekin, Pınar Kumru, Semih Tuğrul
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                     
                       <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203008</span>
                    </div>
                </li>
               

          {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120203009">
                          Bilateral type 1 congenital cystic adenomatoid malformation: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">160-163</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Resul Arısoy, Emre Erdoğdu, Oya Pekin, Oya Demirci, Pınar Kumru, Semih Tuğrul
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                     
                       <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0203009</span>
                    </div>
                </li>
        
            </ul>
        </div>
    );
}
