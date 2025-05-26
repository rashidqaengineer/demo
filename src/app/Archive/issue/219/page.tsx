import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 16, Issue-1, April 2008"
                pageRange="1-41"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080161001">
                           Multicentric multiple pregnancy study I: epidemiology
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-8</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Murat Yayla, Yeşim Baytur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (1)</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080161002">
                            Maternal mortality rate in the university hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">9-13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ahmet Yalınkaya, Yılmaz Özcan, Zozan Kaya, Zelal Savaş, Mahmut Erdemoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (1)</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080161003">
                           Heart disease and pregnancy: result of sixty-eight cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">14-18</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ali Kolusarı, Şahin Zeteroğlu, Hanım Güler Şahin, Mansur Kamacı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (1)</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080161004">
                             Comparison of treatment with metoprolol and nifedipine in conservative management of preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">19-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Özgür Dündar, Pınar Yörük, Levent Tütüncü, Ali Rüştü Ergür, Vedat Atay, Ercüment Müngen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (1)</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080161005">
                            The comparison of the delivery rate for the year of 2004 and 2007 in the town of Ağrı
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-30</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ercan Yılmaz, Mustafa Kara, Bakiye Okumuş, Esra Aran
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (1)</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080161006">
                            Methyl-tetrahydrofolate reductase defect in two habitual abortion patients
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">31-35</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Feyzi Gökosmanoğlu, Hakan Cinemre, Cemil Bilir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (1)</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080161007">
                            Fetal intracranial tumor with antenatal diagnosis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">36-39</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ercan Yılmaz, Nergis Zümrütbaş, Ümit Koruyucuoğlu, Nuray Bozkurt, Tünay Efetürk, Aydan Biri
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (1)</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20080161008">
                             Letter to the Editor: The umbilical cord nomogram in 11-15 weeks of pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">40-41</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Gönül Dinç
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2">Perinatal Journal 2008; 16 (1)</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
