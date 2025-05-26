import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 30, Issue-3, December 2022"
                pageRange="231-330"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303010">
                           Monkeypox in pregnancy: clinical recommendation by the World Association of Perinatal Medicine-WAPM and the Perinatal Medicine Foundation-PMF
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">231-239</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Cecilia Villalain, Cihat Şen, Karel Allegaert, Erasmo Huertas, Milan Stanojevic
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 23, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303010</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303007">
                           Unresolved issues on the antenatal use of corticosteroids for fetal lung maturation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">240-243</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ioannis Tsakiridis, Themistoklis Dagklis, Cihat Şen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Opinion</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 14, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303007</span>
                    </div>
                </li>
                {/* Article 3 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303003">
                           A clinically informative screening for perinatal depression: bringing psychopathology and positive mental health together
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">244-249</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Carlos Carona, Cristina Canavarro, Manuel Quartilho, Ana Fonseca
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Opinion</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 15, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303003</span>
                    </div>
                </li>

                {/* Article 4 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303001">
                           The effect of induction duration on postabortal hemorrhage in second-trimester pregnancy termination with misoprostol
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">250-256</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mehmet Murat Işıkalan, Buşra Özkaya, Eren Berkay Özkaya, Erzat Toprak, Enes Ferlibaş, Nurullah Şengül, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 14, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303001</span>
                    </div>
                </li>
                {/* Article 5 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303002">
                           Advantages and limitations of QF-PCR analysis in invasive prenatal genetic diagnosis: a tertiary center experience from Turkey
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">257-265</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Münip Akalın, Oya Demirci, Gizem Elif Dizdaroğulları, Erman Çiftçi, Sümeyra Oğuz, Ali Karaman
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 01, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303002</span>
                    </div>
                </li>
                {/* Article 6 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303004">
                          Correlation of glycosylated hemoglobin and macrosomia in infants of diabetic mothers
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">266-272</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Anwika Kirti Kujur, Krishnaswami Devimeenakshi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 24, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303004</span>
                    </div>
                </li>
                {/* Article 7 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303005">
                           Evaluation of adolescent pregnancies in terms of maternal and perinatal risks
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">273-277</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ülkü Ayşe Türker Aras, Engin Korkmazer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 25, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303005</span>
                    </div>
                </li>
                {/* Article 8 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303008">
                           Prenatal diagnosis and pregnancy outcomes of 149 fetuses with tetralogy of Fallot accompanied by concomitant cardiac and extracardiac anomalies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">278-283</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökhan Bolluk, Özge Özdemir, Helen Bornaun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 03, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303008</span>
                    </div>
                </li>
                {/* Article 9 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303009">
                           Anxiety and fear about childbirth and postpartum period in last trimester and its relation to childbirth pain
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">284-291</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Meltem Uğurlu, Tülay Yavan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 25, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303009</span>
                    </div>
                </li>
                {/* Article 10 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303011">
                           Importance of isolated minor findings on fetal ultrasound examinations in the diagnosis of Down syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">292-300</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gizem Elif Dizdaroğulları, Oya Demirci, Münip Akalın, Özge Kahramanoğlu, Aydın Öcal, Ali Karaman
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 25, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303011</span>
                    </div>
                </li>
                {/* Article 11 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303012">
                           Maternal and neonatal outcomes of pregnant women with SARS-CoV-2 infection in our tertiary hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">301-307</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Özge Şehirli Kıncı, Mehmet Ferdi Kıncı, Firangiz Mirzazade, Hüseyin Oğuz Yılmaz, Ercan Saruhan, Ahmet Akın Sivaslıoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 25, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303012</span>
                    </div>
                </li>
                {/* Article 12 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303013">
                           Latest trend ectopic pregnancy management in a tertiary health center: a retrospective cohort study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">308-313</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Yıldız Akdaş Reis, Merve Özkan, Seval Yılmaz Ergani, Müjde Can İbanoğlu, Doğukan Özkan, Tuğba Kınay, Salim Erkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 08, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303013</span>
                    </div>
                </li>
               {/* Article 13 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303014">
                           Successful pregnancy in a high-risk catecholaminergic polymorphic ventricular tachycardia patient
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">314-319</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Inmaculada Mejía Jiménez, Olga Villar Ruiz, Ana Sabín-Collado, María Valverde Gómez, Elena Montañés Delmás, Rafael Salguero Bodes
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 08, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303014</span>
                    </div>
                </li> 
                {/* Article 14 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220303006">
                           Jacobsen syndrome: a case report and clinical features of a rare genetic syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">320-325</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Kazım Öztarhan, Talya Kaptaç, Mutlu Karkucak, Ece Öztarhan, Ali Gedikbaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 25, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0303006</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
