import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 26, Issue-1, January 2018"
                pageRange="1-55"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261001">
                           Prenatal diagnosis of fetal urinary system anomalies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-6</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ezgi Hürcan, Alper Biler, Atalay Ekin, Gökhan Tosun, Cüneyt Eftal Taner
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 17,  2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261004">
                           Investigation of toxoplasma, cytomegalovirus and rubella seroprevalence in pregnant women admitted to our hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">7-10</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Yusuf Madendağ, Mefkure Eraslan Şahin, İlknur Çöl Madendağ, Erdem Şahin, Gökhan Açmaz, İptisam İpek Müderris
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 05, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261004</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261005">
                            The prediction of preterm birth threat by uterocervical angle
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">11-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Olgu Bafalı, Hüseyin Kıyak, Osman İnce, Yusuf Başkıran, Ali Gedikbaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 21, 2018 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261005</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261006">
                            Investigation of fetal magnetic resonance imaging indications
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18-24</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Serenat Eriş Yalçın, Yakup Yalçın, Esra Nur Tola, And Yavuz, Mehmet Özgür Akkurt, Mekin Sezik, Mehmet Okan Özkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 26, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261006</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261007">
                            The predictive value of total leukocyte count and leukocyte differential for severe preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">25-31</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Serenat Eriş Yalçın, Yakup Yalçın, Esra Nur Tola, And Yavuz, Mehmet Özgür Akkurt, Mekin Sezik, Mehmet Okan Özkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  March 26, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261006</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261008">
                            Fetal cell detection for chromosome analysis from leaking amniotic fluid in pregnancies with rupture of membranes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">32-37</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Emre Zafer, John David Buek, Jean Gilles Tchabo, Bassem Haddad
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 26, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261008</span>
                    </div>
                </li>
                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261009">
                            Perinatal and orthopedic outcomes of patients diagnosed with pes equinovarus by mid-trimester fetal ultrasonographic imaging
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">38-45 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Rauf Melekoğlu, Sevil Eraslan, Hasan Berkan Sayal, Ebru Çelik, Harika Gözde Gözükara Bağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 26, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261009</span>
                    </div>
                </li>
                {/* Article 8 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261002">
                            Prenatal diagnosis and follow-up of giant sacrococcygeal teratoma: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">46-50</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mucize Eriç Özdemir, Oya Demirci, Güher Bolat, Ayşenur Celayir, Suna Cesur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 17, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261002</span>
                    </div>
                </li>
                {/* Article 09 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261010">
                            Long QT syndrome diagnosed by premature atrial extrasystoles: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">51-53</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Oya Demirci, Mucize Eriç Özdemir, Güher Bolat, Tunç Tuncer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  April 02, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261010</span>
                    </div>
                </li>

                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180261003">
                            Letter to the Editor regarding “The impacts of placental localization and fetal sex on the estimation of fetal weight”
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">54-55</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Mehmet Ferdi Kıncı, Ulaş Fidan, Kübra Felek, İlknur Yeşilçınar, Özge Şehirli Kıncı, Kazım Emre Karaşahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  February 01, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0261003</span>
                    </div>
                </li>
               
            </ul>
        </div>
    );
}
