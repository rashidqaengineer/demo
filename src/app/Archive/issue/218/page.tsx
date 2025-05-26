import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 15, Issue-3, December 2007"
                pageRange="93-145"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070153001">
                             Evaluation of hemoglobin and platelet levels in mild, moderate and severe preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">93-98</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yaprak Engin Üstün, Kezban Doğan, Ilgın Türkçüoğlu, Yusuf Üstün, Mehmet Mutlu Meydanlı, Ayşe Kafkaslı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (3)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070153002">
                             The role of uterine artery Doppler and maternal serum D-dimer levels in prediction of preterm labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">99-107</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fehmi Yazıcıoğlu, Ruşen Oran, Bestami Özsoy, Mehmet Aygün, Osman Nuri Özyurt, Rehhan Demirbaş, Ziya Çebi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (3)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070153003">
                            Effect of tocolysis on Doppler measurements of umbilical, uterine and spiral arteries
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">108-115</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Nalan Kulak, Ilgın Türkçüoğlu, Ayşe Kafkaslı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (3)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070153004">
                           Frequency of the HPA-1a antigen in pregnant women
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">116-119</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Feride Özel, Mehmet Şimşek, Aynur Uğur Bilgin, Aytuğ Kızılörs, İhsan Karadoğan, Levent Dündar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (3)</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070153005">
                             Retrospective analysis of 2295 cases with invasive prenatal diagnosis
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">120-126</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Çetin Saatçi, Yusuf Özkul, Şener Taşdemir, Aslıhan Kiraz, İpek Müderris, Nazife Taşçıoğlu, Okay Çağlayan, Münis Dündar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2007; 15 (3)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070153006">
                             Maternal anemia and perinatal outcome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">127-130</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Emre Karaşahin, Seyit Temel Ceyhan, Ümit Göktolga, Uğur Keskin, İskender Başer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (3)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070153007">
                           Evaluation of the effects of self care agency on health promoting lifestyle profile in pregnants at high risk
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">131-139</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                   Birsen Karaca Saydam, Özlem Demirel Bozkurt, Aytül Pelik Hadımlı, Hafize Öztürk Can, Neriman Soğukpınar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (3)</span>
                       
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20070153008">
                             Leptin values in maternal and umbilical cord blood in pregnant women with preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">140-144</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Neşe Yücel, Fikret Gökhan Göynümer, Ergün Bilgiç, Cengiz Omurcan, Tonguç Arslan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2007; 15 (3)</span>
                       
                    </div>
                </li>
               

        
        
            </ul>
        </div>
    );
}
