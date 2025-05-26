import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 31, Issue-3, December 2023"
                pageRange="164-255"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313009">
                           Management of preterm labor clinical practice guideline and recommendation by the WAPM-World Association of Perinatal Medicine and the PMF-Perinatal Medicine Foundation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">164-177</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Themistoklis Dagklis, Ranjit Akolekar, Cecilia Villalain, Ioannis Tsakiridis, Assaad Kesrouani, Aydin Tekay, Walter Plasencia, Sven Wellmann, Satoshi Kusuda, Nelly Jekova, Federico Prefumo, Nicola Volpe, Petya Chaveeva, Karel Allegaert, Asma Khalil, Cihat Sen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 09, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313009</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313001">
                           Prediction of posterior reversible encephalopathy syndrome (PRES) due to obstetric causes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">178-185</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nizamettin Bozbay, Özlem Polat Bozbay, Elif Ağaçayak, Süleyman Cemil Oğlak, Fazıl Avcı, Abdullah Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 10, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313001</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313002">
                            The effects of abnormal placentation on fetal development
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">186-191</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şükran Doğru, Fatih Akkuş, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 27, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313002</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313003">
                            Laboratory analysis and outcomes of pregnant women with asymptomatic COVID-19 in the peripartum period
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">192-199</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Isil Ayhan, Pinar Kumru, Ceren Unal, Lutfiye Uygur, Dilara Tugcu, Oya Demirci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 27, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313003</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313004">
                            The predictive value of ultrasonographic parameters for adverse neonatal outcomes at 40-41 weeks of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">200-206</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Semra Yuksel, Can Tercan, Muge Payaslı, Isil Turan, Merve Aldikactioglu Talmac, Ibrahim Polat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 27, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313004</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313005">
                            Is there a relationship between decreased humanin levels in gestational diabetes mellitus women requiring insulin treatment?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">207-212</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Deniz Kanber Acar, Ahmet Tayyar, Alev Atis Aydın , İsmail Dağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 27, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313005</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313006">
                           Homeobox A Cluster 7 (HOXA7) protein expression increased in the placentas of patients with preterm delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">213-218</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fırat Aşır, Süleyman Cemil Oğlak, Elif Ağaçayak, Ulaş Alabalık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 27, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313006</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313007">
                            WIPI-2 protein expression increases in the placentas of patients with preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">219-223</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fırat Aşır, Süleyman Cemil Oğlak, Elif Ağaçayak, Murat Akkuş, Engin Deveci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 12, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313007</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313008">
                            Prevalence and pattern of birth defects In a cross-sectional study at a teaching hospital In Eastern India
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">224-229</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Tanu Sharma, Archana Kumari
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 30, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313008</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313010">
                            The relationship between diagnosis and severity of preeclampsia disease with angiogenic factors; sFlt-1, PlGF, sEng, EGFR
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">230-236</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Onur Bektaş, Kıvılcım Bektaş, Burak Çimen, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 16, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313011">
                            Evaluation of the anxiety level of pregnant earthquake victims
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">237-243</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şebnem Karagün, Yusuf Dal, Fatih Akkuş, Hatice Nur Özdemir, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 01, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313012">
                            Prenatal identification of carrier status for autosomal recessive disorders on chromosomal microarray
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">244-249</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yu An, Marlena Orthlieb , Priya Ramaswamy , Shannon Thibert , Ariela Emery, Vivian Weinblatt, Robert Wallerstein
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 12, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313012</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20230313013">
                            The role of gestational weight gain in hypertensive disorders of pregnancy: open prospective cohort study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">250-255</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Bolanle Okunowo, Akinsanya Olusegun-Joseph, Adeyemi Okunowo, Omololu Adegbola, Efedaye Ohwovoriole
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 05, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.23.0313013</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
