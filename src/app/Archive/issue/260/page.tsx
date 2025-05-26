import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 27, Issue-3, December 2019"
                pageRange="125-197"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273001">
                           First-trimester uterine artery Doppler: does it matter if the bladder is full or empty?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">125-129</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ayşegül Özel, Cihat Şen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 21, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273002">
                          The assessment of preterm labor cases in terms of maternal fetal aspects
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">130-136</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Emine Arslan, Fikriye Karanfil Yaman, Turgay Şener
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 09, 2019 </span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273003">
                            Tetanus immunization in pregnant women: the factors affecting maternal evaluation, tetanus vaccination and vaccination rate
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">137-142 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Gökçe Turan, Gülnur Kul
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 09, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273004">
                           Early-onset neonatal sepsis and risk factors in the preterm infants
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">143–149 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Envera Lekić, Sonja Babović, Jelena Vukićević, Milorada Nešović, Ljubinka Dragaš
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 21, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273005">
                            The assessment of the prediction capacity of abdominal striae gravidarum on intraabdominal adhesions in the pregnant women with the history of cesarean section evaluated before the cesarean section
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">150-154</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      İlknur Çöl Madendağ, Mefkure Eraslan Şahin
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 21, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273006">
                            The clinical outcomes of the newborns of the preeclamptic mothers
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">155–160</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Öznur Tiryaki, Özge Karakaya Suzan, Sevin Altınkaynak, İbrahim Caner
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 21, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273006</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273007">
                           An ultrasound prediction model for probability of vaginal delivery in induction of labor
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">161-168</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Poonam Garg, Maria Dolores Gomez Roig, Aprajita Singla
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 30, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273007</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273008">
                            The importance of four-chamber and three-vessel (3-V) views in the screening of fetal cardiac anomalies in the first trimester
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">169-175 </span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Hakan Erenel, Mehmet Fatih Karslı, Ayşegül Özel, Sevim Özge Korkmaz, Resul Arısoy, Levent Saltık, Cihat Şen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 30, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273008</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273009">
                           The investigation of fetal adrenal gland sizes in the pregnancies complicated with the intrauterine growth restriction
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">176-182</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Başak Kaya, İbrahim Polat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 30, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.19.0273009</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273010">
                           Perinatal outcomes in the fetuses diagnosed with hydrops fetalis and isolated pleural effusion
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">183-188</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Reyhan Ayaz, Oya Demirci
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> December 31, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20190273011">
                           Does serum homocysteine level have a role in the early pregnancy loss?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">189-193</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Fatih Şanlıkan, Fatma Tufan Altuncu, Koray Özbay, Muhittin Eftal Avcı, Ahmet Göçmen
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  December 31, 2019</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.19.0273011</span>
                    </div>
                </li>
                
            </ul>
        </div>
    );
}
