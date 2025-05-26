import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 26, Issue-3, December 2018"
                pageRange="107-173"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263002">
                           Comparison of obstetric outcomes of pregnant women with isolated proteinuria according to proteinuria severity
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">107–111 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mehmet Özgür Akkurt, Bora Coşkun, Tuğberk Güçlü, Kaan Pakay, Engin Korkmazer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 19, 2018 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0263002</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263003">
                          Myomectomy during cesarean section: is it a safe procedure?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">112-116</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Alper Başbuğ, Esma Yıldırım, Ali Yavuzcan, Aşkı Ellibeş Kaya, Fikret Gökhan Göynümer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  October 23, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0263003</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263004">
                            Conventional Doppler myocardial performance index, tricuspid and mitral annular plane systolic excursions in the assessment of fetal heart functions
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">117-123</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şükran Doğru, Fatih Akkuş, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 03, 2018 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0263004</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263005">
                           The distribution of primary cesarean section indication at a university hospital: ten-year experience and potential lessons to be taken to decrease cesarean section rates
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">124-134</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Semir Köse, Aslı Akdöner, Sabahattin Altunyurt
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 03, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0263005</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2018.0263008">
                            Retrospective analysis of the preeclampsia cases delivered in our clinic between 2013 and 2017
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">135-140</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Gülfem Başol, Navdar Doğuş Uzun, Fulya Uzun, Ahmet Kale, Hasan Terzi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 03, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0263008</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263009">
                            Evaluation of the use of iodized salt by pregnant women and their knowledge on the use of iodized salt
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">141-147</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Emine Özge Avcı, Bahtışen Kartal, Evrim Bayraktar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 18, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.18.0263009</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263010">
                          The impact of using thromboprophylactic medication by pregnant women on the hemodynamics of fetus and uterus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">148-154 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Emre Zafer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>December 18, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.18.0263010</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263001">
                            Cesarean scar pregnancies and their management: case series
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">155-161</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Elif Ganime Aydeniz, Umut Sarı, Talat Umut Kutlu Dilek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 23, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0263001</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263006">
                            Gestational management of the patient with osteogenesis imperfecta: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">162-166</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Gülşen Doğan Durdağ, Hakan Kalaycı, Seda Yüksel Şimşek, Songül Alemdaroğlu, Gonca Çoban, Ferhat Şamlı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 10, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0263006</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20180263007">
                           Letter to the Editor: Antenatal steroids and their administration time for preventing morbidity in preterm labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">167-169</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Talat Umut Kutlu Dilek, Elif Ganime Aydeniz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 15, 2018</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.18.0263007</span>
                    </div>
                </li>

               
            </ul>
        </div>
    );
}
