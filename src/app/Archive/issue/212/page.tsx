import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 14, Issue-1, March 2006"
                pageRange="1-55"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141001">
                              Perinatal outcome of pregnancy on over age 40
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-6</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ali Gedikbaşı, Alpaslan Akyol, Varujan Mağar, Cemal Ark, Yavuz Ceylan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>   Perinatal Journal 2006; 14 (1)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141002">
                              Evaluation of the prenatal care usage of mothers giving birth at the ministry of health, Ankara Etlik Training and Research Hospital of Obstetrics and Gynecology
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">7-13</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Emine Dibek Mısırlıoğlu, Didem Aliefendioğlu, Kibriya Fidan, Fatma Nur Çakmak, Ali Haberal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141003">
                              The correlation of thyroid hormone levels and gestational weeks in amniotic fluid at second trimester
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">14-18</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Ahmet Kale, Nurten Akdeniz, Ebru Kale, Ahmet Yalınkaya, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141004">
                             Second trimester termination of pregnancy: comparing intracervical prostaglandin E2 (dinoprostone) to intravaginal misoprostol
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">19-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Özgür Dundar, Ercüment Müngen, Levent Tütüncü, Murat Muhcu, Serkan Bodur, Yusuf Z. Yergök
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
                    
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141005">
                            The effect of sex on fetal ultrasound measurements: is it necessary sex-spesific nomograms?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-30</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yeşim Bülbül Baytur, Hasan Yıldız, Ali Özler, Ümit Sungurtekin İnceboz, Hüsnü Çağlar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>   Perinatal Journal 2006; 14 (1)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141006">
                              Investigation of folic acid, vitamin B12, vitamin B6 and homocysteine levels in preeclamptic pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">31-36</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ahmet Kale, Ebru Kale, Nurten Akdeniz, Mahmut Erdemoğlu, Ahmet Yalınkaya, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141007">
                            A case of non-imun hydrops fetalis due to placental chorioangioma
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">37-39</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Ener Çağrı Dinleyici, Neslihan Tekin, Mehmet Arif Akşit, Emine Dünda
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
                       
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141008">
                             Congenital large oropharyngeal immature teratoma
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">40-44</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Figen Kır Şahin, Gülengül Nadir Koken, Serhan Çevrioğlu, Önder Şahin, Arif Saylan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
                       
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141009">
                               Abruption placenta in adult Still’s disease with onset during pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">45-48</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Cem Dane, Murat Yayla, Banu Dane, Ahmet Çetin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
                     
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141010">
                               Prenatal diagnosis of osteogenesis imperfecta: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">49-54</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      İncim Bezircioğlu, Merve Biçer, Dilek Uysal, Seyran Yiğit, Ali Baloğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
                        
                    </div>
                </li>
{/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060141011">
                              Cervical pregnancy: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">55-58</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Semih Mun, Cüneyt Eftal Taner, Tolga Mızrak, İrem Şenyuva, Yiğit Özgenç, Fatma Altıntaşoğlu Çelimli
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (1)</span>
                        
                    </div>
                </li>
        
        
            </ul>
        </div>
    );
}
