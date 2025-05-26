import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 28, Issue-3, December 2020"
                pageRange="149-224"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283001">
                          COVID-19 in pregnancy: Italian experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">149-153</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nicola Volpe, Giovanni Battista Luca Schera, Tiziana Frusca
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Opinion</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  June 15, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283007">
                           Elective cesarean section on maternal request: ethical and legal considerations
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">154-156 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Claudia Casella, Emanuele Capasso, Cristina Bianco, Gabriele Saccone, Maurizio Guida, Vincenzo Graziano, Mariano Paternoster
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Opinion</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 14, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283007</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283002">
                            The relationship between the low Apgar scores of the newborns and hematologic parameters which are inflammatory markers
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">157-163</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Gökhan Karakoç, Serenat Eriş Yalçın, And Yavuz, Çağatayhan Öztürk, Aykan Yücel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  June 13, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.20.0283002</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283003">
                            The effects of cervical cerclage practice on perinatal and neonatal outcomes according to the indications
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">164-169</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Serdar Kaya, Fatma Ceren Güner, Mehmet Şimşek, Selahattin Kumru
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  June 23, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283003</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283005">
                            The assessment of twin pregnancies delivered in our clinic: three-year experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">170-175</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cengiz Şanlı, Salih Burçin Kavak, Melike Aslan, Ebru Çelik Kavak, İbrahim Batmaz, Gülay Bulu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  July 27, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283006">
                            The effects of the association of placenta previa and placenta accreta on the short-term maternal morbidity
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">176-182 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Şener Gezer, Mehmet Zeki Türe, Sibel Balcı, İzzet Yücesoy
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  August 25, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283008">
                          The assessment of maternal deaths between 2015 and 2020 in Elazığ, Turkey
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">183-189</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      İbrahim Batmaz, Salih Burçin Kavak, Ebru Çelik Kavak, Evrim Gül, Cengiz Şanlı, Gülay Bulu, Hasan Burak Keser
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 02, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283008</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283010">
                            The importance of C-reactive protein and procalcitonin in the diagnosis of chorioamnionitis in the cases with preterm premature rupture of membranes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">190-195</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Cuma Taşın, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  October 03, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283010</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283011">
                            Nomogram for second trimester corpus callosum measurements: are nomograms reliable?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">196-201</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Songül Alemdaroğlu, Şafak Yılmaz Baran, Gülşen Doğan Durdağ, Seda Yüksel Şimşek, Gonca Çoban Şerbetçioğlu, Hakan Kalaycı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  October 07, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.20.0283011</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283012">
                            Immersion in water during labor and delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">202-205</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Carlo De Angelis, Chiara De Angelis, Fabrizia Santangelo, Gabriele Saccone, Daniela Ioffredo, Jessica Anna Cinzia Paino, Attilio Di Spiezio Sardo
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 09, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283012</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283004">
                            Fetoscopic laser valve ablation in the posterior urethral valve case with intrauterine diagnosis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">206-211</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Selahattin Kumru, Serdar Kaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 27, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283004</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283009">
                            A case of Roberts syndrome: its ultrasonographic characteristics and genetic diagnosis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">212-216</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Reyhan Ayaz, Emine Göktaş, Mine Balasar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 02, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283009</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20200283013">
                           Acute abdomen in a term pregnancy due to isolated tubal torsion
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">217–220</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Güneş Topçu, Yağmur Şimşek, Şenay Çetin, Murat Muhçu, Ayşegül Özel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 12, 2020</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.20.0283013</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
