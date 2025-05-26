import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal"
                subtitle="Volume 23, Issue-3, December 2015"
                pageRange="141-211"
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
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233001">
                          Neurodevelopmental problems of late preterm fetuses and the factors affecting neurological morbidity
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">141-147</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Adil Barut, İsmail Burak Gültekin, Elif Akkaş Yılmaz, Murat Sabancı, Fatih Karslı, Osman Fadıl Kara, Ömer Kandemir, Tuncay Küçüközkan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> October 11, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233002">
                           Evaluation of conservative and radical surgical outcomes in placenta previa and accreta cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">148–152</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        İlay Gözükara, Oya Karapınar, Ali Ulvi Hakverdi, Kenan Dolapçıoğlu, Dilek Şilfeler, Mustafa Doğan Özçil, Raziye Kurt, Ayşe Okyay, Arif Güngören
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233003">
                            The impact of amnioinfusion on fetal survival in second trimester oligohydramnios cases with intact membrane
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">153–157</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Arif Güngören, İlay Gözükara, Oya Karapınar, Orhan Nural
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233004">
                            Inhibitory effects of isradipine on uterine contractions in pregnant rats
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">158–164</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Selahattin Kumru, Mehmet Nalbant, Selim Kutlu, Mete Ozcan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233004</span>
                    </div>
                </li>

                {/* Article 5 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233005">
                            Analysis of perinatal outcomes of the pregnant women applied magnesium sulfate due to severe preeclampsia and eclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">165–169</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Yasemin Çekmez, Oğuz Arslan, Simge Bağcı Türkmen, Gürkan Kıran
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233008">
                            Assessment of the cases undergone peripartum hysterectomy in Kahramanmaraş city center in the last two years
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">170–174</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Önder Ercan, Bülent Köstü, Güven Arslan, Murat Bakacak, Alev Özer, Hasan Eroğlu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233008</span>
                    </div>
                </li>
                {/* Article 7 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233009">
                           Anencephaly and coexisting malformations: analysis of 35 cases
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">175–179</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Senem Yaman Tunç, Elif Ağaçayak, Mehmet Sait İçen, Fatih Mehmet Fındık, Ahmet Yıldızbakan, Burcu Yücesoy, Ahmet Yalınkaya
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong>  October 11, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233009</span>
                    </div>
                </li>
                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233010">
                            Questionnaire on mouth and dental health during pregnancy: myths and facts
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">180–185</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Didem Ekiz, Ali Ekiz, Burak Özköse, Muzaffer Emir Dinçol, Rüstem Kemal Sübay, İbrahim Polat
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233010</span>
                    </div>
                </li>
                {/* Article 9 */}
               <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233011">
                            Cytokines and C-reactive protein in moderate and severe preeclampsia
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">186–193</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                      Ana Daneva Markova, Marija Hadzi Lega, Jasmina Popovic
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233011</span>
                    </div>
                </li>
                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233007">
                            Letter to the Editor: World Breastfeeding Week
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">205–206</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Burçin Karamustafaoğlu Balcı, Gökhan Göynümer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233007</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233012">
                            Pregnancy and puerperium during lactation
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">194–200</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Burçin Karamustafaoğlu Balcı, Gökhan Göynümer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong>10.2399/prn.15.0233012</span>
                    </div>
                </li>
                {/* Article 12 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20150233006">
                            Guideline for the assessment of thyroid during pregnancy
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">201–204</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                       Perinatal Tiroid Çalışma Grubu
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span className="pl-2"><strong>Online publication date:</strong> November 10, 2015</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.2399/prn.15.0233006</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
