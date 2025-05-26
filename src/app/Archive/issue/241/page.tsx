import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 22, Issue-3, December 2014"
                pageRange="123-186"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223002">
                           Analysis of maternal and perinatal outcomes in cases with twin-to-twin transfusion syndrome (TTTS)
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">123-127</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Serdar Başaranoğlu, Senem Yaman Tunç, Abdulkadir Turgut, Elif Ağaçayak, Nurullah Peker, Mehmet Sait İçen, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 17, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223002</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223003">
                           The role of the first trimester inflammation markers at early and late preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">128-132</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cenk Gezer, Atalay Ekin, Mehmet Özeren, Cüneyt Eftal Taner, Muhittin Eftal Avcı, Aşkın Doğan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 30, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223003</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223005">
                            The roles of beta-human chorionic gonadotropin, creatinine and urea in vaginal washing fluid in the diagnosis of premature rupture of membranes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">133-137</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Alihan Tığlı, Sefa Kurt, Aycan Kopuz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 01, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223005</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223006">
                            Retrospective analysis of 1429 cases who underwent amniocentesis and cordocentesis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">138-141</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şener Taşdemir, Mehmet Yılmaz, İbrahim Şahin, Haktan Bağış Erdem, Ragıp Atakan Al, Metin İngeç, Abdulgani Tatar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 28, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223006</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/220140223007">
                           The association between low PAPP-A levels at first trimester and poor pregnancy outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">142-146</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Atalay Ekin, Cenk Gezer, Cüneyt Eftal Taner, Mehmet Özeren
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 31, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223007</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223001">
                            The comparison of early gestational complications and perinatal outcomes of the pregnant women who used metoclopramide and dimenhydrinate
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">147-151</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şafak Özdemirci, Melek Bilge, Funda Özdemirci, Deniz Esinler, Ertuğrul Karahanoğlu, İnci Kahyaoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 01, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223001</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223009">
                           Prediction of small for gestational age neonates in twin pregnancies by first trimester maternal serum PAPP-A and free β-hCG
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">152-155</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Dilek Beker Şanlı, Kazım Kartkaya, Fezan Şahin Mutlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 06, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223009</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223010">
                            Analysis of the distribution and the mean values of nuchal translucency in singleton pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">156-160</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Burcu Artunç Ülkümen, Halil Gürsoy Pala, Yıldız Uyar, Yeşim Bülbül Baytur, Faik Mümtaz Koyuncu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 17, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223010</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223011">
                            The distribution of chorion and amnion types in twin pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">161-166</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Rahime Nida Ergin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  September 01, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223011</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223008">
                            The results and reliability of ERCP due to choledocholithiasis at pregnancy: a case report and literature review
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">174-177</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Betül Yorgunlar, Suna Özdemir, Derya Uyan, Lebriz Hale Aktün Tamer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 01, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223008</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223012">
                            Is it safe to use hair dyes during pregnancy? An uptade
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">178-181</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Oluş Api, Cihat Şen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  September 15, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223012</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223013">
                            Abdominal gunshot wound in a pregnant woman: a different view to a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">182-183</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       K. Emre Karaşahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 15, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223013</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140223004">
                             Early term labors: approach principles at 37-39 weeks of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">167-173</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mekin Sezik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 05, 2014 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0223004</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
