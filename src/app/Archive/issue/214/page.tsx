import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 14, Issue-3, September 2006"
                pageRange="117-154"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060143001">
                             Evaluation of cases with single umbilical artery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">117-121</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Murat Muhcu, Ercüment Müngen, Özgür Dündar, Serkan Bodur, Vedat Atay, Yusuf Ziya Yergök
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  PPerinatal Journal 2006; 14 (3)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060143002">
                             Nomogram of fetal nasal bone lenght at 11-13+6 gestational weeks in fetuses
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">122-128</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Derya Sivri, Cem Dane, Banu Dane, Ahmet Çetin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (3)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060143003">
                            Pregnancy outcomes after second trimester genetic amniocentesis: evaluation of 1070 cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">129-135</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Gökhan Yıldırım, Fatma Nurgül Aktaş, Halil Aslan, Ahmet Gül, Kemal Güngördük, Demet Çakmak, Yavuz Ceylan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (3)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060143004">
                            Comparison of serum insulin, insulin-like growth-factor-1 concentrations and insulin resistance indices in severe preeclamptic and healthy pregnant patients
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">135-140</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Oluş Api, Ali Osman Koyuncuoğlu, Bülent Kars, Yasemin Karageyim Karşıdağ, Birol Cengizoğlu, Cem Turan, Orhan Ünal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (3)</span>
                    
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060143005">
                             The effect of general and spinal anaesthesia on maternal and newborn cortisol levels in elective cesarean deliveries
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">141-146</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Ahmet Kale, Ebru Kale, Mahmut Erdemoğlu, Nurten Akdeniz, Naime Canoruç, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (3)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060143006">
                             Partially ruptured rudimentary horn pregnancy at 24 weeks; diagnosis by ultrasonography: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">147-149</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mehmet Karaca, Ahmet Göçmen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (3)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060143007">
                           Pregnancy and metastatic gastric cancer: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">150-153</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                    Murat Özdil, Kemal Özerkan, Şehsuvar Gökgöz, Sibel Aker, Gerçek Aydın
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (3)</span>
                       
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060143008">
                             Fetal intrahepatik calcification: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">154-158</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Özgür Dündar, Ercüment Müngen, Levent Tütüncü, Murat Muhcu, Yusuf Ziya Yergök
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (3)</span>
                       
                    </div>
                </li>
               

        
        
            </ul>
        </div>
    );
}
