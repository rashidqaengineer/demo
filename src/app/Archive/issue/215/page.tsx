import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 14, Issue-4, December 2006"
                pageRange="159-211"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144001">
                            Measurment of the cervical length in the prediction of successful induction of labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">159-164</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Gökhan Yıldırım, Halil Aslan, Altan Cebeci, Yavuz Ceylan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (4)</span>
                        
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144002">
                             Fetal BPD and FL nomograms in 11-14 weeks
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">165-169</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Cem Dane, Derya Sivri Aydın, Banu Dane, Ahmet Çetin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (4)</span>
                    
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144003">
                            Amniocentesis results in 7 years period in our clinic
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">170-175</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Kamil Turgay Şener, Beyhan Durak, H. Mete Tanır, Emre Tepeli, Mehmet Kaya, Sevilhan Artan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (4)</span>
    
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144004">
                            Is vaginal birth after cesarean delivery performed in our clinic ?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">176-182</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Fikret Gökhan Göynümer, Müge Temel, Sadık Şahin, Murat Naki, Kumral Kepkep
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (4)</span>
                    
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144005">
                             Prenatal evaluation of the scrotum and testes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">183-187</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Murat Yayla, Gökhan Göynümer, Kaan Meriç, Aslan Bilici
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  Perinatal Journal 2006; 14 (4)</span>
                        
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144006">
                             The factors influencing newborn birth weight
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">188-194</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Bülent Demir, Faruk Demir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (4)</span>
                        
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144007">
                            Ablatio placentae in hypertensive and normotensive pregnants: perinatal and neonatal outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">195-198</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Halil Aslan, Gökhan Yıldırım, İsa Aykut Özdemir, Altan Cebeci, Yavuz Ceylan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (4)</span>
                       
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144008">
                             Antenatal diagnosis of umbilical artery fusion: a case report and review of the literature
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">199-201</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Ercan Yılmaz, Tuncay Nas, Pınar Özcan Keskin, Aydan Biri, Aylar Poyraz, Rıfat Fürsoy
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2005; 13 (3)</span>
                       
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144009">
                              Prenatal diagnosis of Roberts-SC phocomelia syndrome: case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">202-204</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Belgin Eroğlu Kesim, Ahmet Varolan, İnci Davas, Ali Yazgan, Eser Ağar, Seher Başaran
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (4)</span>
                     
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144010">
                              Fetal megacystis and triploidy: a case diagnosed at 14th week of gestation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">205-207</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Ugur Keskin, Saadettin Güngör, Ümit Göktolga, Temel Ceyhan, Ali Ergün
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (4)</span>
                        
                    </div>
                </li>

        
         {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20060144011">
                              Bilateral lower extremity sgenesis: case report and the importance of transvaginal sonography in early antenatal diagnosis of fetal anomalies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">208-210</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Tuncay Nas, Pınar Özcan Keskin, Ercan Yılmaz, Aydan Biri, Fırat Mutlu, Rıfat Gürsoy
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> Perinatal Journal 2006; 14 (4)</span>
                        
                    </div>
                </li>
            </ul>
        </div>
    );
}
