import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 22, Issue-2, August 2014"
                pageRange="65-121"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222001">
                           Assessment of feto-maternal outcomes in preeclampsia and HELLP cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">65-68</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Burcu Artunç Ülkümen, Halil Gürsoy Pala, Filiz Aktenk, Yeşim Bülbül Baytur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 26, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222002">
                           The impact of maternal lipid levels of non-diabetic pregnant women on fetal weight
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">69-73</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İbrahim Uyar, Alev Timur, İbrahim Gülhan, Cenk Gezer, Ferhat Çetin, Mehmet Özeren
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  January 27, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222003">
                           Accuracy rate of sex determination in the first trimester ultrasonography
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">74-78</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Rahime Nida Ergin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 29, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222004">
                            Cordocentesis outcomes of tertiary care services in Manisa city: a retrospective analysis of four years
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">79-82</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Halil Gürsoy Pala, Burcu Artunç Ülkümen, Fatma Eskicioğlu, Safiye Uluçay, Sırrı Çam, Yeşim Bülbül Baytur, Faik Mümtaz Koyuncu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 01, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222005">
                            The factors effective on the macrosomic deliveries of non-diabetic pregnant women

                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">83-87</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Alpaslan Akyol, Hasan Talay, Ali Gedikbaşı, Cemal Ark, Volkan Ülker, Çağdaş Özdemir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 25, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222008">
                            Analysis of the patients diagnosed as hypoplastic left heart syndrome at prenatal period
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">88-92</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hakan Kalaycı, Halis Özdemir, Çağrı Gülümser, Ayşe Parlakgümüş, Tayfun Çok, Ebru Tarım, Filiz Yanık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222008</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222009">
                           A rare and catastrophic finding of HELLP syndrome: subcapsular hematoma and/or hepatic rupture
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">93-98</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Abdulkadir Turgut, Ali Özler, Serdar Başaranoğlu, Senem Yaman Tunç, Elif Ağaçayak, Mehmet Sait İçen, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 11, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222009</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222010">
                            Cervical cerclage complications: eight years of experience
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">99-104</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ayşe Karahasanoğlu, Işıl Uzun Çilingir, Ayşegül Deregözü, Hale Akin, Zilal Hocagil, Oğuz Yücel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  March 31, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222010</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222006">
                            Abdominal gunshot wound in pregnant woman: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">110-113</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Betül Kocamer, Oruç Numan Gökçe, Ayhan Aksoy, İbrahim Kürşat Deniz
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 04, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222006</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222007">
                           Central nervous system findings associated with co-twin death in twin pregnancy: correlation between ultrasonography and magnetic resonance findings
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">114-117</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Talat Umut Kutlu Dilek, Arzu Doruk, Engin Kara, Saffet Dilek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 15, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222007</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222011">
                            Peripartum cardiomyopathy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">118-121</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cenk Gezer, Atalay Ekin, Mehmet Özeren, Cüneyt Eftal Taner, Nazile Bilgin Doğan, Aşkın Doğan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 31, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20140222012">
                            Gestational diabetes: current status
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">105-109</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mehmet Okan Özkaya, Seyit Ali Köse
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 05, 2014 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.14.0222012</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
