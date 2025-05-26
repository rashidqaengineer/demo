import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 13, Issue-1, March 2005"
                pageRange="9-63"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131001">
                           Comparison of maternal and perinatal outcomes of HELLP syndrome and severe preeclampsia cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">9-14</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Selahattin Kumru, Mehmet Şimşek, Bilgin Güretaş, Ekrem Sapmaz, Denizmen Aygün, Zeynep Özcan, Mehmet Nalbant
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2005; 13 (1)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131002">
                            The evaluation of cases with HELLP syndrome
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">15-24</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Pınar Kumru, Özgür P. Kartal, Gültekin Köse, Nurettin Aka, Begüm Büyükoğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131003">
                            Prenatal diagnoses with amniocentesis and cordocentesis: evaluation of 181 cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">31-34</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Melih Atakan Güven, Serdar Ceylaner
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
    
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131005">
                            Theeffect of fetal gender on the markers of first trimester Down syndrome screening
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">35-38</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Devrim Ertunç, Ekrem Tok, Gürkan Yazıcı, Mustafa Kaplanoğlu, Meral Aban, Saffet Dilek
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2005; 13 (1)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131006">
                             Comparison of treatment modalities of single dose and seven day courses in the treatment of the pregnant women with uncomplicated urinary tract infection or symptomatic pregnant women with 103-105/ml mid-stream bacteriuria
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">39-43</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Melih Atahan Güven, Pınar Çıragil, Tayfun Şahinkanat, Özgür Özdemir, Bülent Köstü, Önder Ercan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131007">
                           Placenta percreta: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">44-48</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ender Yumru, Murat Bozkurt, Faruk Özdemir, Tahsin Ayanoğlu, Pınar Tuzlalı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
                       
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131008">
                             A case report of prenatally diagnosed duplication cyst located at posterior mediastinum
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">49-54</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Melih Atahan Güven, Mahmut Gülgösteren, Şule Ekiz, Serdar Ceylaner, Gökhan Çıragil
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
                       
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131009">
                             Chorioangioma: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">55-58</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Başak Baksu, Eser Ağar, İnci Davas, Canan Tanık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
                     
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131010">
                             Massive ovarian edema in pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">59-62</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İncim Bezircioğlu, Levent Hiçyılmaz, Ergun Öziz, Demet Etit, Ali Baloğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
                        
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20050131011">
                            Letter to the Editor: "Bilateral ovarian mass at gestation: case report"
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">63-63</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Hakan Kaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (1)</span>
                        
                    </div>
                </li>
               
            </ul>
        </div>
    );
}
