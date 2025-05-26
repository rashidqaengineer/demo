import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 31, Issue-2, August 2023"
                pageRange="86-163"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312001">
                           Cytomegalovirus infection in pregnancy: exploring screening strategies, prevalence rates, and impact on newborns in Turkey
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">86-93</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Pınar Tuğçe Özer, Yaşam Kemal Akpak, Mehmet Özer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 17, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312002">
                            An antenatal intervention pilot service development project in a community perinatal team
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">94-100</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Katerina Denediou Derrer, Jacqui Christopher, Sarah Cohen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 20, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312003">
                            Management of catecholaminergic polymorphic ventricular tachycardia in pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">101-104</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Jennifer McCormick, Maggie Kuhlmann
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 07, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312004">
                            Fetal diagnosis of a right ventricular aneurysm case with favorable outcome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">105-107</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Aysegul Ozel, Rima Salamova, Taliha Oner, Murat Muhcu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 29, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312005">
                            Vaccination for SARS-COV-2 in pregnancy in a referral center in Italy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">108-110</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Marina Tesorone , Ciro Verdoliva, Maria Corvino, Alessandra Amendola, Marco Papa, Gabriele Saccone, Giovanni Nazzaro, Marilena Miranda, Giuseppe Bifulco, Mariavittoria Locci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 01, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312006">
                            Incidence and risk factors of Retinopathy of Prematurity – a prospective observational study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">111-117</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Muthu Balamurali, Nadesan Balakrishnan, Krishnaswami Devimeenakshi, Sridevi A Naaraayan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 02, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312007">
                           A comparative study for feto-maternal outcome of trial of labour after caesarean: spontaneous versus Induction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">118-124</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Antima Singh, Rajiv Mahendru, Shivani Khandelwal, Vijayata Sangwan, Pinkey Lakra, Manisha Upadhyay
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 22, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312008">
                            Perioperative management of placenta accreta spectrum after early pregnancy loss
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">125-130</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Priyanka Gaur, Anja Frost, Erin Gomez, Katarzyna Macura, Arthur Vaught, Kristin Patzkowsky
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 31, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312008</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312009">
                            Acute fatty liver of pregnancy: A case report and review of the literature
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">130-134</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Serhat Akcan, Cuma Taşın
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 28, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312009</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312010">
                            Evaluation of the effect of maternal iodine status on recall frequency in newborn TSH screening
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">135-140</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fatma Özgüç Çömlek, Ali Toprak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 28, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312011">
                            Mild COVID-19 among pregnant women managed with home self-isolation in Lebanon: A prospective cohort study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">141-147</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mohamad K. Ramadan, Nadine Saleh, Khouloud Dimachkieh, Saadeddine Itani, Jamal Itani, Dominique A. Badr
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 31, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312012">
                            The impact of risk factors for gestational diabetes mellitus on the outcomes of newborns in a Nigerian Teaching Hospital: a prospective open cohort study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">148-156</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Bolanle Okunowo, Ifedayo Odeniyi, Oluwarotimi Olopade, Adeyemi Okunowo, Omololu Adegbola, Olufemi Fasanmade, Efedaye Ohwovoriole
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 31, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312012</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230312013">
                            Seasonal variation of hyperemesis gravidarum prevalence
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">157-163</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yusuf Dal, Şebnem Karagün, Hatun Çolak, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 31, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0312013</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
