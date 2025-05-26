import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 32, Congress Supplement (Perinatal Medicine-2024), May 2024"
                pageRange="1-34"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp001">
                           OP-001 Fetal branching anomalies of the aortic arch and vascular rings: an experience of a single Italian reference center
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">01</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Antonia Giudicepietro, Carmela Morelli , Fiorella Fratta, Fortuna Del Gaizo, Ludovica Spinelli Barrile, Laura Di Pietto, Beniamino Tormettino, Marialuisa Ricciardiello, Maria Giovanna Russo
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 16, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp002">
                            OP-002 Excessive prenatal supplementation of ıodine and fetal goiter; report of managment conservatively of fetal goiter: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-03</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Birsen Konukcu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp002</span>
                    </div>
                </li>

                {/* Article 3 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp003">
                            OP-003 Labour induction in obese patients
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">03</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Anna Miskova, Agnese Pridane, Dace Rezeberga
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp004">
                            OP-004 Reversing the reversed: successful case of early-onset fetal growth retardation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">03-04</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Valerie Tiempo Guinto
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp004</span>
                    </div>
                </li>
                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp005">
                            OP-005 Risk factors for recurrent gestational diabetes mellitus in multiparous women: a retrospective cohort study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">04</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Liberia Troia, Martina Garassino, Riccardo Bertinato, Caroline Leitao Thomaz, Giulia Turatello, Valentino Remorgida
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp005</span>
                    </div>
                </li>
                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp006">
                            OP-006 Cardiovascular disease after early-onset preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Paula Domínguez-del Olmo, Ignacio Herraiz, Cecilia Villalaín, Gema Ruíz, Enrique Morales, Jose Luis Ayala, Jorge Solís, Alberto Galindo
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp007">
                            OP-007 First-trimester preeclampsia screening for the detection of fetal growth restriction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">05-06</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Cecilia Villalaín González, Carmen San Martín, Alice María Colmenero-Walsh, Eva Robisco, Ignacio Herraiz, Alberto Galindo
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp007</span>
                    </div>
                </li>

                {/* Article 8 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp008">
                            OP-008 Performance of the FMF first-trimester preeclampsia-screening algorithm in women with high-risk factors
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6-7</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cecilia Villalaín, Alice María Colmenero-Walsh, Carmen San Martín, Eva Robisco, Alberto Galindo, Ignacio Herraiz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp008</span>
                    </div>
                </li>

                {/* Article 9 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp009">
                            OP-009 Antenatal corticosteroids in the late preterm: a five year retrospective comparative study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">7-8</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Lou Dominique Aguinaldo
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp009</span>
                    </div>
                </li>

                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp010">
                            PP-010 A Case of monochorionic monoamniotic twins with cord entanglement and its outcome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">8-9</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        M. Pavithra, Bharathı A, Noor Ayesha Begum, Prashanth Gollar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp011">
                            PP-011 A comparative review of guidelines on macrosomia and shoulder dystocia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">9-10</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sonia Gkiouleka, Ioannis Tsakiridis, Elpida Ralli, Ioannis Kalogiannidis, Apostolos Mamopoulos, Apostolos Athanasiadis, Themistoklis Dagklis
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp012">
                             PP-012 Comparative review of guidelines on the diagnosis and management of neonatal hypoglycemia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">10-11</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sonia Gkiouleka, Ioannis Tsakiridis, Maria Gkiouleka, Anastasia Daniilidou, Apostolos Mamopoulos, Apostolos Athanasiadis, Themistoklis Dagklis
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp012</span>
                    </div>
                </li>
                {/* Article 13 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp013">
                            PP-013 A Happy ending of a velamentous cord insertion
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">11-12</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Paula Granja
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp013</span>
                    </div>
                </li>
                {/* Article 14 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp014">
                            PP-014 A rare anomaly, limb body wall complex
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Elif Yavuz, Nazli Zeynep Cetinkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp014</span>
                    </div>
                </li>
                {/* Article 15 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp015">
                            PP-015 Birth injuries in newborns, about 132 cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12-13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mariem Barka, Oussama Mghirbi, Donia Brahem, Nassima Soyed, Maha Taamli, Amani Khelifi, Aida Ghith, Sonia Nouri, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp015</span>
                    </div>
                </li>
                 {/* Article 16 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp016">
                            PP-016 Congenital cytomegalovirus infection: a clinical study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">13-14</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mariem Barka, Oussama Mghirbi, Mohamed Youssef Fekih, Nassima Soyed, Maha Taamli, Donia Brahem, Amani Khelifi, Aida Ghith, Naila Hannachi, Sonia Nouri, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp016</span>
                    </div>
                </li>
                 {/* Article 17 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp017">
                            PP-017 Impact of prenatal diagnosis of congenital heart disease on neonatal morbidity and mortality
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">14-15</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mariem Barka, Oussama Mghirbi, Nassima Soyed, Maha Taamli, Donia Brahem, Amani Khelifi, Aida Ghith, Sonia Nouri, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp017</span>
                    </div>
                </li>
                 {/* Article 18 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp018">
                            PP-018 Body mass index change in pre-pregnancy normal weight women and fetal growth
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">15</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Zoran Mestrovic
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp018</span>
                    </div>
                </li>
                 {/* Article 19 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp019">
                           PP-019 Comparing neonatal outcomes of pregnant women treated for opioid use disorder (OUD) with mono-buprenorphine to neonatal outcomes of pregnant women treated for oud with combination Buprenorphine + Naloxone
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">15-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ashlyn Hodges, Martin Olsen, Lori Moore, Nicole Lewis
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp019</span>
                    </div>
                </li>
                 {/* Article 20 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp020">
                             PP-020 Comparative review of major guidelines on cervical cerclage
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sonia Gkiouleka, Ioannis Tsakiridis, Eirini Boureka, Apostolos Mamopoulos, Apostolos Athanasiadis, Themistoklis Dagklis
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp020</span>
                    </div>
                </li>
                 {/* Article 21 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp021">
                            PP-021 A comparative review of national and international guidelines on the diagnosis and management of fetal growth restriction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sonia Gkiouleka, Ioannis Tsakiridis, Apostolos Mamopoulos, Ioannis Kalogiannidis, Apostolos Athanasiadis, Themistoklis Dagklis
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp021</span>
                    </div>
                </li>
                 {/* Article 22 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp022">
                            PP-022 A comprehensive review of major guidelines on postnatal care
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18-19</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sonia Gkiouleka, Ioannis Tsakiridis, Nikolaos Kostakis, Eirini Boureka, Apostolos Mamopoulos, Ioannis Kalogiannidis, Apostolos Athanasiadis, Themistoklis Dagklis
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp022</span>
                    </div>
                </li>
                 {/* Article 23 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp023">
                            PP-023 A comparative review of national and international guidelines on the diagnosis and management of fetal growth restriction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">19-20</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nart Faruk Kuneshko, Victor Kim, Inna Tsaroeva, Alexander Makatsariya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp023</span>
                    </div>
                </li>
                 {/* Article 24 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp024">
                            PP-024 Evaluation of the effectiveness of plasmapheresis in patients with habitual miscarriage and antiphospholipid syndrom
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">20-21</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nart Faruk Kuneshko, Inna Tsaroeva, Victor Kim
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp024</span>
                    </div>
                </li>
                 {/* Article 25 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp025">
                            PP-025 Assessment of knowledge, attidues and practices, on COVID-19 vaccine among high risk pregnant and lactating women: a cross-sectional study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">21-22</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Iris Soria-Arikan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp025</span>
                    </div>
                </li>
                 {/* Article 26 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp026">
                            PP-026 Obstetrical and neonatal outcome of premature rupture of amniotic membranes before 28 weeks of gestatio
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">22-23</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mariem Barka, Oussama Mghirbi, Donia Brahem, Maha Taamli, Nassima Soyed, Amani Khelifi, Aida Ghith, Sonia Nouri, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp026</span>
                    </div>
                </li>
                 {/* Article 27 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp027">
                            PP-027 Obstetrical and neonatal outcome of premature rupture of amniotic membranes before 28 weeks of gestatio
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">23</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        S.P. Posokhova , A.D. Shyroka
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp027</span>
                    </div>
                </li>
                 {/* Article 28 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp028">
                            PP-028 Obstetric brachial plexus paralysis: a case-control study on risk factors, epidemiological and clinical perspectives
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">23-24</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Oussama Mghirbi, Myriam Barka, Donia Brahem, Maha Taamli, Amani Khlifi , Aida Ghith, Mehdi Boutrif , Sonia Merchaoui, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp028</span>
                    </div>
                </li>
                 {/* Article 29 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp029">
                            PP-029 Poland syndrome manisfesting as defective pectoralis major muscle and dextroscoliosis: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">24-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Anant Vijay Singh Rathee, Mohammed Althobaiti, Sonia Nouri, Mohammed Adel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp029</span>
                    </div>
                </li>
                 {/* Article 30 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp030">
                            PP-030 Pregancy and endometriosis-a mini-rewiev of cases and literature
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Madalina Irina Ciuhodaru
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp030</span>
                    </div>
                </li>
                {/* Article 31 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp031">
                            PP-031 Prognostic significance of the ADAMTS-13/vWF axis during pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">25-26</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Kristina Grigoreva
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp031</span>
                    </div>
                </li>
                {/* Article 32 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp032">
                            PP-032 Single umbilical artery and supernumerary vessels in the umbilical cord: a review of fetal and pregnancy outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Alessandro Libretti, Anthony Nicosia, Alberto De Pedrini, Libera Troìa, Valentino Remorgida
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp032</span>
                    </div>
                </li>
                {/* Article 33 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp033">
                            PP-033 The Atrioventricular complete heart block diagnosed on the preoperative routine test for caesarian section
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sonila Bele, Albana Banushi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp033</span>
                    </div>
                </li>
                {/* Article 34 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp034">
                            PP-034 The Contribution of molecular cytogenetics to diagnosis and genetic counseling of microdeletional syndromes in neonatal period
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">27-28</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mariem Barka, Oussama Mghirbi, Salma Chaieb, Amani Khelifi, Donia Brahem, Maha Taamli, Aida Ghith, Nassima Soyed, Dorra Hmida, Sonia Nouri, Soumaya Mougou, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp034</span>
                    </div>
                </li>
                {/* Article 35 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp035">
                            PP-035 Hydrops fetalis: etiologies, management and outcome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">28-29</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mariem Barka, Oussama Mghirbi, Maha Taamli, Donia Brahem, Nassima Soyed, Amani Khelifi, Aida Ghith, Sonia Nouri, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp035</span>
                    </div>
                </li>
                {/* Article 36 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp036">
                            PP-036 The impact of the covid-19 pandemic on the prevalence of intrauterine fetal death in philippine general hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">29-30</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Claire Anne Alvarado-Lorica, Mario Philip Festin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp036</span>
                    </div>
                </li>
                {/* Article 37 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp037">
                            PP-037 Yogic healing: a complementary biofield therapy for children with behavioral challenges and support for parents - a case series
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">30-31</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Bharathi A, Saraswathi K Hegde, Nisarg Aravindan, Sharath Kote GS
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp037</span>
                    </div>
                </li>
                {/* Article 38 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp038">
                            PP-038 Medical management of intrauterine fetal demise in women with a scarred uterus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">31-32</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Jane Lavery, Janitha Costa
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp038</span>
                    </div>
                </li>
                {/* Article 39 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp039">
                            PP-039 COVID-19 during pregnancy and systemic inflammatory response syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">32-33</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nilufar Gashimova, Viсtoria Bitsadze, Jamilya Khizroeva, Kristina Grigoreva, Alexander Makatsariya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp039</span>
                    </div>
                </li>
                {/* Article 40 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp040">
                            PP-040 Contribution of procalcitonin measured in umbilical cord blood in the management of asymptomatic early neonatal bacterial infections
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">33</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Oussama Mghirbi, Myriam Barka, Sarra Becheur, Donia Brahem, Maha Taamli, Amani Khlifi, Sonia Merchaoui, Jihen ben Abdallah, manel Bellalah, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp040</span>
                    </div>
                </li>
                {/* Article 41 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/2024032supp041">
                            PP-041 Hypoxic and ischemic encephalopathy: current situation in Tunisia, a descriptive and analytical multicenter study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">33-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Oussama Mghirbi, Myriam Barka, Rim Ben Aziza, Hajeur Chourou, Samia Kacem, Amira Bouraoui, Nadia Nadia Hentati, Sadok Hannechi, Sonia Blibech, Mariem Youssef, Maher Saidene, Hachmi Ben Hammouda, Hayet Ben Hamida, Maroua Elouaer, Kamel Monastiri, Sonia Merchaoui, Nabiha Mahdhaoui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract (Formatted)</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.032supp041</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
