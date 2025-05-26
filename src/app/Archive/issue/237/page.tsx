import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 21, Issue-3, December 2013"
                pageRange="101-154"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213001">
                            The analysis of amniocentesis results of pregnants who are at 16-22 weeks of gestation and undergone genetic amniocentesis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">101-106</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Alev Timur, İbrahim Uyar, İbrahim Gülhan, Nagehan Tan Saz, Alper İleri, Mehmet Özeren
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 11, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0213001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213002">
                           Comparison of the use of dinoprostone and oxytocin for induction in cases with Bishop score of ≤4
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">107-112</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Özlem Yörük, Ayşegül Öksüzoğlu, Yaprak Engin Üstün, Ayla Aktulay, Elif Gül Yapar Eyi, Salim Erkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0213002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213003">
                            Emergency peripartum hysterectomy: our experiences with 189 cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">113-118</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Abdulkadir Turgut, Muhammed Erdal Sak, Ali Özler, Hatice Ender Soydinç, Neval Yaman Görük, Talip Karaçor, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0213003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213004">
                            The effect of maternal smoking during pregnancy on Doppler parameters
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">119-123</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Turab Janbakhisov, Özlen Emekçi, Erkan Çağlıyan, Ali Cenk Özay, Ferruh Acet, Sabahattin Altunyurt
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> August 17, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0213004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213005">
                             Evaluation of prenatal ultrasonographic markers in aneuploidy cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">124-128</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, Fatma Ferda Verit Atmaca, Ayşegül Deregözü, Ali Galip Zebitay, Oğuz Yücel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.13.0213005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213006">
                             Obesity at conceivement interferes with placental weight but not birth weight
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">129-132</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Gülengül Köken, Seda Köse, Dağıstan Arıöz, Mehmet Yılmazer, Ayşenur Çakır Güngör
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> :10.2399/prn.13.0213006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213007">
                            The effects of gestational diabetes mellitus screening and diagnostic tests on fetal macrosomia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">133-137</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Uğur Keskin, Cihangir Mutlu Ercan, Saadettin Güngör, Kazım Emre Karaşahin, Ali Ergün, Mustafa Öztürk, Özlem Öztürk
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0213007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213008">
                            The factors affecting the procedure duration during second trimester genetic amniocentesis: retrospective analysis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">138-143</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Servet Hacıvelioğlu, Ahmet Uysal, Ayşenur Çakır Güngör, Meryem Gencer, Emine Coşar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.13.0213008</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213009">
                             Placental and newborn birth weight in term pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">144-150</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Cem Ardıç, Resul Arısoy, Emin Erhan Dönmez, Sevcan Arzu Arıkan, Emre Erdoğdu, Tuğrul Semih
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0213009</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/201302130Ed1">
                            These posters were not presented in the 14th National Perinatology Congress held in Sarıgerme Hilton Hotel in Muğla between 19th and 22nd September, 2013
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       XIV. Ulusal Perinatoloji Kongresi Organizasyon Komitesi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130213010">
                             Newborn autopsies: Experience of referral level III neonatal intensive care unit in Turkey (ERRATUM)
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">151</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hatice Tatar Aksoy, S.Suna Oğuz, Nurdan Uraş, Ömer Erdeve, Hatice Bayramoğlu, Sema Zergeroğlu, Uğur Dilmen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Erratum</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0213010</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
