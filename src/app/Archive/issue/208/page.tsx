import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 13, Issue-2, June 2005"
                pageRange="71-125"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132002">
                            Retrospective analysis of the 126 cases terminated in pregnancy by the ethical committee decision
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">80-85</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Nurten Akdeniz, Ahmet Kale, Mahmut Erdemoğlu, Ahmet Yalınkaya, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2005; 13 (2)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132003">
                             Distribution and Incidence of congenital malformations in a university hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">86-90</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Aydan Biri, Anıl Onan, Ümit Kocrucuoğlu, Bülent Tıraş, Özdemir Himmetoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (2)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132004">
                            The physical and psychological problems of hospitalized high-risk pregnant women in partial bed rest
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">91-100</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nilufer Korkmaz, Arslan Hediye
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (2)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131005">
                            The retrospective analysis of major fetal abnormality at deliveries
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">31-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fikret Gökhan Göynümer, Kumral Kepkep, Gamze Yetim, Yıldız Tuncay, Ercan Tutal, Arzu Koç
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
                    
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132006">
                            Does previous cesarean delivery increase the risk of ectopic pregnancy?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">105-109</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Levent Tütüncü, Ercüment Müngen, Murat Muhcu, Murat Sancaktar, Yusuf Ziya Yergök
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2005; 13 (2)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132007">
                             Spontaneus abortion and thyroid functions
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">110-113</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Melahat Dönmez , Tolga Şişli, Alev Atış, Yavuz Aydın
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (2)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132007">
                            Spontaneus abortion and thyroid functions
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">110-113</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Melahat Dönmez , Tolga Şişli, Alev Atış, Yavuz Aydın
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (2)</span>
                       
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132008">
                              Urinary tract infection in pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">114-121</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Levent Tütüncü, Nurittin Ardıç, Ercüment Müngen, Ali Rüştü Ergur, Y. Ziya Yergok
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (2)</span>
                       
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132009">
                              A case of tricuspid atresia: prenatal diagnosis and postnatal evaluation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">122-124</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       melih Güven, Serdar Ceylaner, Bülent Celasun, Hakan Beyazıt, Numan Aydemir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (2)</span>
                     
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132010">
                              An ovarian pregnancy with delivery of a live infant
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">125-127</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cem Dane, Banu Dane, Murat Yayla, Ahmet Çetin, Salih Dural, Ahmet Tarlacı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (2)</span>
                        
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050132001">
                            Nutrition, weight gain and exercise during pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">71-79</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Oluş Api, Orhan Ünal, Cihat Şen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Review</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (2)</span>
                        
                    </div>
                </li>
        
            </ul>
        </div>
    );
}
