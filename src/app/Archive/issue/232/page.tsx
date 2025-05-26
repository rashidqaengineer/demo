import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 20, Issue-1, April 2012"
                pageRange="1-44"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120201001">
                              Patient profile and treatment outcomes of (near-miss) obstetric patients and evaluation of maternal mortality: a tertiary center experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                   Ömer Yavuz Şimşek, Ercan Yılmaz, Ebru Çelik, Abdullah Karaer, Ilgın Türkçüoğlu, Önder Çelik, Türkan Toğal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
            
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0201001</span>
                        
                    </div>
                </li>
                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120201002">
                               Determination of the median levels of first trimester screening test parameters in our region
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6-11</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Dilek Beker Şanlı, Kazım Kartkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
        
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0201002</span>
                        
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120201008">
                              Retrospective analysis of maternal and fetal outcomes in pregnant women with chronic immune thrombocytopenic purpura
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hatice Ender Soydinç, Muhammet Erdal Sak, Mehmet Sıddık Evsen, Ali Özler, Abdülkadir Turgut, Serdar Başaranoğlu, Talip Gül
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0201008</span>
                    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120201007">
                              Importance of perinatal vitamin D prophylaxis for mother and the newborn
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18-23</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Ali Kaya, Ahmet Sami Güven, Asım Gültekin, Füsun Dilara İçağasıoğlu, Ömer Cevit
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0201007</span>
    
                    </div>
                </li>

                {/* Article 5 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120201006">
                             Analysis of the relationship between maternal second trimester AFP, HCG, estriol levels and uterine artery Doppler findings in the prediction of pregnancy complications
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">24-29</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Banu Dane, Yaprak Rüstemoğlu, Gonca Batmaz, Kamuran Kılavuz, Hande Güler, Cem Dane
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                       
                    <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0201006</span>
                    </div>
                </li>

                {/* Article 6 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120201003">
                            Apert syndrome: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">30-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      İbrahim Alanbay, Hakan Çoksüer, Emre Karaşahin, Mutlu Ercan, Uğur Keskin, Seyit Temel Ceyhan, İskender Başer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0201003</span>
                    </div>
                </li>

                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120201004">
                              Recurrent lethal multiple pterygium syndrome: prenatal ultrasonographic and postmortem findings
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">35-39</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Tuncay Nas, Ercan Yılmaz, Ümit Korucuoğlu, Pınar Keskin Özcan, Aylar Poyraz, Rıfat Gürsoy
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0201004</span><span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313009</span>
                    </div>
                </li>
                {/* Article 8 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120201005">
                          Sequential therapy failure in a naturally concieved twin pregnancy complicated by reversed arterial perfusion
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">40-44</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Ömer Yavuz Şimşek, Önder Çelik, Ercan Yılmaz, Ebru Çelik, Senem Arda Düz, Serdar Ceylaner, Şevki Çelen, Nuri Danışman
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                     
                       <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0201005</span>
                    </div>
                </li>
               

        
        
            </ul>
        </div>
    );
}
