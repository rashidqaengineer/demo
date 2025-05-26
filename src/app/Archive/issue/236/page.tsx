import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 21, Issue-2, August 2013"
                pageRange="47-99"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212001">
                           Amniocentesis results and retrospective analysis performed in the university clinic
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">47-52</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Salih Serin, Deniz C. Arıkan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212002">
                           Newborn autopsies: experience of referral level III neonatal intensive care unit in Turkey
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">53-59</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Hatice Tatar Aksoy, S. Suna Oğuz, Nurdan Uraş, Ömer Erdeve, Hatice Bayramoğlu, Sema Zergeroğlu, Uğur Dilmen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212003">
                            Placental abruption and analysis of risk factors
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">60-65</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Evrim Bostancı, Resul Arısoy, Mesut Polat, Emre Erdoğdu, Resul Karakuş, Ayşen Boza, Masum Kayapınar, Oya Pekin, Semih Tuğrul
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212004">
                            The efficacy of the measurement of cervical length at 18-22 weeks of gestation for the prediction of preterm delivery in low risk asymptomatic pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">66-71</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Resul Arısoy, Emre Erdoğdu, Semih Tuğrul, Taner Mirza, Fatih Fındık, Veli Mihmanlı, Yücel Şengün
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212005">
                             The importance of micronutrient deficiency in the etiology of anemia in the first trimester pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">72-76</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Deha Denizhan Keskin, Seda Keskin, Orkun Çetin, Fatma Ferda Verit Atmaca, Oğuz Yücel, Özhan Özdemir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 12, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212006">
                             Views of parents’ about taking human milk of premature infants
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">77-84</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fatma Taş Arslan, Elanur Yeniterzi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212007">
                           Prenatal diagnosis of congenital mesoblastic nephroma
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">85-88</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ghanim Khatib, Selim Büyükkurt, F. Tuncay Özgünen, S. Cansun Demir, H. Serdar İskit, Şeyda Erdoğan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212008">
                            A diprosopus monocephalus tetrophthalmos: a case report and review of literature
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">89-92</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Muhammet Erdal Sak, Abdulkadir Turgut, Sibel Sak, Hidayet Vural, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212008</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212009">
                            A case of postpartum cerebral venous thrombosis presented by convulsions
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">93-95</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Işıl Uzun Çilingir, Tuğrul Örmeci, Bariş Kaya, Mesut Mısırlıoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212009</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130212010">
                            Prenatal diagnosis and postnatal treatment with bleomycin of fetal axillary cystic hygroma
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">96-99</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Aslıhan Yazıcıoğlu, Mert Turğal, Özge Senem Yücel, Özgür Özyüncü
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0212010</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
