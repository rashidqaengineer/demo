import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 32, Issue-2, August 2024"
                pageRange="99-172"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322001">
                           Evaluation of the leukoglycemic index in preeclampsia: Could it have diagnostic value?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">99-103</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ahmet Zeki Nessar, Yusuf Dal, Şebnem Karagün, Sefanur Gamze Karaca, Mürşide Çevikoğlu Kıllı, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 16, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322002">
                            The effect of previous deliveries on second-trimester uterine artery Doppler parameters
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">104-110</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Yusuf Dal, Şebnem Karagün, Fatih Akkuş, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 01, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322003">
                            The atrioventricular complete heart block diagnosed on the preoperative routine test for caesarian section
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">111-114</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sonila Bele, Albana Banushi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 01, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322004">
                            A happy ending of a velamentous cord insertion
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">115-116</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Paula Granja
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 04, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322004</span>
                    </div>
                </li>

                {/* Article 5 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322005">
                            Excessive prenatal supplementation of iodine and fetal goiter; report of managment conservatively of fetal goiter: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">117-121</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Birsen Konukcu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 21, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322006">
                            Vacuum-assisted delivery: maternal and neonatal outcomes at a tertiary research hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">122-127</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Oğuz Arslan, Burak Giray, Niyazi Tug
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 22, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322006</span>
                    </div>
                </li>

                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322007">
                            Prenatal diagnosis of fetal goiter and successful treatment with intraamniotic levothyroxine: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">128-131</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ahmet Yalınkaya, Süleyman Cemil Oğlak, Reyhan Gündüz, Elif Ağaçayak, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 04, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322007</span>
                    </div>
                </li>

                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322008">
                            Alanine aminotransferase to platelet ratio as a diagnostic tool for mild intrahepatic cholestasis of pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">132-137</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şebnem Karagün, Yusuf Dal, Hamza Yıldız, Ahmet Zeki Nessar, Sefanur Gamze Karaca, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 08, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322008</span>
                    </div>
                </li>

                {/* Article 9 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322009">
                             Association between fetal occiput position and fetal spine following induction of labour (IOL) and birth outcomes : a prospective study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">138-154</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nor Azlina Che Yaacob, Nik Rafiza Nik Muhamad Afendi, Wan Mohd Zahiruddin Wan Mohammad, Nik Ahmad Zuky Nik Lah
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 12, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322009</span>
                    </div>
                </li>

                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322010">
                            Examination of perinatal and postnatal outcomes of pregnant women who refuse the recommended invasive procedure for increased nuchal translucency
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">155-160</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İlkin Seda Can Çağlayan, Vildan Kılıç
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 17, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322011">
                           Evaluation of perinatal outcomes according to fasting bile acie level in pregnant women diagnosed with intrahepatic cholestasis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">161-165</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gizay Serin, Fatma Ketenci Gencer, Havva Betül Bacak, Alev Atış Aydın, Tevfik Kaçar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 17, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240322012">
                           HOXA1 expression in placentas of woman with fetal growth restriction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">166-172</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Gül Ebru Aydeniz Acar, Ayşenur Sevinç Akdeniz, Zeynep Türe, Ayşegül Aşır, Mesut Acar, Fırat Aşır, Tuğcan Korak, Serhat Ege
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 27, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0322012</span>
                    </div>
                </li>
               
            </ul>
        </div>
    );
}
