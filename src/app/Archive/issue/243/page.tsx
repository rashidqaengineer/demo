import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 23, Issue-1, April 2015"
                pageRange="1-71"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231001">
                           Ultrasonographic evaluation of ventriculomegaly cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-5</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Hakan Kalaycı, Halis Özdemir, Çağrı Gülümser, Ayşe Parlakgümüş, Tayfun Çok, Ebru Tarım, Filiz Bilgin Yanık
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 11, 2013</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231002">
                          Perinatal outcomes of patients diagnosed borderline gestational diabetes mellitus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">6-12</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gök Özgül, Rauf Melekoğlu, Sevda Yeleç, İpek Eskiyörük, Fatma Tuncay Özgünen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  January 11, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231003">
                            Health practices of pregnant women in Gumushane city center
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">13-19</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Handan Özcan, Nezihe Kızılkaya Beji
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 11, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231005">
                            The evaluation of pregnancies complicated by eclampsia: retrospective analysis of 37 cases in our clinic
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">20-25</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Aytekin Tokmak, Korkut Dağlar, Ali İrfan Güzel, Bergen Laleli, Salim Erkaya, Dilek Uygur
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 01, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231005</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231006">
                            Factors affecting postpartum depression in Diyarbakır
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">26-29</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ali Emre Tahaoğlu, Cihan Toğrul, Mehmet İrfan Külahçıoğlu, Beşire Aydın Öztürk, Deniz Balsak, Hanifi Bademkıran, Erdoğan Gül, Ümit Görkem, Tayfun Güngör
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 05, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231006</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231007">
                            Analysis of maternal serum and urinary lipocalin-2 levels
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">30-33</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yeşim Bayoğlu Tekin, Ülkü Mete Ural, Aynur Kırbaş, Şenol Şentürk, Figen Kır Şahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 12, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231007</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231008">
                           Critical pulmonary stenosis with prenatal diagnosis: a case series and review of literature
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">34-38</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Oya Demirci, Taner Yavuz, Resul Arısoy, Emre Erdoğdu, Pınar Kumru, Oya Pekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> January 24, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231008</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231009">
                            Evaluation of prenatal invasive procedures: analysis of retrospective cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">39-44</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Aybike Tazegül Pekin, Özlem Seçilmiş Kerimoğlu, Setenay Arzu Yılmaz, Nadir Koçak, Feyza Nur İncesu, Ayşe Gül Kebapcılar, Çetin Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 01, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231009</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231010">
                            Investigation of the effects of fetal gender on umbilical artery and middle cerebral artery Doppler findings
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">45-49</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Burcu Artunç Ülkümen, Halil Gürsoy Pala, Yıldız Uyar, Yeşim Baytur, Faik Mümtaz Koyuncu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 06, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231010</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231012">
                            Results of routine first trimester screening tests and following invasive procedures during pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">50-55</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Rahime Nida Ergin, Murat Yayla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 17, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231012</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231011">
                            The association of congenital hand reduction defect and uterine anomaly
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">56-59</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Bülent Kars, Önder Sakin, Yasemin Karageyim Karşıdağ, Cenk Demir, Esra Esim Büyükbayrak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 16, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231011</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231013">
                            Extrauterine intrapartum treatment procedure in the unilateral advanced fetal hydrothorax case
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">60-64</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Sevil Eraslan, Rauf Melekoğlu, Ebru Çelik
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> February 24, 2014</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231013</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231004">
                            Goiter in fetus without maternal thyroid disease: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">65-69</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Önder Sakin, Bülent Kars, Yasemin Karageyim Karşıdağ, Cenk Demir, Esra Esim Büyükbayrak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 20, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231004</span>
                    </div>
                </li>
                {/* Article 14 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150231014">
                            Letter to the Editor regarding “Extrauterine intrapartum treatment procedure in the unilateral advanced fetal hydrothorax case
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">70-71</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                     Başak Kaya, Ali Gedikbaşı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  February 24, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0231014</span>
                    </div>
                  </li>  
            </ul>
        </div>
    );
}
