import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 28, Issue-2, August 2020"
                pageRange="57–147"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282001">
                           The evaluation of the serum brain natriuretic peptide concentrations in preeclamptic and healthy pregnant women and its potential relationship with mean arterial blood pressure
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">57-61</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mehtap Yücedağ, Özgür Yılmaz, Kenan Kırteke, Pelin Özün Özbay, Tuncay Küme
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>April 26, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282004">
                           The evaluation of the retinal findings in the fundoscopic examination of the preeclampsia patients
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">62-67</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mustafa Kalaycı, Özgür Şahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  May 19, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282004</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282005">
                           Persistent right umbilical vein: its incidence and clinical importance
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">68-72</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ebru Çelik Kavak, Salih Burçin Kavak, Cengiz Şanlı, Gülay Bulu, İbrahim Batmaz, Seren Özden, Hasan Burak Keser
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 19, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282005</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282006">
                           The relationship between psychosocial health and prenatal attachment in pregnant women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">73-81</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nazife Bakır, Şule Sarızayim
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>June 04, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282006</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282007">
                            The assessment of early and late gestational termination cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">82–88</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Serdar Kaya, Ferdi Vaizoğlu, Sezin Yakut Uzuner, Havva Serap Toru, Mehmet Şimşek, Selahattin Kumru
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 04, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282007</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282010">
                           Evaluation of anxiety levels of pregnant women with gestational diabetes mellitus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">89–94</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Aşkın Evren Güler, Zeliha Çiğdem Demirel Güler, Asil Budak, Buket Koparal, Özge Şehirli Kıncı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 09, 2020 </span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.20.0282010</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282011">
                          Investigating the factors affecting postpartum diabetes screening in the patients with gestational diabetes mellitus: a reference tertiary center experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">95–100</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Mefkure Eraslan Şahin, Yusuf Madendağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 13, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282011</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282013">
                            Does mobile phone use of women during pregnancy cause hearing problems in infants? Preliminary observation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">101–107 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hava Bektaş, Süleyman Daşdağ, Mehmet Selçuk Bektaş
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 14, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282013</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282014">
                           Comparison of the levels of antenatal anxiety in pregnant women admitted for delivery before and after COVID-19 outbreak in Turkey
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">108–112</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Oğuz Güler, Şafak Hatırnaz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>June 17, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282014</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282015">
                            Does fetal MR alter the management of pregnancy in the diagnosis of isolated corpus callosum agenesis?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">113–119</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Mustafa Behram, Salim Sezer, Yasemin Doğan, Züat Acar, Zeynep Gedik Özköse, Alper Gezdirici, Ali Gedikbaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 23, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.20.0282015</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282008">
                          All we know about COVID-19 in pregnancy: from perinatal to ethical and psychological perspective
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">120-126</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Lorenzo Spiniello, Daniele Di Mascio, Cristina Bianco, Oscar Esposito , Ilaria Giangiordano, Ludovico Muzii, Antonella Giancotti, Roberto Brunelli, Gabriele Saccone
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 09, 2020 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282008</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282012">
                            COVID-19 during pregnancy and its impacts on perinatal health
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">127–141</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sertaç Esin, Aslı Azemi, Oluş Api, Murat Yayla, Cihat Şen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  June 13, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282012</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282009">
                           “Near miss” maternal morbidity following repeat rescue cerclage for twin pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">142–144</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Ayse Filiz Gökmen Karasu, Irana Gorchiyeva, Rana Dural, Mehmet Serdar Kutuk
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 13, 2020 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282009</span>
                    </div>
                </li>
                  {/* Article 14 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282002">
                          Letter to the Editor: Extraperitoneal cesarean section and transperitoneal cesarean section: does extraperitoneal technique shorten the duration of surgical operation?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">145 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Fatma Başak Sargın
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  May 03, 2020  </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282002</span>
                    </div>
                </li>
                  {/* Article 15 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200282003">
                         Reply to the Letter to the Editor: Extraperitoneal cesarean section and transperitoneal cesarean section: does extraperitoneal technique shorten the duration of surgical operation?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">146–147</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Cengiz Yeşilbaş, Hakan Erenel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 10, 2020 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0282003</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
