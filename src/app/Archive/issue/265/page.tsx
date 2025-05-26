import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 29, Issue-2, August 2021"
                pageRange="87-178"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292003">
                           WAPM-World Association of Perinatal Medicine practice guidelines: fetal central nervous system examination
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">87-97</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Valentina De Robertis, Cihat Şen, Ilan Timor-Tritsch, Rabih Chaoui, Paolo Volpe, Alberto Galindo, Reuven Achiron, Ritsuko Pooh, Asma Khalil, Nicola Volpe, Francesco D’Antonio, Roee Birnbaum
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 06, 2021 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292003</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292001">
                           Does the etiology of infertility have any effect on perinatal outcomes?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">98-105</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Songül Alemdaroğlu, Gülşen Doğan Durdağ, Şafak Yılmaz Baran, Tayfun Çok, Erhan Şimşek, Esra Bulgan Kılıçdağ, Ebru Tarım
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 21, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292001</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292004">
                           The effects of body mass index, smoking and anemia on fetal birth weight
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">106-112 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ersin Çintesun, Feyza Nur İncesu Çintesun, Meltem Aydoğdu, Emine Taşkın, Mete Can Ateş, Abdul Hamid Güler, Çetin Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 21, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.21.0292004</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292006">
                            Association between low first trimester maternal serum PAPP-A levels and presence of unilateral or bilateral uterine artery diastolic notches
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">113-119</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fırat Tülek, Ali Gemici, Alper Kahraman
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>July 27, 2021 </span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.21.0292006</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292007">
                            Comparison of the pregnancy outcomes of the patients with severe symptoms who received medical treatment for COVID-19 versus the patients with mild-moderate symptoms
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">120-125</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Semra Yüksel, Güray Tuna, Fatma Ketenci Gencer, Hatice Yaşat Nacar, Süleyman Salman
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>July 27, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292007</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292008">
                            The benefit of online education in twin-to-twin transfusion syndrome: could it be an eye-opening platform?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">126-132</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Selim Mısırlıoğlu, Mehmet Murat Işıkalan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 30, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292008</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292009">
                          A year of COVID-19 pandemic in Turkey: knowledge level, attitude and perspective of pregnant and postpartum women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">133-142 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İrem Şenyuva, Bahar Baysal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 30, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292009</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292010">
                            Effects of nifedipine on fetal pulmonary blood flow in preterm labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">143-147 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şule Göncü Ayhan, Deniz Oluklu, Eda Özden Tokalıoğlu, Dilek Şahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 30, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.21.0292010</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292005">
                            Empty fetal renal fossa results of a tertiary center
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">148-154</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Erzat Toprak, Şadan Tutuş
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 03, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292005</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292011">
                            Understanding barriers to utilization of 17-hydroxyprogesterone caproate and other interventions to prevent preterm birth in Fresno County, California
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">155-164 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Subhashini Ladella, Amber Shaver, Tania Pacheco-Werner, Cynthia Cortez, Mallory Novack, Andrea Wiemann, Miriam Kuppermann
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 01, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292011</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292012">
                           Investigation of transvaginal and transabdominal ultrasound and bladder fullness in the evaluation of cervical length in low-risk pregnant women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">165-172</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Feyza Nur İncesu Çintesun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 02, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292012</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210292002">
                            Maternal death due to COVID-19: is there anything that changed during the treatment? A case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">173-178</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Pınar Kumru, Ebru Çöğendez, Eralp Bulutlar, Fırat Ortak, Neslihan Başkılıç, Tülin Yollu, Resul Karakuş, Semra Kayataş
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 22, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0292002</span>
                    </div>
                </li>
               
            </ul>
        </div>
    );
}
