import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 20, Issue-2, August 2012"
                pageRange="45-120"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120202003">
                               Evaluation of platelet count and platelet function in intrahepatic cholestasis of pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">45-48</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                   Mehmet Sıddık Evsen, Hatice Ender Soydinç, Ali Özler, Serdar Başaranoğlu, Talip Karaçor, Ahmet Yalınkaya, Derya Uçmak, Muhsin Kaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 19, 2015</span>
            
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0202003</span>
                        
                    </div>
                </li>
                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120202002">
                               Evaluation of the perinatal results of pregnant with preterm premature rupture of membrane
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">49-54</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, İpek Dokurel Çetin, Cihat Şen, Seyfettin Uludağ, Begüm Aydoğan, Abdullah Tüten
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                      
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0202002</span>
                        
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120202001">
                              The operative vaginal delivery: experience of five years
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">55-58</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, Ali Galip Zebitay, Oğuz Yücel, Cihat Şen, Seyfettin Uludağ, İpek Dokurel Çetin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0202001</span>
                    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120202005">
                              Sirenomelia: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">59-62</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Ali Kaya, Ahmet Sami Güven, Asım Gültekin, Füsun Dilara İçağasıoğlu, Ömer Cevit
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0202005</span>
    
                    </div>
                </li>

                {/* Article 5 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120202007">
                             A case of heterotopic pregnancy in a spontaneous cycle
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">63-67</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cihangir Mutlu Ercan, Mehmet Sakıncı, Uğur Keskin, Hakan Çoksüer, Ercan Balıkçı, Ali Ergün
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                       
                    <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0202007</span>
                    </div>
                </li>

                {/* Article 6 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120202006">
                            Can a temporary isolated fetal megacystis during first trimester result in unexplained intrauterine fetal death at third trimester? A case report and review of the literature
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">68-71</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Servet Hacıvelioğlu, Ayşenur Çakır Güngör, Meryem Gencer, Emine Coşar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0202006</span>
                    </div>
                </li>

                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120202004">
                              The giant fetal axillary lymphangioma showing good prognosis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">72-75</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hatice Ender Soydinç, Neval Yaman Görük, Abdulkadir Turgut, Çağlar Altundal, Serdar Başaranoğlu, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                       
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0202004</span><span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313009</span>
                    </div>
                </li>
                {/* Article 8 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20120202008">
                          Abstracts for 8. Congress of Ultrasound in Obstetrics and Gynecology, September 26-30, 2012, Fethiye, Muğla, Turkey
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">77-120</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Organizing Committee of 8. Congress of Ultrasound in Obstetrics and Gynecology
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract</span>
                     
                       <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.12.0202008</span>
                    </div>
                </li>
               

        
        
            </ul>
        </div>
    );
}
