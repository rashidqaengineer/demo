import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 21, Issue-1, April 2013"
                pageRange="1-45"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211013">
                            Maternal first and second trimester lipid levels in patients with different glucose tolerance
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-6</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ayşe Parlakgümüş, Tayfun Çok, Pınar Çağlar Aytaç, Cantekin İskender, Erhan Şimşek, Ebru Tarım
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.13.0211013</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211014">
                            Cervical incompetence: comparison the prophylactic and therapeutic procedures
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">7-11</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        İbrahim Karaca, Ömer Erkan Yapça, İlhan Bahri Delibaş, Metin İngeç
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211014</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211011">
                            Pregnancy and epilepsy: a retrospective analysis of 46 patients, and comparison of their perinatal outcomes with healthy pregnant women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">12-16</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hatice Ender Soydinç, Abdulkadir Turgut, Muhammet Erdal Sak, Ali Özler, Mehmet Sıddık Evsen, Serdar Başaranoğlu, Ahmet Yalınkaya, Yılmaz Palancı, Eşref Akıl
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211011</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211012">
                             The effect of grand multiparity on maternal, obstetric, fetal and neonatal outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">17-22</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İncim Bezircioğlu, Nilgün Yapan Göral, Ali Baloğlu, Yurdaer Baydar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211012</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211020">
                             The efficacy, safety and cost analysis of misoprostol in the termination of second trimester pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">23-28</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Orkun Çetin, Sibel Barut, Ali Galip Zebitay, Oğuz Yücel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211020</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211016">
                             Cervical lymphangioma: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">29-31</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Resul Arısoy, Emre Erdoğdu, Oya Pekin, Elif Demirci, Erbil Çakar, Semih Tuğrul
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211016</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211010">
                           Cantrell’s syndrome revisited: a case with increased nuchal fold diagnosed in the first trimester
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">32-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ahmet Uysal, Fatma Uysal, Meryem Gencer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211010</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211015">
                             Fetal intrabdominal umbilical vein aneurysm
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">35-37</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ülkü Mete Ural, Yeşim Bayoğlu Tekin, Gülşah Balık, Işık Üstüner, Seda Güvendağ Güven
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211015</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211017">
                             First trimester diagnosis of pentalogy of Cantrell: a rare case associated with neural tube defect
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">38-41</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       TBülent Çakmak, Zeki Zeki, Mehmet Can Nacar, Fazlı Demirtürk
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211017</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20130211019">
                            Congenital rickets due to maternal vitamin D deficiency: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">42-45</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Serkan Bilge Koca, Dilek Dilli, Serdar Beken, Ayşegül Zenciroğlu, Nurullah Okumuş
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.13.0211019</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
