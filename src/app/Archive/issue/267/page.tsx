import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 30, Issue-1, April 2022"
                pageRange="1-86"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301004">
                           The use of antenatal corticosteroids for fetal maturation: clinical practice guideline by the WAPM-World Association of Perinatal Medicine and the PMF-Perinatal Medicine Foundation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-11</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Themistoklis Dagklis, Cihat Şen, Ioannis Tsakiridis, Cecilia Villalaín, Karel Allegaert, Sven Wellmann, Satoshi Kusuda, Bernat Serra, Manuel Sanchez Luna, Erasmo Huertas, Nicola Volpe, Rodrigo Ayala, Nelly Jekova, Amos Grunebaum, Milan Stanojevic
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 06, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301004</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301005">
                           The use of antenatal corticosteroids for fetal maturation in COVID-19: clinical practice statement by WAPM-World Association of Perinatal Medicine and the PMF-Perinatal Medicine Foundation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12-13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Themistoklis Dagklis, Cihat Şen, Ioannis Tsakiridis, Cecilia Villalaín, Karel Allegaert, Sven Wellmann, Satoshi Kusuda, Bernat Serra, Manuel Sanchez Luna, Erasmo Huertas, Nicola Volpe, Rodrigo Ayala, Nelly Jekova, Amos Grunebaum, Milan Stanojevic
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Opinion</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 06, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301005</span>
                    </div>
                </li>
                {/* Article 3 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301001">
                           Evaluation of early pregnancy risk factors for venous thromboembolism in Turkish pregnant women: a prospective study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">14-20</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mehmet Mete Kırlangıç, Mefkure Eraslan Şahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 16, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301001</span>
                    </div>
                </li>

                {/* Article 4 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301002">
                           Multifetal pregnancy reduction outcomes from triplets to singletons and twins
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">21-27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Zeynep Gedik Özköse, Süleyman Cemil Oğlak, Züat Acar, Şeyhmus Tunç, Salim Sezer, Osman Samet Günkaya, İsmail Özdemir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 20, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301002</span>
                    </div>
                </li>
                {/* Article 5 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301006">
                           Clinical characteristics and perinatal outcomes of pregnant women with Coronavirus-19 disease
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">28-37</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        İbrahim Ömeroğlu, Hakan Gölbaşı, Suzan Şahin, Şeyda Kayhan Ömeroğlu, Ceren Gölbaşı, Atalay Ekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 06, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301006</span>
                    </div>
                </li>
                {/* Article 6 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301007">
                           Assessment of the roles of ABO blood types and Rh factors in gestational diabetes mellitus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">38-42</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Mehmet Mete Kırlangıç, Mefkure Eraslan Şahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 06, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301007</span>
                    </div>
                </li>
                {/* Article 7 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301010">
                           Prenatal attachment in the pregnancy: its relationship with fear of childbirth
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">43-50</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Meltem Uğurlu, Zehranur Çoban
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 23, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301010</span>
                    </div>
                </li>
                {/* Article 8 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301011">
                           The relationship between first trimester screening test and abruptio placentae
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">51-56</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Begüm Kurt, İrem Alyazıcı Küçükyıldız
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 24, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301011</span>
                    </div>
                </li>
                {/* Article 9 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301012">
                           Carrier frequency of spinal muscular atrophy in Turkish population
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">57-60</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Yeşim Özdemir, Resul Arısoy, Altuğ Semiz, Fatih Şanlıkan, Günkut Akar, Murat Çağ
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 25, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301012</span>
                    </div>
                </li>
                {/* Article 10 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301013">
                           Impact of COVID-19 on termination of pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">61-65</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cinzia Ferrara, Gabriella Sglavo, Ilaria Morra, Gabriele Saccone, Costantino Di Carlo, Giuseppe Bifulco
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 28, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301013</span>
                    </div>
                </li>
                {/* Article 11 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301014">
                           Fetal thymus reference range in healthy singleton pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">66-74</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şafak Yılmaz Baran, Gülşen Doğan Durdağ, Şirin Aydın, Didem Alkaş Yağınç, Songül Alemdaroğlu, Tayfun Çok, Hakan Kalaycı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 13, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301014</span>
                    </div>
                </li>
                {/* Article 12 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301003">
                           First trimester diagnosis of an unusual case of double aneuploidy with karyotype 48,XXY,+18 (Klinefelter-Edwards syndromes)
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">75-80</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Hakan Gölbaşı, Merve Saka Güvenç, Ceren Gölbaşı, İbrahim Ömeroğlu, Atalay Ekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 27, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301003</span>
                    </div>
                </li>
               {/* Article 13 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301008">
                           Prenatal diagnosis of Galen vein aneurysm: when to deliver?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">81-83</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Assaad Kesrouani, Linda Daou, Dina Roumieh
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 06, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301008</span>
                    </div>
                </li> 
                {/* Article 14 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220301009">
                           Bladder dissection for cesarean hysterectomy in case of severe placenta percreta: tips and tricks
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">84-86</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Raffaele Riccardi, Elisabetta Gragnano, Gabriele Saccone, Cinzia Ferrara, Giuseppe Bifulco
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 20, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0301009</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
