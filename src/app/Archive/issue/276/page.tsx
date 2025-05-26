import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 32, Issue-1, April 2024"
                pageRange="1-98"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321006">
                           Clinical Practice Guidelines and Recommendations by World Association of Perinatal Medicine and Perinatal Medicine Foundation: Reporting Suspected Findings from Fetal Central Nervous System Examination
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">9-20</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Valentina De Robertis, Cihat Sen, Ilan Timor-Tritsch, Paolo Volpe, Alberto Galindo, Asma Khalil, Nicola Volpe, Maria del Mar Gil, Roee Birnbaum, Cecilia Villalain, Gustavo Malinger
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 14, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321006</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321001">
                            Evaluation of obstetric outcomes and risk factors of early late and term stillbirths
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-08</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Simten Genc, Aylin Ozkahraman, Mirac Ozalp, Erhan Akturk, Veli Mihmanli
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 25, 2023</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321001</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321002">
                            Assessment of sonographic measurement of the median nerve cross-sectional area in pregnant women with hypertensive disorders
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">21-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Deniz Oluklu, Sule Goncu Ayhan, Dilek Menekse Beser, Derya Uyan Hendem, Ezgi Turgut, Egemen Ayhan, Dilek Sahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 02, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321002</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321003">
                            Etiology and outcome of hydrops: A 17 years single centre experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-30</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Slobodan Spasojevic, Marija Djermanovic
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 02, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321003</span>
                    </div>
                </li>

                {/* Article 5 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321004">
                            Comparision of the efficency of oxytocin and carbetosin for prevention of postpartum bleeding in low risk pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">31-36</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nizamettin Bozbay, Leyla Aghakishiyeva, Gökcen Örgül
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 02, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321004</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321005">
                            Obstetric management and neonatal outcomes of single fetal previable preterm premature rupture of membranes (PV-PPROM) in dichorionic twin pregnancy: A case series
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">37-43</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ümran Kılınçdemir Turgut
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 09, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321005</span>
                    </div>
                </li>

                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321007">
                            Prenatal ultrasound bowel finding and its impact on perinatal outcome: a referral centre experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">44-49</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Isabella Fabietti, Chiara Vassallo, Diana Padovani, Milena Viggiano, Elena Nicastri, Benedetta Onelli, Alice Novak, Laura Valfrè, Andrea Conforti, Lorenza Driul, Marco Bonito, Pietro Bagolan, Leonardo Caforio
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 17, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321007</span>
                    </div>
                </li>

                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321008">
                            Effects of maternal SARS-CoV-2 infection on labor outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">50-56</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Toni Jurić, Helena Štrucelj, Barbara Borovac, Natalija Vuletić, Marko Klarić
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 27, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321008</span>
                    </div>
                </li>

                {/* Article 9 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321009">
                             Evaluation of cervical consistency and length by ultrasonography in predicting successful labor induction in first pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">57-61</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mehmet Nadir Kılınç, Fikriye Işıl Adıgüzel, Emre Destegül
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 08, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321009</span>
                    </div>
                </li>

                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321010">
                            Rare clinical case of harlequin ichthyosis: opportunities and difficulties of prenatal diagnosis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">62-65</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nodira Normuradova
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 13, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321011">
                            Life threatennig upper gastrointestinal bleeding in a pregnant women under low-dose Aspirin – Case report and literature review
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">66-69</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Marta Plancha, Marta Espanhol Brito, Leonor Castro Ferreira, Natacha Oliveira
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 18, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321012">
                           Comparison of maternal, fetal and perinatal outcomes between adolescent and adult pregnancies: a retrospective case-control study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">70-76</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Fatih Akkuş, Aslı Altınordu Atcı, Şükran Doğru, Huriye Ezveci, Fikriye Karanfil Yaman, Şeyma Yavuz Demirtaş, Pelin Bahçeci, Yusuf Dal, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 20, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321012</span>
                    </div>
                </li>
                {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321013">
                            Anxiety and depression affecting Turkish pregnant women during the second wave of COVID-19 pandemic
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">77-85</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cigdem Kunt Isguder, Oğuz Arslan, Mine Kanat Pektaş, Sedat Batmaz, Niyazi Tug
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 20, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321013</span>
                    </div>
                </li>
                {/* Article 14 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321014">
                            Fetal megacystis across the gestational ages: the same sign for varying etiologies and outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">86-93</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Lutfiye Uygur, Işıl Ayhan, Oya Demirci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 21, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321014</span>
                    </div>
                </li>
                {/* Article 15 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240321015">
                            Comparison of perinatal and neonatal results of grand multiparous refugee women under 35 years of age
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">94-98</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Hakan Kızılet, Ercan Cömert, Mehmet Murat Işıkalan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 24, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0321015</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
