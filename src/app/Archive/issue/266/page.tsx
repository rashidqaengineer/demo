import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 29, Issue-3, December 2021"
                pageRange="179-279"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293002">
                           Study to evaluate the role of TNFα, IL1β, IL6 in diagnosis and severity assessment of neonatal sepsis among term, appropriate for gestational age newborns
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">179-185</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Arijit Bhowmik, Moumita Samanta, Avijit Hazra, Avranil Goswami, Somosri Ray, Tapas Kumar Sabui
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 17, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293002</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293003">
                           Knowledge, attitude, and behaviors of pregnant women about COVID-19: a single-center cross-sectional study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">186-193</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökçe Turan, Gülnur Kul, Ezgi Turgut
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 23, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293003</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293004">
                           Oral iron versus intravenous ferric carboxymaltose in the treatment of iron deficiency anemia in pregnancy: a retrospective study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">194-199</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şule Yıldız, Engin Türkgeldi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 31, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293004</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293005">
                            The implications for advanced maternal age on pregnancy complications and adverse neonatal outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">200-209</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Zeynep Gedik Özköse, Süleyman Cemil Oğlak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 06, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293005</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293006">
                            Conditions that increase the risk of cesarean-related blood transfusions: a single-center cohort study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">210-216</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mehmet Murat Işıkalan, Eren Berkay Özkaya, Buşra Özkaya, Nurullah Şengül, Enes Ferlibaş, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 06, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293006</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293007">
                            Prenatal and neonatal outcomes of pregnancies diagnosed with fetal single umbilical artery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">217-224</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Mehmet Obut, Asya Kalaycı Öncü, Özge Yücel Çelik, Arife Akay, Güliz Özcan, Gülşah Aynaoğlu Yıldız, Can Tekin İskender, Ali Turhan Çağlar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 07, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293007</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293008">
                           The relationship between umbilical cord measurements and newborn outcomes
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">225-230</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Cenk Soysal, Halil İbrahim Şişman, İsmail Bıyık, Özlem Erten, Burak Deliloğlu, Damla Geçkalan Soysal, Nadi Keskin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  November 25, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293008</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293009">
                            Discordant umbilical arteries in the umbilical cord entanglement: a light microscope study
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">231-237</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İrem Şenyuva, Şirin Küçük
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 02, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293009</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293010">
                            Urinary uric acid to creatinine ratio as a marker of perinatal asphyxia and its correlation with arterial blood gas values
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">238-244</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Priya Sharma, Krishnaswami Devimeenakshi
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 02, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293010</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293011">
                            Morphometric analysis of duodenum in human fetus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">245-249</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Sevil Karabağ, Kıvılcım Eren Erdoğan, Perihan Alsancak, Nazlı Soygun, Figen Doran
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 03, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293011</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293014">
                            Systemic immune-inflammation index in twin pregnancies compared to singleton pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">250-254</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Ezgi Turgut, Bedri Sakcak, Deniz Oluklu, Şule Göncü Ayhan, Dilek Şahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 03, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293014</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293015">
                            Diagnostic utility of protein excretion in 24-hour urine and the protein to creatinine ratio for adverse perinatal outcomes and time of delivery
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">255-265</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       İbrahim Ömeroğlu, Didem Dereli Akdeniz, Hakan Gölbaşı, Ceren Gölbaşı, Atalay Ekin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 03, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293015</span>
                    </div>
                </li>
               {/* Article 13 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293012">
                            Harlequin fetus in a twin sibling: a rare case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">266-269</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Rabia Merve Palalıoğlu, Halil Ibrahim Erbıyık, Aytakin Mahammadaliyeva, Batuhan Palalıoğlu, Rojda Bayar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> September 06, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293012</span>
                    </div>
                </li>
                {/* Article 14 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293013">
                            Pregnancy onset congenital thrombotic thrombocytopenic purpura (Upshaw-Schulman syndrome) mimicking HELLP syndrome: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">270-273</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Başak Ergin, Berna Buse Kobal, Zeynep Yazıcı, Ali Hakan Kaya, Sezin Canbek, Murat Muhcu, Ayşegül Özel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report </span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 17, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293013</span>
                    </div>
                </li>
                {/* Article 15 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20210293001">
                            Letter to the Editor: COVID-19 vaccine during pregnancy: it is time to have a fair inclusion of pregnant women in clinical trials
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">274-275</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Elisabetta Gragnano, Gennaro Esposito, Bernadette Ilardi, Maddalena Turco, Paolo Verrazzo, Gabriele Saccone
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Letter to Editor</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  November 05, 2021</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.21.0293001</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
