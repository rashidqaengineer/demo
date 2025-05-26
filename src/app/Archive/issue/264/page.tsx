import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 29, Issue-1, April 2021"
                pageRange="1-86"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291001">
                          Ultrasound imaging of the fetal optic nerve from a different plane
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-7</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Erzat Toprak, Mehmet Murat Işıkalan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 24, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291002">
                           The comparison of amniotic fluid nuclearfactor-kappa B levels in pregnant women who underwent cesarean section or normal vaginal labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">8-12 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Suat Süphan Erşahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  January 04, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.21.0291002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291003">
                            Evaluation of the impact of residual anhydramnios following preterm premature rupture of membranes on respiratory distress syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">13-19</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Erdem Şahin, Yusuf Madendağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 17, 2021 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291004">
                            The comparison of the perinatal outcomes in monochorionic twin pregnancies with and without selective intrauterine growth restriction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">20-26</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Elif Fide Pişirgen, Münip Akalın, Oya Demirci, Pınar Kumru, Emine Eda Akalın
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 17, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291005">
                            The effects of oligohydramnios on perinatal outcomes after preterm premature rupture of membranes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">27-32 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Subhashini Ladella, David Lee, Fatemeh Abbasi, Brian Morgan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 23, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291006">
                            Evaluation of epicardial fat tissue thickness and aortic stiffness in patients with gestational diabetes mellitus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">33-38</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Melike Nur Akın, Burcu Kasap, Fatih Akın, Burak Sezgin, İbrahim Altun, Aysun Camuzcuoğlu, Rüya Deveer, Nilgun Turhan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 25, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291007">
                          Does maternal serum progesterone level in early pregnancy predict placental dysfunction in third trimester?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">39-45</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Gülşen Doğan Durdağ, Şafak Yılmaz Baran, Songül Alemdaroğlu, Hakan Kalaycı, Seda Yüksel Şimşek, Selçuk Yetkinel, Serdinç Özdoğan, Esra Bulgan Kılıçdağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 31, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.21.0291007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291008">
                            Comparison of conservative and radical surgery in the management of placenta previa percreta
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">46-53</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Burak Sezgin, Burcu Kasap, Eda Adeviye Şahin, Aysun Camuzcuoğlu, Hakan Camuzcuoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 01, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291008</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291009">
                            The incidence and distribution of anomalies found in the pregnant women applied to Kayseri City Hospital for obstetric ultrasound in 2019: a retrospective analysis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">54-62</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Şadan Tutuş
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  February 02, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291009</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291010">
                           Assessment of second-trimester amniocentesis cases: 10-year experience of a tertiary center
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">63-70</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Reyhan Gündüz, Senem Yaman Tunç, Rezan Buğday, Diclehan Oral, Selahaddin Tekeş, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 03, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291011">
                            Maternal and perinatal outcomes in women with advanced maternal age affected by SARS-CoV-2 infection (Phase-2): The WAPM (World Association of Perinatal Medicine) Working Group on COVID-19
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">71-78</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Francesco D'Antonio, Cihat Şen, Daniel Di Mascio, Alberto Galindo, Cecilia Villalain, Ignacio Herraiz, WAPM Working Group on COVID-19
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  March 09, 2021 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291012">
                            Prenatal diagnosis of umbilical artery thrombosis in the second trimester: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">79-82</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Alev Esercan, Emre Ekmekci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 01, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291012</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210291013">
                            Prenatal diagnosis of tetralogy of Fallot with a restrictive ventricular septal defect
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">83-86 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cecilia Villalaín, David Escribano, Enery Gómez-Montes, Miguel Ángel Granados, Enrique García, Alberto Galindo
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 11, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0291013</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
