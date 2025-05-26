import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 19, Issue-3, December 2011"
                pageRange="103-148"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193001">
                             The impact of delivery mode on the Apgar scores in term and preterm breech delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">103-107</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Muhammet Erdal Sak, Mehmet Sıddık Evsen, Hatice Ender Soydinç, Sibel Sak, Ahmet Yalınkaya, Mehmet Zeki Taner, Sezin Vural, Yılmaz Palancı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193002">
                            The importance and evaluation of mean platelet volume on the severity of preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">108-113</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Hatice Yılmaz Doğru, Neşe Yücel, Fatma Çetin Pelit, Güher Bolat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193003">
                              The role of cerclage in the management of cervical incompetence
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">114-117</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mehmet Sıddık Evsen, Hatice Ender Soydinç, Muhammet Erdal Sak, Selami Erdem, Ahmet Yalınkaya, Mehmet Zeki Taner, Uğur Değer, Fatmanur Caca
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193004">
                            Obstetric cases in intensive care unit
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">118-122</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Semra Akköz Çevik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193005">
                             How important is gestational diabetes for breastfeeding results?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">123-129</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Güler Üstün, Merlinda Aluş Tokat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193006">
                             Retrospective analysis of 268 cases of amniocentesis and chorion villus sampling
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">130-136</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Halil Korkut Dağlar, Barış Kaya, Hacı Öztürk Şahin, Mehmet Fethi Pınar, Aybala Akıl
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193007">
                             Management of term pregnancy diagnosed with Glanzmann thrombasthenia: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">137-139</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ercan Yılmaz, Uğur Turhan, Yavuz Şimşek, Önder Çelik, Abdullah Karaer, Yağmur Mİnareci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193008">
                             Prenatal diagnosis of omphalocele and Beckwith-Wiedemann syndrome: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">140-144</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sema Tanrıverdi, Rengin Ayçiçek, Onur Bağcı, Bertan Karaboğa, Aydın Şencan, Faik Mümtaz Koyuncu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20110193009">
                            The conservative management of placenta previa percreta: presentation of two cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">145-148</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Zehra Kurdoğlu, Ertan Adalı, Gülçin Ay
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
