import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 32, Issue-2, December 2024"
                pageRange="173-262"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323001">
                           Evaluating ultrasonographic findings and pregnancy outcomes in cesarean scar pregnancy with the new Delphi Consensus Criteria: a retrospective three-years analysis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">173-180</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Şadan Tutuş, İlknur Çöl Madendağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 19, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323002">
                            Severe fetomaternal hemorrhage: a case report.
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">181-185</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cristina Aramburu Anglada, Cristina Germán Fernández, Victor Piqueras Mancebo, Paula Prieto Perez, Irene Fernández Buhigas
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 22, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323003">
                            The effect of kangaroo mother care on the vital signs of newborn babies in neonatal intensive care unit
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">186-191</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sema Tanriverdi, Ebru Çetin, Seniha Kahraman
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 22, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323004">
                            Concealed paravaginal hematoma spreading in the anterior abdominal wall - a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">192-197</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Anna Miskova, Ieva Pitkevica, Anna Saveljeva, Dace Rezeberga, Alise Skapare
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 06, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323004</span>
                    </div>
                </li>

                {/* Article 5 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323005">
                            Exploring Irisin and Nesfatin-1 in second trimester amniotic fluid: a comparative study of obese and normal weight pregnant women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">198-207</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ayse Sebnem Erenler, Rauf Melekoğlu, Tugba Raika Kiran, Feyza Inceoglu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 10, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323006">
                           Prenatal findings and outcomes of the holoprosencephaly spectrum
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">208-215</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Isil Ayhan, Ceren Unal, Ali Karaman, Oya Demirci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 03, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323006</span>
                    </div>
                </li>

                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323007">
                            The role of the neutrophil-to-lymphocyte ratio (NLR), platelet-to-lymphocyte ratio (PLR), C-reactive protein (CRP) and fibrinogen in predicting the latent period after preterm premature rupture of membranes between 24 and 34 weeks
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">216-225</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mevlut Bucak, Zeynep Seyhanli, Betul Tokgoz Cakir, Can Ozan Ulusoy, Gulsan Karabay, Gizem Aktemur, Fatih Akkus, Zehra Vural Yılmaz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 03, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323007</span>
                    </div>
                </li>

                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323008">
                            Determining the location and position of renal arteries on the aorta during the second-trimester ultrasound examination of non-anomalous fetuses: A cross-sectional study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">226-232</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Serhat Altınkaya, Ümran Kılınçdemir Turgut, Raziye Narin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 08, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323008</span>
                    </div>
                </li>

                {/* Article 9 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323009">
                             A comparison of obstetrical outcomes of the use of dinoprostone between pregnancies complicated by fetal growth restriction versus appropriate for gestational age
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">233-238</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mehmet Güçlü, Gizem Elif Dizdaroğulları
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 21, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323009</span>
                    </div>
                </li>

                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323010">
                            Evaluation of the use of first and third-trimester hemogram parameters in prediction of preterm labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">239-245</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Arda Batuhan Karaduman, Mücahit Furkan Balcı, Ece Cahide Uğur Özizmirliler, Bayram Özağaç, Mustafa Şanlı, Mehmet Bora Bozgeyik, Mehmet Ferdi Kıncı, Yaşam Kemal Akpak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 20, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323011">
                           Predicitivity of amnioumbilico-cerebral ratio on adverse neonatal outcomes compared to other doppler parameters
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">246-253</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Derya Kanza Gül, Nihal Çallıoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 09, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20240323012">
                           A pregnant woman with Brugada Syndrome: the point of view of cardiologist, anaesthesiologist and perinatologist
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">254-262</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Anna Janowicz-Grelewska, Pawel Salwa, Renata Bereta-Kurczych, Przemysław Oszukowski
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 11, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.24.0323012</span>
                    </div>
                </li>
               
            </ul>
        </div>
    );
}
