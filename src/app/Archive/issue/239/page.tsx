import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 22, Issue-1, April 2014"
                pageRange="1-61"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221001">
                           Restless leg syndrome in pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Bülent Çakmak, Zeynep Fulya Metin, Ahmet Karataş, Zeki Özsoy, Fazlı Demirtürk
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221002">
                           The role of measuring PAPP-A and placental volume for the prediction of preeclampsia at 11-14 weeks of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6-12</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Öznur Dündar, Yusuf Olgaç, Deniz Acar, Ali Ekiz, Gökhan Yıldırım, Ali Gedikbaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 08, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221003">
                            Retrospective analysis of deliveries with congenital anomalies at a tertiary center
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">13-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ali Özler, Serdar Başaranoğlu, Talip Karaçor, Senem Yaman Tunç, Neval Yaman Tunç, Yılmaz Palancı, Mehmet Sıddık Evsen, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 01, 201</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221004">
                             The role of first trimester uterine artery Doppler in the prediction of preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18-22</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Emre Erdoğdu, Resul Arısoy, Pınar Kumru, Cem Ardıç, Oya Pekin, Semih Tuğruli
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 01, 2013 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221005">
                             Amniocentesis results of Manisa tertiary care in 2012
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">23-27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Halil Gürsoy Pala, Burcu Artunç Ülkümen, Fatma Eskicioğlu, Safiye Uluçay, Sırrı Çam, Yeşim Bülbül Baytur, Faik Mümtaz Koyuncu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 01, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221006">
                           Comparison of the consistency between sonographic and clinical weeks of gestation at first trimester according to genders
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">28-32</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Rahime Nida Ergin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 01, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221007">
                            The role of 3D ultrasonography in the analysis of fetal cardiac anatomy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">33-37</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Talat Umut Kutlu Dilek, Filiz Çayan, Arzu Doruk, Hüseyin Durukan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 01, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221008">
                            Cervical cerclage with history-based Indication in cervical Insufficiency: five-year experience in Etlik Maternity Hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">38-41</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Serdar Yalvaç, Sertaç Esin, Özgür Koçak, Tuğba Ensari Altun, Ömer Kandemir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 28, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221008</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221009">
                           Amniotic sheet and amniotic band syndrome: pitfalls in distinguishing two cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">53-56</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Özge Kızılkale, Canan Yılmaz Torun, Mert Yeşiladalı, Pınar Cenksoy, Gazi Yıldırım, Cem Fıçıcıoğlu, Oluş Api
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  November 15, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221009</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221010

                            ">
                           Fetal supraventricular tachycardia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">57-60</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ahmet Karataş, Zehra Karataş, Tülay Özlü, Beyhan Küçükbayrak, Seda Eymen Kılıç, Melahat Emine Dönmez
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 10, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221011">
                           Importance in prenatal diagnosis of the detection of isolated aberrant right subclavian artery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">61-63</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Özge Kızılkale, Canan Yılmaz Torun, Mert Yeşiladalı, Pınar Cenksoy, Gazi Yıldırım, Oluş Api
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 05, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140221012
                            ">
                            Screening and diagnostic tests in gestational diabetes: state of the art
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">42-52</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Selahattin Kumru
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 17, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0221012</span>
                    </div>
                </li>
               
            </ul>
        </div>
    );
}
