import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 25, Issue-3, December 2017"
                pageRange="91-156"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253001">
                           Status of neutrophil-lymphocyte ratio and 25-hydroxyvitamin D in preeclampsia and preterm birth
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">91-96</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Lebriz Hale Tamer, Yeliz Aykanat, Fulya Gökdağlı Sağır, Oktay Olmuşçelik, Suna Özdemir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 03, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253002">
                           The use of maternal delta neutrophil index for the prediction of chorioamnionitis in very early preterm premature rupture of membranes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">97-102</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Rauf Melekoğlu, Sevil Eraslan, Ebru Çelik, Harika Gözde Gözükara Bağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 07, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253003">
                            Fetal prenasal thickness and its correlated ratios between 16 and 23 weeks of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">103-107</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Resul Arısoy, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 19, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253004">
                           Maternal and neonatal outcomes of the pregnant women with idiopathic thrombocytopenic purpura
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">108-115</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Rauf Melekoğlu, Sevil Eraslan, Ayşe Gülçin Baştemur, Ebru Çelik, Harika Gözde Gözükara Bağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 30, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253006">
                            Nomograms of the fetal neck circumference and area
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">116-120</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Muhittin Eftal Avcı, İbrahim Polat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 05, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253006</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253008">
                            Gestational outcomes of thyroid function in the first trimester
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">121-126</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Osman Samet Günkaya, Hüseyin Kıyak, Ali Ekiz, Ali Gedikbaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 07, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253008</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253009">
                           Use of obstetric gel in nulliparous pregnant women: maternal and neonatal outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">127-132</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Burçhan Aydıner, Hüseyin Kıyak, Fatih Mete, Ali Ekiz, İbrahim Polat, Ali Gedikbasi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 07, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253009</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253010">
                            Prevalence of asymptomatic bacteriuria among pregnant women: a cross-sectional study in Harare, Zimbabwe

                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">133-138</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Judith Musona-Rukweza, Muchabayiwa Francis Gidiri, Pasipanodya Nziramasanga, Clara Haruzivishe, Babill Stray-Pedersen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 07, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313007</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253005">
                           Influenza infection during pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">139-144</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Rauf Melekoğlu, Uğur Keskin, Ebru Tarım, Cihat Şen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 01, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253005</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253007">
                            Complete hydatidiform mole in a twin complicated with preeclampsia: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">145-148</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Feyza Nur İncesu Çintesun, Ersin Çintesun, Ayşe Yavuz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 05, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253007</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2017.0253011">
                            A case series on fetal ovarian cysts
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">149-152</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Umut Sarı, Arzu Doruk, Ganime Elif Aydeniz, Savaş Gündoğan, Talat Umut Kutlu Dilek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 08, 2017</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.17.0253011</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
