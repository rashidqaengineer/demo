import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 24, Issue-2, August 2016"
                pageRange=" 61-127"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242001">
                           The cesarean rates and indications between 2010 and 2014 in the Obstetrics Department of Dr. Zekai Tahir Burak Maternal Health Training and Research Hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">61-65</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökçe Naz Küçükbaş, Özlem Moraloğlu, Şule Özel, Salim Erkaya, Yasemin Taşcı, Rahime Bedir Fındık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 09, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242002">
                           Comparison of first trimester uterine artery Doppler parameters in hyperemesis gravidarum with normal pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">66-71</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        İsmail Bıyık, Gökhan Ocakoğlu, Emin Üstünyurt, Fatih Yılmaz, Fatih Keskin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 24, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242003">
                            An obstetric emergency case: vulvovaginal hematoma – our four-year results
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">72-76</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Özlem Yörük, Ayşegül Öksüzoğlu, Elif Gül Yapar Eyi, Burcu Kısa Karakaya, Necati Hançerlioğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 30, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242004">
                            Evaluation of the measurement of ACTH, fibronectin, pentraxin 3 levels and cervical length in pregnant women under threatened preterm delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">77-82</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Filiz Aktenk, Burcu Artunç Ülkümen, Yeşim Güvenç, Halil Gürsoy Pala, Arzu Oran
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 06, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242005">
                            Hepatitis B seropositivity of pregnant women and the review of Turkish literature
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">83-88</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Rabia Zehra Bakar, Banu Dane
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 25, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242006">
                           Posterior fossa anomalies: related anomalies and the methods of pregnancy termination
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">89-95</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Emine Aydın, Mert Turgal, Sema Can, Özgür Özyüncü
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 15, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242007">
                           Modified transabdominal cervico-isthmic cerclage: analysis of 16 cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">96-99</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ebru Çelik Kavak, Salih Burçin Kavak, Yakup Baykuş, Hüsnü Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 15, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242010">
                            Results of fetal anomaly screening performed at 11–14 weeks of gestation at a tertiary center
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">100-105</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Tuğba Kınay, Metin Kaplan, Mehmet Metin Altay, Şafak Özdemirci, Sinan Karadeniz, Ahmet Okyar Erol
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 20, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242010</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242008">
                           Intrafetal laser therapy in acardiac twin pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">106-109</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Resul Arısoy, Oya Pekin, Kaan Pakay, Emre Erdoğdu, Oya Demirci, Murat Muhçu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 15, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242008</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160242009">
                            Diabates in pregnancy: diagnosis and treatment. Practice Guidelines of Turkish Perinatology Society
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">110-127</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cihat Şen, Murat Yayla, Oluş Api, Elif Gül Yapar Eyi, Burcu Artunç Ülkümen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 15, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0242009</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
