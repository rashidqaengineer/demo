import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 24, Issue-3, December 2016"
                pageRange="129-182"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160243001">
                           Assessment of maternal and perinatal outcomes in pregnant women with isolated proteinuria
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">129-135</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Melda Kuyucu, Sevcan Arzu Arınkan, Dilşad Herkiloğlu, Murat Muhcu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 22, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2016.0243003">
                           Evaluating 101 cases with the anomaly of fetal central nervous system
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">136-141</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İlknur Gümüş, Atalay Ekin, Ceren Gölbaşı, Ezgi Hürcan, Cüneyt Eftal Taner
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 22, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243003</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2016.0243005">
                            Comparison of protein amount in 24-hour urine and protein/creatinine rate in spot urine of preeclamptic pregnant women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">142-146</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Sevgi Gökdoğan, Berna Aslan Çetin, Pınar Yalçın Bahat, Alev Atış Aydın, Aysu Akça
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 28, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243005</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2016.0243007">
                            Quercetin improves metabolic sequels and placental morphology in streptozotocin-induced diabetic rats
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">147-155</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Aynur Erşahin, Meryem Hocaoglu, Selin Demirer, Ferhat Cengiz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 14, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243007</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2016.0243008">
                            Fetal gender-specific difference for placental volume assessed with 3D-ultrasonography
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">156-161</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Burcu Artunç Ülkümen, Halil Gürsoy Pala, Yıldız Uyar, Faik Mümtaz Koyuncu, Yeşim Bülbül
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 18, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243008</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2016.0243009">
                           The relation of mean platelet volume and platelet distribution width levels with the severity of preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">162-165</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Semra Oruç Koltan, Burcu Artunç Ülkümen, Halil Gürsoy Pala
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 20, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243009</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160243002">
                           Monochorionic quadramniotic quadruplet pregnancy after single-embryo transfer
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">166-169</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ahmet Karataş, Yaprak Engin Üstün, Cavidan Gülerman, Yesim Bardakçı, Nafiye Yılmaz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 28, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243002</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2016.0243004">
                            Placenta percreta in pregnant woman with massive hematuria: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">170-173</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hacer Uyanıkoğlu, Kenan Gengeç, Güler Çakmak , Halil Çiftçi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 03, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243004</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20160243006">
                           Spontaneous pneumomediastinum and pneumothorax developing after vaginal delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">174-177</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ersin Çintesun, Feyza Nur İncesu Çintesun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 12, 2016</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.16.0243006</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
