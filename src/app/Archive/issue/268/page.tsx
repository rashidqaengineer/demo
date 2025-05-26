import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 30, Issue-2, August 2022"
                pageRange="87-230"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302001">
                           First trimester examination of fetal anatomy: clinical practice guideline by the World Association of Perinatal Medicine (WAPM) and the Perinatal Medicine Foundation (PMF)
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">87-102</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Nicola Volpe, Cihat Şen, Şifa Turan, Waldo Sepulveda, Asma Khalil, Daniel Rolnik, Valentina De Robertis, Paolo Volpe, Mar M. Gil, Petya Chaveeva, Themistoklis Dagklis, Ritsuko K. Pooh, Przemyslaw Kosinski, Jader Cruz, Erasmo Huertas, Francesco D'Antonio, Jesus Rodriquez Calvo, Ana Daneva Markova
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 23, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302002">
                           Ultrasound in labor: clinical practice guideline recommendation by the World Association of Perinatal Medicine (WAPM) and the Perinatal Medicine Foundation (PMF)
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">103-127</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Giuseppe Rizzo, Tullio Ghi, Wolfgang Henrich, Boris Tutschek, Rasha Kamel, Christoph Lees, Ilenia Mappa, Mariya Kovalenko, Wai-Lam Lau, Torbjorn Moe Eggebo, Reuven Achiron, Cihat Şen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Guideline</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 25, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302002</span>
                    </div>
                </li>
                {/* Article 3 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302003">
                          Has the COVID-19 delayed the diagnosis of fetal anomalies and reduced in the follow-up of high-risk pregnancies?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">128-135</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Eda Özden Tokalıoğlu, Şule Göncü Ayhan, Fatma Didem Yücel Yetişkin, Deniz Oluklu, Berchan Besimoğlu, Esin Merve Erol Koç, Betül Yakıştıran, Atakan Tanaçan, Elif Gül Eyi, Özlem Moraloğlu Tekin, Dilek Şahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 08, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302003</span>
                    </div>
                </li>

                {/* Article 4 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302004">
                           Prediction of gestational diabetes mellitus in the first trimester: is it possible?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">136-143</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        İnci Hansu, Kemal Hansu, Zekeriya Balık, Halis Özdemir, Neşe Yücel
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> March 19, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302004</span>
                    </div>
                </li>
                {/* Article 5 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302005">
                           Comparison of maternal and neonatal outcomes in twin pregnancies according to delivery types: vaginal delivery or Cesarean delivery?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">144-151</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökçe Turan, Berna Aslan Çetin, Ezgi Turgut, Zelal Aydın , Erhan Demirdağ, Tamella Taghiyeva
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 10, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302005</span>
                    </div>
                </li>
                {/* Article 6 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302008">
                          Role of first trimester screening test in predicting the perinatal outcomes in low risk term pregnancies
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">152-157</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gökçe Turan, Ezgi Turgut, Halis Özdemir, Roujin Akbarihamed, Sibel Konca, Deniz Karcaaltıncaba, Merih Bayram
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 06, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302008</span>
                    </div>
                </li>
                {/* Article 7 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302009">
                           Use of ureteral catheter in uterine-sparing surgery for placenta accreta
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">158-164</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şükran Doğru, Aslı Altınordu Atcı, Fatih Akkuş, Gülnur Eren, Ali Acar
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 12, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302009</span>
                    </div>
                </li>
                {/* Article 8 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302010">
                           The effect of insulin, leptin, adiponectin, ghrelin levels in cord blood on growth in the first two years
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">165-171</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sema Tanrıverdi, Betül Ersoy, Fatma Taneli
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 13, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302010</span>
                    </div>
                </li>
                {/* Article 9 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302011">
                           The effect of COVID-19 infection on hematological parameters and early pregnancy loss
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">172-178</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Zeliha Atak, Sakine Rahimli Ocakoğlu, Özlem Uyanıklar, Emin Üstünyurt
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 19, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302011</span>
                    </div>
                </li>
                {/* Article 10 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302012">
                           Comparison of fetal cardiac structure in hypothyroid pregnant women receiving thyroid hormone replacement therapy and healthy controls
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">179-184</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Hicran Acar Şirinoğlu, Gülsüm Uysal, Kadir Atakır, Simten Genç, Veli Mihmanlı
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> May 29, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302012</span>
                    </div>
                </li>
                {/* Article 11 */}
                 <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302013">
                           Maternal mortality cases due to COVID-19 pandemic in a tertiary referral hospital
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">185-194</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Şeyhmus Tunç, Süleyman Cemil Oğlak, Mehmet Rıfat Göklü, Zeynep Gedik Özköse
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> June 16, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302013</span>
                    </div>
                </li>
                {/* Article 12 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302006">
                           Treatment of an amniotic band syndrome with fetoscopic surgery: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">195-199</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Selahattin Kumru, Serdar Kaya, Abdulkadir Atım, Adnan Aslan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 17, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302006</span>
                    </div>
                </li>
               {/* Article 13 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302007">
                           Ultrasound features of placental chorioangioma detected by SMI technology before and after thrombosis of feeding vessels: analysis of a clinical case
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">200-205</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Simona Bastonero, Andrea Sciarrone, Giulia Galtarossa, Annasilvia Pertusio, Ilaria Dusini, Giovanni Botta, Chiara Benedetto
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span className="pl-2"><strong>Online publication date:</strong> April 17, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302007</span>
                    </div>
                </li> 
                {/* Article 14 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302014">
                           Abstracts of the 10th World Congress of Perinatal Medicine in Developing Countries, 1–5 June 2022, Punta Cana, Dominican Republic
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">206-226</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        No authors listed
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 02, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302014</span>
                    </div>
                </li>
                 {/* Article 15 */}
                  <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20220302015">
                           International scientific achievements of Professor Erich Saling
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">227-230</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Asim Kurjak
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Abstract</span>
                        <span className="pl-2"><strong>Online publication date:</strong> July 02, 2022</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.22.0302015</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
