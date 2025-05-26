import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 19, Issue-2, August 2011"
                pageRange="51-102"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192001">
                             Fetal intracardiac echogenic focus in pregnants underwent amniocentesis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">51-54</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cüneyt Eftal Taner, Orhan Altınboğa, İlkan Kayar, Aycan Kopuz, Elif Üstünay Telciler
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192002">
                             Lamellar body count in diabetic pregnancies with good glycemic control
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">55-59</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ayşe Kafkaslı, Ilgın Türkçüoğlu, Emrullah Tanrıkut, Ayşe Çıkım Sertkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192003">
                              Retinal findings in cases of preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">60-63</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Zehra Kurdoğlu, Mertihan Kurdoğlu, E. Gülçin Ay, Tekin Yaşar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192004">
                            The relationship between elevated maternal uric acid level and bilateral early diastolic notching at uterine arteries at second trimester and pregnancy complications
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">64-70</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Banu Dane, Zeynep Kayaoğlu, Cem Dane, Gonca Batmaz, Murat Kıray, Yasemin Döventaş
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192005">
                             The incidence of HBSAg, anti-HBS and anti-HCV in pregnant women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">71-75</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ebru İnci Coşkun, Burcu Dinçgez, Refika Genç Koyucu, Yavuz Tahsin Ayanoğlu, Ayşe Ender Yumru
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192006">
                            Evaluation of the emergency peripartum hysterectomy cases: experience of 5 years
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">76-80</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, Cihat Şen, İpek Dokurel Çetin, Seyfettin Uludağ, Begüm Aydoğan, Hakan Erenel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192007">
                            First trimester diagnosis of pentalogy of Cantrell: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">81-84</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ömer Yavuz Şimşek, Abdullah Karaer, Uğur Turhan, Onder Celik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192008">
                             Fetal cardiac rhabdomyoma which tuberous sclerosis did not attend: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">85-88</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sema Tanrıverdi, Nermin Tansuğ, Şenol Çoşkun, Mecnun Çetin, Yeşim Baytur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192009">
                            Five times of cord around neck in cesarean section: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">89-93</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, İpek Dokurel Çetin, Cihat Şen, Seyfettin Uludağ, Begüm Aydoğan, Aslıhan Ürer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 10*/}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192010">
                            Non-Hodgkin lymphoma diagnosed during pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">94-98</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, Begüm Aydoğan, Seyfettin Uludağ, Cihat Şen, İpek Dokurel Çetin, Hakan Erenel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                </div>
                </li>
                {/* Article 11 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110192011">
                             Fetal hyperechogenic bowel and early necrotizing enterocolitis in three intrauterine growth restricted, extremely low birth weight infants
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">99-102</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ayşe Ecevit, Deniz Anuk İnce, Abdullah Kurt, Aylin Tarcan, Filiz Yanık
                   </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
